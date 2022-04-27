import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import BackAndForward from '../../components/BackAndForward';
import BackgroundPage from '../../components/BackgroundPage';
import getProjects, { IProject } from '../../services/getProjects';
import './style.scss';

export default function Projects() {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const [projects, setProjects] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const projectsAPI = async (): Promise<void> => setProjects?.(await getProjects());

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-floating-promises */
    projectsAPI();
    console.log('opa');
    setLoading(false);
  }, []);

  console.log(loading);

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
            projects?.map((element: IProject) => (
              <section key={element.id}>
                <img src={element.img_link} alt={element.name} />
                <div>
                  <h2>{element.name}</h2>
                  <div>
                    <a href={element.github_link} target="_blank" rel="noreferrer">
                      <BsGithub />
                      Git Repository
                    </a>
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
