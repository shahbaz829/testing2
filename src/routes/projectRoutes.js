import express from 'express';
import { createProject, getProjects, getProject, updateProject, deleteProject } from '../controllers/projectController.js';

const router = express.Router();

// Create a new project
router.post('/', createProject);

// Get all projects
router.get('/', getProjects);

// Get a single project
router.get('/:id', getProject);

// Update a project
router.put('/:id', updateProject);

// Delete a project
router.delete('/:id', deleteProject);

export default router; 