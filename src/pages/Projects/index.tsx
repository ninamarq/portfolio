import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import BackAndForward from '../../components/BackAndForward';
import BackgroundPage from '../../components/BackgroundPage';
import { IProject } from '../../services/getProjects';
import './style.scss';

export default function Projects() {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  // const [projects, setProjects] = useState<any>([]);
  // const projectsAPI = async (): Promise<void> => setProjects?.(await getProjects());

  // useEffect(() => {
  //   /* eslint-disable @typescript-eslint/no-floating-promises */
  //   projectsAPI();
  // }, []);

  const projects = [
    {
      id: 1,
      name: 'createStore( )',
      github_link: 'https://github.com/ninamarq/create-store',
      img_link: 'https://github.com/ninamarq/create-store/blob/main/createstore.png?raw=true',
      description: 'Website built to study Hooks, API usage and CSS',
      deploy: 'https://createstore.netlify.app/',
    },
    {
      id: 2,
      name: 'crud-typescript',
      github_link: 'https://github.com/ninamarq/crud-typescript',
      img_link: 'https://github.com/ninamarq/crud-typescript/blob/main/assets/telaInsomnia.png?raw=true',
      description: 'Database built to study Node.js and Typescript',
    },
  ];

  return (
    <div className="projects-container">
      <BackgroundPage top="PRO" bottom="JECTS" />
      <h1>
        Pro
        <span>jects</span>
      </h1>
      <div className="projects-list">
        {
            /* eslint-disable @typescript-eslint/no-unsafe-member-access */
            /* eslint-disable @typescript-eslint/no-unsafe-call */
            projects.map((element: IProject) => (
              <section key={element.id}>
                <img src={element.img_link} alt={element.name} />
                <div>
                  <h2>{element.name}</h2>
                  <p>{element.description}</p>
                  <div className="a-container">
                    <a href={element.github_link} target="_blank" rel="noreferrer">
                      <BsGithub />
                      Git Repository
                    </a>
                    {
                      element?.deploy && (
                        <a href={element.deploy} target="_blank" rel="noreferrer">
                          <CgWebsite />
                          Acces WebSite
                        </a>
                      )
                    }
                  </div>
                </div>
              </section>
            ))
          }
      </div>
      <BackAndForward back="/experiences" forward="/contact" />
    </div>
  );
}
