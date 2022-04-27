import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill, BsGithub, BsPinMap } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import { SiMicrosoftoutlook } from 'react-icons/si';
import './style.scss';
import BackgroundPage from '../../components/BackgroundPage';
import BackAndForward from '../../components/BackAndForward';

export default function Contact() {
  return (
    <div className="contact-container">
      <BackgroundPage top="CON" bottom="TACT" />
      <h1>
        Con
        <span>tact</span>
      </h1>
      <section className="card-infos">
        <div className="contact-info">
          <h2>
            <BsFillTelephoneFill />
            +55 31 99751-6603
          </h2>
          <h2>
            <AiOutlineMail />
            marina.marqueso@outlook.com
          </h2>
          <h2>
            <BsPinMap />
            Minas Gerais, Brazil
          </h2>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/marina-marqueso/" target="_blank" rel="noreferrer">
            <GrLinkedin />
          </a>
          <a href="https://github.com/ninamarq" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="mailto:marina.marqueso@outlook.com">
            <SiMicrosoftoutlook />
          </a>
        </div>
      </section>
      <BackAndForward back="/projects" forward="/" />
    </div>
  );
}
