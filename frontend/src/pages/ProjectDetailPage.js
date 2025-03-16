import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import projectService from '../services/projects';
import taskService from '../services/tasks';
import authService from '../services/auth';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchProjectAndTasks = async () => {
      try {
        const projectData = await projectService.getProject(projectId);
        setProject(projectData);

        const tasksData = await taskService.getTasks(projectId);
        setTasks(tasksData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchProjectAndTasks();
  }, [projectId]);

  const handleTaskSubmit = async (taskData) => {
    try {
      const newTask = await taskService.createTask(projectId, taskData);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Erreur lors de la création de la tâche', error);
    }
  };

  if (!project) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h2>Tâches</h2>
      <TaskList tasks={tasks} />
      {authService.isProfessor() && (
        <>
          <h2>Ajouter une tâche</h2>
          <TaskForm projectId={projectId} onSubmit={handleTaskSubmit} />
        </>
      )}
    </div>
  );
};

export default ProjectDetailPage;