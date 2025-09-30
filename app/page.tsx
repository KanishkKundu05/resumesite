import Link from 'next/link'
 

export default function Personal() {
  return (
    <main className="space-y-24">
      <section>
        <div className="flex-1 text-[1.2rem] leading-relaxed text-zinc-600">
          <p>i love tackling hard problems & currently study math @ nyu courant.</p>
          <p className="mt-4">
            i am a 2x AIME qualifier and grind{' '}
            <Link href="/olympiads" className="underline">
              olympiads
            </Link>
            {' '}for fun.
          </p>
          <p className="mt-6">
            at college, i did{' '}
            <Link href="/research" className="underline">
              research
            </Link>{' '}
            at the intersection of applied math & ai.
          </p>
          <p className="mt-6">currently enjoy building automation systems & ai agents.</p>
          <p className="mt-6">
            reach out to me on{' '}
            <a
              href="https://x.com/mewsSOL"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              X
            </a>{' '}
            or email me at kk5241@nyu.edu.
          </p>
          <div className="mt-10 flex items-center justify-left gap-5">
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
