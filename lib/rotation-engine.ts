export interface Roommate {
  id: string
  name: string
  isOnVacation: boolean
  fairnessScore: number
}

export interface Chore {
  id: string
  name: string
  difficulty: number // 1-10 scale
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly'
  assignedTo: string | null
  dueDate: Date
}

export interface RotationSchedule {
  weekNumber: number
  chores: Chore[]
  roommates: Roommate[]
  fairnessMetrics: {
    totalAssigned: number
    averageDifficulty: number
    fairnessScore: number
  }
}

export function calculateFairnessScore(
  assignments: Record<string, number[]>,
  totalChores: number
): number {
  const counts = Object.values(assignments).map((c) => c.length)
  const avg = counts.reduce((a, b) => a + b, 0) / counts.length
  const variance = counts.reduce((sum, count) => sum + Math.pow(count - avg, 2), 0) / counts.length
  return Math.max(0, 100 - Math.sqrt(variance) * 10)
}

export function getRotationSchedule(
  roommates: Roommate[],
  chores: Chore[]
): RotationSchedule {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000))
  
  // Filter out roommates on vacation
  const activeRoommates = roommates.filter(r => !r.isOnVacation)
  
  // Filter out chores not due this week
  const dueChores = chores.filter(c => {
    const now = new Date()
    return c.dueDate >= now && c.dueDate <= new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
  })
  
  // Assign chores fairly based on difficulty
  const assignments: Record<string, number[]> = {}
  activeRoommates.forEach(r => {
    assignments[r.id] = []
  })
  
  // Sort chores by difficulty (higher difficulty first)
  const sortedChores = [...dueChores].sort((a, b) => b.difficulty - a.difficulty)
  
  // Round-robin assignment with difficulty weighting
  sortedChores.forEach((chore, index) => {
    const round = index % activeRoommates.length
    const assignedRoommate = activeRoommates[round]
    if (assignedRoommate) {
      assignments[assignedRoommate.id].push(chore.id)
      chore.assignedTo = assignedRoommate.id
    }
  })
  
  // Calculate fairness score
  const fairnessScore = calculateFairnessScore(assignments, dueChores.length)
  
  return {
    weekNumber,
    chores: dueChores,
    roommates: activeRoommates,
    fairnessMetrics: {
      totalAssigned: dueChores.length,
      averageDifficulty: dueChores.reduce((sum, c) => sum + c.difficulty, 0) / dueChores.length,
      fairnessScore
    }
  }
}

export function rotateSchedule(
  currentSchedule: RotationSchedule,
  roommates: Roommate[]
): RotationSchedule {
  const nextWeekNumber = currentSchedule.weekNumber + 1
  const activeRoommates = roommates.filter(r => !r.isOnVacation)
  
  // Create new assignments for next week
  const newAssignments: Record<string, number[]> = {}
  activeRoommates.forEach(r => {
    newAssignments[r.id] = []
  })
  
  // Shift assignments by one roommate (round-robin rotation)
  const sortedChores = [...currentSchedule.chores].sort((a, b) => b.difficulty - a.difficulty)
  
  sortedChores.forEach((chore, index) => {
    const round = (index + 1) % activeRoommates.length
    const assignedRoommate = activeRoommates[round]
    if (assignedRoommate) {
      newAssignments[assignedRoommate.id].push(chore.id)
      chore.assignedTo = assignedRoommate.id
    }
  })
  
  return {
    weekNumber: nextWeekNumber,
    chores: currentSchedule.chores,
    roommates: activeRoommates,
    fairnessMetrics: {
      totalAssigned: currentSchedule.chores.length,
      averageDifficulty: currentSchedule.chores.reduce((sum, c) => sum + c.difficulty, 0) / currentSchedule.chores.length,
      fairnessScore: calculateFairnessScore(newAssignments, currentSchedule.chores.length)
    }
  }
}
