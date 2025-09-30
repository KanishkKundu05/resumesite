'use client'

const ACHIEVEMENTS = [
  {
    title: 'honour roll, cayley (uWaterloo) ',
    detail: 'national rank: 4th',
  },
  {
    title: 'silver honours, asia international mathematical olympiad',
    detail: 'national rank: 17th',
  },
  {
    title: 'distinction, american mathematics competition 12',
    detail: 'national rank: 15th',
  },
  {
    title: 'distinction, american mathematics competition 10',
    detail: 'top 5% worldwide',
  },
]

export default function OlympiadsPage() {
  return (
    <main className="space-y-24">
      <section>
        <div className="flex-1">
          <div className="space-y-3 text-[1.2rem] leading-relaxed text-zinc-600">
            <p>
              my love for problem solving started{' '}
              <span className="italic">here</span>.
            </p>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((achievement) => (
                <div key={achievement.title}>
                  <p className="text-black">
                    {achievement.title}
                  </p>
                  <p className="mt-[0.2rem] text-[1.02rem] text-zinc-500">{achievement.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

