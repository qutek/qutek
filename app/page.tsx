import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn';


export const metadata: Metadata = {
  description:
    'Experienced web developer, expertise in WordPress, React, and Node.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Hello there 👋
          </h1>
          <p className="mt-6 text-2xl text-neutral-600">
            I'm Lafif, an experienced web developer since 2012 with a passion for creating innovative online solutions.
          </p>
          <p className="mt-6 text-2xl text-neutral-600">
          Throughout my career, I have worked extensively with popular technologies like WordPress, React, and Node.js. In addition to my current skill set, I am constantly exploring new horizons in the tech world. I am particularly excited about edge/cloud services and serverless architecture.
          </p>
        </FadeIn>
      </Container>
    </>
  )
}
