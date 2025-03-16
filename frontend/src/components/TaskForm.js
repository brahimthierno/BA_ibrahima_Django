import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ projectId, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [assignedTo, setAssignedTo] = useState('');
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Récupérer la liste des utilisateurs depuis l'API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    };

    fetchUsers();
  }, []);

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = 'Le titre est requis.';
    }

    if (!description) {
      newErrors.description = 'La description est requise.';
    }


    if (!assignedTo) {
      newErrors.assignedTo = 'Veuillez sélectionner un utilisateur.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retourne true si aucune erreur
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Arrête la soumission si la validation échoue
    }

    setIsSubmitting(true);

    try {
      const taskData = { title, description, status, project: projectId, assigned_to: assignedTo };
      await onSubmit(taskData);
      setErrors({}); // Réinitialise les erreurs après une soumission réussie
    } catch (error) {
      console.error('Erreur lors de la création de la tâche', error);
      setErrors({ submit: 'Une erreur est survenue lors de la création de la tâche.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Titre</label>
        <input
          type="text"
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
      </div>
      
      <div className="form-group">
        <label>Statut</label>
        <select
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">À faire</option>
          <option value="in_progress">En cours</option>
          <option value="done">Terminé</option>
        </select>
      </div>
      <div className="form-group">
        <label>Assigné à</label>
        <select
          className={`form-control ${errors.assignedTo ? 'is-invalid' : ''}`}
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
        >
          <option value="">Sélectionnez un utilisateur</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
        {errors.assignedTo && <div className="invalid-feedback">{errors.assignedTo}</div>}
      </div>
      {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Enregistrement en cours...' : 'Enregistrer'}
      </button>
    </form>
  );
};

export default TaskForm;