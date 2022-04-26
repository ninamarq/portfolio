import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaSuitcase, FaTelegramPlane } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import './style.scss';

export default function Header(): JSX.Element {
  const pages = [
    {
      name: <AiFillHome />,
      route: '',
    },
    {
      name: <BsFillPersonFill />,
      route: 'about',
    },
    {
      name: <FaSuitcase />,
      route: 'experiences',
    },
    {
      name: <CgWebsite />,
      route: 'projects',
    },
    {
      name: <FaTelegramPlane />,
      route: 'contact',
    },
  ];
  return (
    <header className="header-container">
      <ul className="link-list">
        {
          pages.map((element) => (
            <li
              key={element.route}
            >
              <Link className="pages-link" to={`/${element.route}`}>
                {element.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  );
}
