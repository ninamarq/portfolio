export interface IProject {
  id?: number;
  name: string;
  github_link: string;
  img_link: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function getProjects() {
  const URL = 'https://ninamarq-backend.herokuapp.com/';
  return (
    fetch(URL)
      .then((response) => response.json())
      .then((data) => data)
  );
}
