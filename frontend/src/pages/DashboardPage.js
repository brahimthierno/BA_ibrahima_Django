import React, { useEffect, useState } from 'react';
import ProjectList from '../components/ProjectList';
import projectService from '../services/projects';

const DashboardPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Tableau de Bord</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default DashboardPage;