import { useNavigate } from 'react-router-dom';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Profile from '../../assets/profile.jpeg';
import './style.scss';
import CV from '../../assets/curriculum_marina_marques.pdf';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="left-container">
        <div>
          <h2>
            Hello there!
            <span> ✋</span>
          </h2>
          <h1>
            I'm
            Marina
            <span> Marques</span>
          </h1>
          <h3>Full-Stack Developer</h3>
        </div>
        <p>
          I'm from Brazil, Minas Gerais, the state famous for it's famous
          {' '}
          <a href="https://www.youtube.com/watch?v=IOb5uric4n0" target="_blank" rel="noreferrer">🧀</a>
          {' '}
          "cheese-bread".
          A new student and a new worker at the great Web Universe,
          a coffee lover ☕ and a happy developer.
        </p>
        <section>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <a href={CV} download="cv_marina.pdf">
            <AiOutlineCloudDownload />
            Download CV
          </a>
          <button type="button" onClick={() => navigate('/about')}>
            About Me
          </button>
        </section>
      </div>
      <div className="right-container">
        <img src={Profile} alt="Marina Marques" />
      </div>
    </div>
  );
}
