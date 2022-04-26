import Header from '../../components/Header';
import Profile from '../../assets/profile.jpeg';
import './style.scss';

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <div className="left-container">
        <div>
          <h2>Hello there!</h2>
          <h1>
            I'm
            {' '}
            Marina
            {' '}
            <span>Marques</span>
          </h1>
          <h3>Full-Stack Developer</h3>
        </div>
        <p>
          I'm from Brazil, Minas Gerais, the state famous for it's famous
          {' '}
          <a href="https://www.youtube.com/watch?v=IOb5uric4n0">🧀</a>
          {' '}
          "cheese-bread".
          A new student and a new worker at the great Web Universe,
          a coffee lover ☕ and a happy developer.
        </p>
        <button type="button">About Me</button>
      </div>
      <div className="right-container">
        <img src={Profile} alt="Marina Marques" />
      </div>
    </div>
  );
}
