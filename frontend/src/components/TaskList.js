import React, { useEffect, useState } from 'react';
import taskService from '../services/tasks';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getTasks(projectId);
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [projectId]);

  return (
    <div>
      <h2>Tâches</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;