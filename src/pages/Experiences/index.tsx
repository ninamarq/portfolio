import { HiAcademicCap } from 'react-icons/hi';
import { TiDeviceLaptop } from 'react-icons/ti';
import BackAndForward from '../../components/BackAndForward';
import BackgroundPage from '../../components/BackgroundPage';
import './style.scss';

export default function Experiences() {
  return (
    <div className="experience-container">
      <BackgroundPage top="EXPERI" bottom="ENCES" />
      <h1>
        Experi
        <span>ences</span>
      </h1>
      <div className="experiences">
        <section className="experiences-cards">
          <h2>
            Education
            <HiAcademicCap />
          </h2>
          <div>
            <h4>February 2019 - July 2023</h4>
            <h3>Química Tecnológica</h3>
            <p>Universidade Federal de Minas Gerais</p>
          </div>
          <div>
            <h4>July 2020 - August 2022</h4>
            <h3>Web Development | Full-Stack</h3>
            <p>Trybe</p>
          </div>
        </section>
        <section className="experiences-cards">
          <h2>
            Jobs
            <TiDeviceLaptop />
          </h2>
          <div>
            <h4>February 2022 - Current</h4>
            <h3>Front-End Developer</h3>
            <p>Dopster</p>
          </div>
        </section>
      </div>
      <BackAndForward back="/about" forward="/projects" />
    </div>
  );
}
