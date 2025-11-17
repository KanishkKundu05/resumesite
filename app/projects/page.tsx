'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'

type Collaborator = {
  prefix?: string
  label: string
  href?: string
  suffix?: string
}

type ResearchProject = {
  title: string
  collaborator?: Collaborator
  description: ReactNode
  link?: string
}

const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: 'sentryai.org',
    link: 'https://sentryai.org',
    description: 
      <>
      my attempt at closing the AI gap in India: $B legacy firms are using Sentry to transform customer support & internal operations. 120k+ ARR {'<'} 50 days.
      </>
    ,
  },
  {
    title: 'atlasagents.ai',
    link: 'https://atlasagents.ai',
    description: (
      <>
        platform to build custom AI agents. 0 {'->'} 1000+ users in 60 days. 
      </>
    ),
  },
]

export default function ResearchPage() {
  return (
    <main className="space-y-6">
      <div className="relative">
        <Link href="/" className="absolute -top-8 left-0 text-blue-600 underline hover:text-black">
          ←
        </Link>
        <header className="mb-6">
          <strong className="block text-2xl font-semibold">my projects</strong>
        </header>
      </div>
      <section>
        <div className="flex-1">
          <div className="space-y-3 text-[1.2rem] leading-relaxed text-zinc-600">
            <div className="space-y-6">
              {RESEARCH_PROJECTS.map((project) => (
                <div key={project.title} className="space-y-1">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {project.title}
                  </a>
                  <div className="text-[0.9rem] leading-relaxed">
                    {project.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

