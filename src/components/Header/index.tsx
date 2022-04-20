import { useNavigate } from 'react-router-dom';
import { MdDeveloperMode } from 'react-icons/md';

export default function Header(): JSX.Element {
  const pages = [
    {
      name: 'Home',
      route: '',
    },
    {
      name: 'Sobre',
      route: 'about',
    },
    {
      name: 'Experiências',
      route: 'experiences',
    },
    {
      name: 'Projetos',
      route: 'projects',
    },
    {
      name: 'Contato',
      route: 'contact',
    },
  ];
  const navigate = useNavigate();
  return (
    <header>
      <h1>
        <MdDeveloperMode />
        Marina Marques
      </h1>
      {
        pages.map((element) => (
          <button
            type="button"
            key={element.name}
            className="pages-link"
            onClick={() => navigate(`/${element.route}`)}
          >
            {element.name}
          </button>
        ))
      }
    </header>
  );
}
