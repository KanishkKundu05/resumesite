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
    title: 'clustering algorithms for high-dimensional data',
    collaborator: {
      prefix: 'w/ prof.',
      label: 'Rao',
      href: 'https://sites.utexas.edu/raghunath-rao/',
    },
    description: (
      <>
        tackled the curse of dimensionality. found customer segments for sun
        country airlines & ran targeted campaigns.
      </>
    ),
    link: '/clustering-algorithms',
  },
  {
    title: 'securing wall st’s plumbing',
    collaborator: {
      prefix: 'at',
      label: 'DTCC VIP',
      href: 'https://engineering.nyu.edu/research-innovation/student-research/vertically-integrated-projects/vip-teams/dtcc-supply-chain-research-gy',
    },
    description: (
      <>
        helping grad team test software supply-chain controls of financial systems that
        process $7T+ daily post-trade.
      </>
    ),
  },
  {
    title: 'are space elevators possible?',
    collaborator: {
      prefix: 'published at',
      label: 'IRJET',
      href: 'https://www.irjet.net/archives/V9/i12/IRJET-V9I1257.pdf',
    },
    description: (
      <>
        inspired by the mombassa tether from halo 3. ran abaqus simulations. my
        first independent paper.
      </>
    ),
  },
]

export default function ResearchPage() {
  return (
    <main className="space-y-24">
      <section>
        <div className="flex-1">
          <div className="space-y-3 text-[1.2rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
            <div className="space-y-6">
              {RESEARCH_PROJECTS.map((project) => (
                <div key={project.title} className="space-y-1">
                  <p className="text-black dark:text-zinc-200">
                    {project.title}
                    {project.collaborator ? (
                      <span className="ml-2 align-baseline text-sm text-zinc-500 dark:text-zinc-400">
                        {project.collaborator.prefix
                          ? `${project.collaborator.prefix} `
                          : ''}
                        {project.collaborator.href ? (
                          <a
                            href={project.collaborator.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            {project.collaborator.label}
                          </a>
                        ) : (
                          project.collaborator.label
                        )}
                        {project.collaborator.suffix
                          ? ` ${project.collaborator.suffix}`
                          : ''}
                      </span>
                    ) : null}
                  </p>
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

