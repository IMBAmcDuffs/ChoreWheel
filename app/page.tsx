"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { AlertCircle, CheckCircle, Clock, Users } from "lucide-react"

interface Chore {
  id: string
  title: string
  assignedTo: string
  dueDate: string
  completed: boolean
  overdue: boolean
}

interface Roommate {
  id: string
  name: string
  completedChores: number
  totalChores: number
}

const mockChores: Chore[] = [
  { id: "1", title: "Take out trash", assignedTo: "Alice", dueDate: "2024-03-20", completed: false, overdue: true },
  { id: "2", title: "Clean kitchen", assignedTo: "Bob", dueDate: "2024-03-21", completed: false, overdue: true },
  { id: "3", title: "Vacuum living room", assignedTo: "Charlie", dueDate: "2024-03-22", completed: true, overdue: false },
  { id: "4", title: "Water plants", assignedTo: "Alice", dueDate: "2024-03-23", completed: false, overdue: false },
  { id: "5", title: "Dish duty", assignedTo: "Bob", dueDate: "2024-03-24", completed: false, overdue: false },
]

const mockRoommates: Roommate[] = [
  { id: "1", name: "Alice", completedChores: 12, totalChores: 20 },
  { id: "2", name: "Bob", completedChores: 15, totalChores: 20 },
  { id: "3", name: "Charlie", completedChores: 18, totalChores: 20 },
]

export default function Dashboard() {
  const [choreList, setChoreList] = useState<Chore[]>(mockChores)

  const handleComplete = (id: string) => {
    setChoreList(choreList.map(chore =>
      chore.id === id ? { ...chore, completed: true } : chore
    ))
  }

  const overdueChores = choreList.filter(chore => chore.overdue)
  const completionRate = mockRoommates.reduce((acc, rm) => acc + (rm.completedChores / rm.totalChores) * 100, 0) / mockRoommates.length

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">ChoreWheel Dashboard</h1>
        <p className="text-gray-600 mt-2">Current week overview and fairness metrics</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Overdue Chores</p>
              <p className="text-2xl font-bold text-red-600">{overdueChores.length}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-green-600">{completionRate.toFixed(1)}%</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Roommates</p>
              <p className="text-2xl font-bold text-blue-600">{mockRoommates.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-purple-600">5 chores</p>
            </div>
            <Clock className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Completion Rate by Roommate</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockRoommates} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completionRate" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Fairness Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockRoommates} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalChores" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Current Week Assignments</h2>
        <div className="space-y-3">
          {choreList.map(chore => (
            <div key={chore.id} className={`flex items-center justify-between p-4 rounded-lg ${chore.overdue ? 'bg-red-50' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-4">
                {chore.overdue && <AlertCircle className="w-5 h-5 text-red-600" />}
                <div>
                  <p className={`font-medium ${chore.completed ? 'line-through text-gray-400' : ''}`}>{chore.title}</p>
                  <p className="text-sm text-gray-600">Assigned to: {chore.assignedTo}</p>
                  <p className="text-sm text-gray-500">Due: {chore.dueDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${chore.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {chore.completed ? 'Completed' : 'Pending'}
                </span>
                {!chore.completed && (
                  <button
                    onClick={() => handleComplete(chore.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
