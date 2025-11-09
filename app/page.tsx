import Link from 'next/link'
 

export default function Personal() {
  return (
    <main className="space-y-24">
      <header className="mb-6">
        <strong className="block text-2xl font-semibold">hi, im kanishk</strong>
      </header>
      <section>
        <div className="flex-1 space-y-6 text-[1.2rem] leading-relaxed text-zinc-600">
          <p>i love tackling hard problems & currently study math @ nyu courant.</p>
          <p>
            i am a 2x AIME qualifier and grind{' '}
            <Link href="/olympiads" className="underline">
              olympiads
            </Link>
            {' '}for fun.
          </p>
          <p>
            at college, i did{' '}
            <Link href="/research" className="underline">
              research
            </Link>{' '}
            at the intersection of applied math & ai.
          </p>
          <p>currently enjoy{' '}<Link href = "/projects" className="underline">building</Link> AI agents & enterprise automations</p>
          <p>
            reach out to me on{' '}
            <a
              href="https://x.com/kanishk_k23"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              X
            </a>{' '}
            or email me at kk5241@nyu.edu.
          </p>
          <div className="flex items-center justify-left gap-5 pt-4">
            <a
              href="https://www.linkedin.com/in/kanishkkundu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Linkedin
            </a>
            <span>|</span>
            <a
              href="https://github.com/kanishkkundu05"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Github
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
