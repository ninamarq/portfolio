import {
  SiCss3, SiHtml5, SiJavascript, SiReact, SiSass, SiTypescript,
} from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import Header from '../../components/Header';
import './style.scss';

export default function About() {
  const technologies = [
    {
      name: 'HTML',
      logo: <SiHtml5 />,
    },
    {
      name: 'CSS',
      logo: <SiCss3 />,
    },
    {
      name: 'Sass',
      logo: <SiSass />,
    },
    {
      name: 'Typescript',
      logo: <SiTypescript />,
    },
    {
      name: 'Javascript',
      logo: <SiJavascript />,
    },
    {
      name: 'Node',
      logo: <GrNode />,
    },
    {
      name: 'React',
      logo: <SiReact />,
    },
  ];

  return (
    <div className="about-container">
      <Header />
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
            Since July of 2021, I'm a web development student at
            <span> Trybe</span>
            . Always building
            projects monthly and taking classes everyday.
          </p>
        </section>
        <section className="technologies">
          <h2>
            Main
            <span> Skills</span>
          </h2>
          <div>
            {
              technologies.map((element) => (
                <div key={element.name} className="technology-card">
                  {element.logo}
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </div>
  );
}
