import {
  SiCss3, SiHtml5, SiJavascript, SiReact, SiSass, SiTypescript,
} from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import Header from '../../components/Header';
import './style.scss';
import SubAbout from './SubAbout';

export default function About() {
  const technologies = [
    {
      name: 'HTML',
      logo: <SiHtml5 />,
      site: 'https://devdocs.io/html/',
    },
    {
      name: 'CSS',
      logo: <SiCss3 />,
      site: 'https://devdocs.io/css/',
    },
    {
      name: 'Sass',
      logo: <SiSass />,
      site: 'https://sass-lang.com/documentation',
    },
    {
      name: 'Typescript',
      logo: <SiTypescript />,
      site: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Javascript',
      logo: <SiJavascript />,
      site: 'https://devdocs.io/javascript/',
    },
    {
      name: 'Node',
      logo: <GrNode />,
      site: 'https://nodejs.org/en/docs/',
    },
    {
      name: 'React',
      logo: <SiReact />,
      site: 'https://reactjs.org/docs/hello-world.html',
    },
  ];

  return (
    <div className="about-container">
      <Header />
      <SubAbout />
      <main>
        <h1>
          <span>About </span>
          Me
        </h1>
        <section className="presentation">
          <p>
            I'm
            <span> Marina Marques</span>
            , I'm 22 years old and
            I live in Betim - MG.
            A
            <span> Full-Stack developer </span>
            but a passionate front-end, about interfaces,
            from ther creation, organization, sketching to development.
            I really like to learn more technologies and the area.
          </p>
          <p>
            Currently, I'm in career transition, from Chemistry to Web Developer.
            Since July of 2021, I'm a student at
            <a
              href="https://www.betrybe.com/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Trybe
            </a>
            . Always building
            projects monthly and taking classes everyday.
          </p>
        </section>
        <section className="technologies">
          <h2>
            Main
            <span> Skills</span>
          </h2>
          <ul>
            {
              technologies.map((element) => (
                <li
                  key={element.name}
                  className="technology-card"
                >
                  <a
                    href={element.site}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {element.logo}
                  </a>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    </div>
  );
}
