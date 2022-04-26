import Header from '../../components/Header';
import Profile from '../../assets/profile.jpeg';
import './style.scss';

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <div className="left-container">
        <h2>Hello There!</h2>
        <h1>Marina Marques</h1>
      </div>
      <div className="right-container">
        <img src={Profile} alt="Marina Marques" />
      </div>
    </div>
  );
}
