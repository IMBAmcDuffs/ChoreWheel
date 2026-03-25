'use client'

import { useState } from 'react'
import { RotationSchedule, Roommate, Chore } from '@/lib/rotation-engine'

interface ChoreWheelProps {
  schedule: RotationSchedule
}

export default function ChoreWheel({ schedule }: ChoreWheelProps) {
  const [rotationMode, setRotationMode] = useState<'weekly' | 'manual'>('weekly')
  
  const roommates = schedule.roommates
  const chores = schedule.chores
  
  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setRotationMode('weekly')}
          className={`px-4 py-2 rounded-lg ${
            rotationMode === 'weekly'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Weekly Rotation
        </button>
        <button
          onClick={() => setRotationMode('manual')}
          className={`px-4 py-2 rounded-lg ${
            rotationMode === 'manual'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Manual Override
        </button>
      </div>
      
      {/* Wheel Visualization */}
      <div className="flex flex-wrap justify-center gap-4">
        {roommates.map((roommate) => (
          <div
            key={roommate.id}
            className={`p-4 rounded-xl shadow-lg transition-all ${
              roommate.isOnVacation
                ? 'bg-gray-100 opacity-50'
                : 'bg-white hover:shadow-xl'
            }`}
          >
            <h3 className="font-bold text-lg mb-2">{roommate.name}</h3>
            <div className="space-y-2">
              {chores.filter(c => c.assignedTo === roommate.id).map((chore) => (
                <div
                  key={chore.id}
                  className="p-2 bg-indigo-50 rounded-lg text-sm"
                >
                  <div className="font-medium">{chore.name}</div>
                  <div className="text-xs text-gray-500">
                    Difficulty: {chore.difficulty}/10
                  </div>
                </div>
              ))}
              {chores.filter(c => c.assignedTo === roommate.id).length === 0 && (
                <div className="text-gray-400 text-sm">No chores this week</div>
              )}
            </div>
            <div className="mt-3 text-sm text-gray-600">
              Fairness Score: {roommate.fairnessScore.toFixed(1)}
            </div>
          </div>
        ))}
      </div>
      
      {/* Fairness Metrics */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Fairness Metrics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {schedule.fairnessMetrics.totalAssigned}
            </div>
            <div className="text-sm text-gray-500">Chores Assigned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {schedule.fairnessMetrics.averageDifficulty.toFixed(1)}
            </div>
            <div className="text-sm text-gray-500">Avg Difficulty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {schedule.fairnessMetrics.fairnessScore.toFixed(1)}
            </div>
            <div className="text-sm text-gray-500">Fairness Score</div>
          </div>
        </div>
      </div>
    </div>
  )
}
