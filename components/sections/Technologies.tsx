import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'

const TECHNOLOGIES = [
  {
    name: 'JavaScript',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/javascript.svg'
  },
  {
    name: 'PHP',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/php.svg'
  },
  {
    name: 'React',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/react.svg'
  },
  {
    name: 'NextJS',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/nextjs.svg'
  },
  {
    name: 'JQuery',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/jquery.svg'
  },
  {
    name: 'SASS',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/sass.svg'
  },
  {
    name: 'Material UI',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/mui.svg'
  },
  {
    name: 'Redux',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/redux.svg'
  },
  {
    name: 'Webpack',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/webpack.svg'
  },
  {
    name: 'Babel',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/babel.svg'
  },
  {
    name: 'NodeJS',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/nodejs.svg'
  },
  {
    name: 'Express',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/express.svg'
  },
  {
    name: 'Mongo DB',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/mongodb.svg'
  },
  {
    name: 'MySQL',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/mysql.svg'
  },
  {
    name: 'PostgreSQL',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/postgresql.svg'
  },
  {
    name: 'Firebase',
    iconUrl: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/firebase.svg'
  }
];

export function Technologies() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-14">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-xl font-semibold tracking-wider text-white sm:text-left">
            Technologies i love to work with
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-10 justify-items-center"
          >
            {TECHNOLOGIES.map(({name, iconUrl}) => (
              <li key={name}>
                <FadeIn>
                  <Image src={iconUrl} alt={name} width={40} height={40} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
