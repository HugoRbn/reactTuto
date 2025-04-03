import axios from 'axios';

const API_URL = "http://localhost:9999/tasks";

// Récupérer toutes les tâches
export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Axios parse la réponse en JSON automatiquement
  } catch (error) {
    console.error("Erreur lors de la récupération des tâches", error);
    throw error;
  }
};

// Ajouter une tâche
export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL+'/add', task);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout de la tâche", error);
    throw error;
  }
};

// Supprimer une tâche
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Erreur lors de la suppression de la tâche", error);
    throw error;
  }
};
