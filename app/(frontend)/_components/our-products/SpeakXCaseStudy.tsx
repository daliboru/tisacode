import Link from 'next/link'
import React from 'react'
import Spacer from '../../../../components/Spacer'

const SPEAK_X_URL = 'https://speak-x.com/'

const figures = [
  { value: '3', label: 'languages to learn' },
  { value: '9', label: 'languages the tutor explains in' },
  { value: '5', label: 'free lessons on every platform' },
]

const aroundTheConversation = [
  {
    title: 'Words, with review.',
    description: 'New ones every day, old ones right when they would start to fade.',
  },
  {
    title: 'Idioms, unlocked one at a time.',
    description: 'The phrases people use and a textbook leaves out.',
  },
  {
    title: 'Lessons at your level.',
    description: 'One question at the start. Too easy or too hard, you move the level yourself.',
  },
  {
    title: 'A streak.',
    description: 'One dot a day.',
  },
  {
    title: 'Web and Telegram, one account.',
    description: 'Same progress, same word list, same subscription.',
  },
]

const platforms = [
  {
    name: 'Pričaj Mađarski',
    detail: 'Hungarian, explained in 2 languages',
    domain: 'pricajmadjarski.com',
    href: 'https://pricajmadjarski.com',
  },
  {
    name: 'Govori slovensko',
    detail: 'Slovenian, explained in 5 languages',
    domain: 'govorislovensko.si',
    href: 'https://govorislovensko.si',
  },
  {
    name: 'English Please',
    detail: 'British English, explained in 6 languages',
    domain: 'englishplease.app',
    href: 'https://englishplease.app',
  },
]

const SectionHeading: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <h3>
    <span className="block text uppercase tracking-widest">{label}</span>
    <span className="block title mt-extrasmall">{children}</span>
  </h3>
)

const SpeakXCaseStudy: React.FC = () => {
  return (
    <article id="speak-x">
      <div className="text uppercase tracking-widest">Case study № 01</div>
      <Spacer size="small" />
      <h2 className="section">Speak-X. The last chapter, moved to the front.</h2>
      <Spacer size="large" />

      <section id="overview" className="border-b-4 border-black pb-medium">
        <SectionHeading label="01 / Overview">Three languages. One engine.</SectionHeading>
        <Spacer size="medium" />
        <div className="text space-y-3">
          <p>
            Speak-X is the home of three language platforms: Pričaj Mađarski for Hungarian, Govori
            slovensko for Slovenian and English Please for British English. They are made for
            adults who need the language for something. An interview, a job, a move.
          </p>
          <p>
            On all three you speak from the first lesson. A few minutes a day with an AI tutor, by
            voice or by text, in the browser or on Telegram.
          </p>
        </div>
        <Spacer size="medium" />
        <dl className="grid grid-cols-3 gap-small">
          {figures.map(figure => (
            <div key={figure.label} className="flex flex-col-reverse justify-end">
              <dt className="text">{figure.label}</dt>
              <dd className="section">{figure.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <Spacer size="medium" />

      <section id="problem" className="border-b-4 border-black pb-medium">
        <SectionHeading label="02 / Problem">
          Conversation waits in the last chapter.
        </SectionHeading>
        <Spacer size="medium" />
        <div className="text space-y-3">
          <p>A clerk at the consulate asks where you were born. In Hungarian.</p>
          <p>
            You know the answer. You know the words, too. You have read them more often than you
            would admit.
          </p>
          <p>Silence.</p>
          <p>
            Most people understand more than they can say, and most courses are in no hurry to
            change that. Conversation is kept for the last chapter.
          </p>
          <p className="font-bold">
            An adult with an interview this month will not read that far.
          </p>
          <p>
            The same goes for the first shift in Slovenia and the job interview in English. You
            need the sentences for this month. The textbook has them down for the last chapter.
          </p>
        </div>
      </section>
      <Spacer size="medium" />

      <section id="solution" className="border-b-4 border-black pb-medium">
        <SectionHeading label="03 / Solution">Chapter one is a conversation.</SectionHeading>
        <Spacer size="medium" />
        <div className="text space-y-3">
          <p>We moved the last chapter to the front.</p>
          <p>
            You pick a situation (the citizenship interview, the job interview, the shift, the
            paperwork) and the tutor builds a short lesson around it. You answer out loud or in
            writing. It corrects you in the language you already speak, remembers where you slipped
            and reads the right answer aloud.
          </p>
          <p>What sits around the conversation:</p>
          <ul className="list-disc pl-5 space-y-2">
            {aroundTheConversation.map(item => (
              <li key={item.title}>
                {item.title} {item.description}
              </li>
            ))}
          </ul>
          <p>
            Now the part we geek out about.{' '}
            <span className="font-bold">Under all three platforms there is one engine</span>:
            lessons, words, review, idioms, progress, sign-in, subscriptions, even the emails. A
            language is a package on top: its content, its voice, its look. The languages it
            explains in are packs, added one by one.
          </p>
          <p>
            Oh, and British English can be explained in Chinese (Simplified). It is on the list,
            right after Italian.
          </p>
        </div>
      </section>
      <Spacer size="medium" />

      <section id="results" className="border-b-4 border-black pb-medium">
        <SectionHeading label="04 / Results">
          The next language does not start from page one.
        </SectionHeading>
        <Spacer size="medium" />
        <div className="text space-y-3">
          <p>
            Three platforms run on that engine, each with its own site, its own Telegram bot and
            its own prices.
          </p>
          <ul className="space-y-2">
            {platforms.map(platform => (
              <li key={platform.domain}>
                <span className="font-bold">{platform.name}.</span> {platform.detail}.{' '}
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-dark transition"
                >
                  {platform.domain}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-bold">An improvement made for one language reaches all of them.</p>
          <p>
            No hockey-stick chart here. The numbers we can stand behind are the three at the top,
            and you can count them yourself on the site.
          </p>
        </div>
      </section>
      <Spacer size="medium" />

      <section id="visit">
        <SectionHeading label="05 / Next chapter">
          The next chapter is not ours to pick.
        </SectionHeading>
        <Spacer size="medium" />
        <div className="text space-y-3">
          <p>
            The next platform is decided by who asks for it. A language you cannot find, a school,
            a company with staff to teach.
          </p>
          <p>
            The clerk will still ask where you were born. We only moved the chapter where you
            answer.
          </p>
        </div>
        <Spacer size="medium" />
        <div className="flex justify-center">
          <a
            href={SPEAK_X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold"
          >
            {'Open Speak-X →'}
          </a>
        </div>
        <Spacer size="medium" />
        <div className="text text-center">
          Need an engine like this under your own product?{' '}
          <Link href="/#contact" className="underline hover:text-orange-dark transition">
            {'Talk to us →'}
          </Link>
        </div>
      </section>
    </article>
  )
}

export default SpeakXCaseStudy
