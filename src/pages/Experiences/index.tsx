import { HiAcademicCap } from 'react-icons/hi';
import { TiDeviceLaptop } from 'react-icons/ti';

export default function Experiences() {
  return (
    <div>
      <h1>Experiences</h1>
      <section>
        <h2>
          Education
          <HiAcademicCap />
        </h2>
        <div>
          <h3>February 2019 - July 2023</h3>
          <h2>Química Tecnológica</h2>
          <p>Universidade Federal de Minas Gerais</p>
        </div>
        <div>
          <h3>July 2020 - August 2022</h3>
          <h2>Web Development | Full-Stack</h2>
          <p>Trybe</p>
        </div>
      </section>
      <section>
        <h2>
          Jobs
          <TiDeviceLaptop />
        </h2>
        <div>
          <h3>February 2022 - Current</h3>
          <h2>Front-End Developer</h2>
          <a href="https://dopster.io/" target="_blank" rel="noreferrer">Dopster.io</a>
        </div>
      </section>
    </div>
  );
}
