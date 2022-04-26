import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaSuitcase, FaTelegramPlane } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import './style.scss';

export default function Header(): JSX.Element {
  const { pathname } = useLocation();

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
              <Link
                className={pathname.split('/')[1] === element.route ? 'pages-link route' : 'pages-link'}
                to={`/${element.route}`}
              >
                {element.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  );
}
