import express from "express";
import {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controller/UserController.js";

const router = express.Router();

router.get('/Users', getUser);
router.get('/Users/:id', getUserById);
router.post('/Users', createUser);
router.patch('/Users/:id', updateUser);
router.delete('/Users/:id', deleteUser);

export default router;