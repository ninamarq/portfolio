import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './style.scss';

export default function BackAndForward(props: {
  back: string;
  forward: string;
}) {
  const { back, forward } = props;
  return (
    <div className="links">
      <span>
        <Link to={back}><GrFormPreviousLink /></Link>
      </span>
      <span>
        <Link to={forward}><GrFormNextLink /></Link>
      </span>
    </div>
  );
}
