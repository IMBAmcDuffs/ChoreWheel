import ChoreWheel from '@/components/ChoreWheel'
import { getRotationSchedule } from '@/lib/rotation-engine'

export default function Home() {
  const schedule = getRotationSchedule()

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">
          Chore Wheel
        </h1>
        <ChoreWheel schedule={schedule} />
      </div>
    </main>
  )
}
