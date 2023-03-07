import {Router} from 'express';
import {getUsers, createUser, updateUser, deleteUser, createMasterPlusUser, createMasterUser} from '../controllers/user.controller.js';

const router = Router();


router.get("/users", getUsers);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

router.post("/usersMaster", createMasterUser);

router.post("/usersMasterPlus", createMasterPlusUser);




export default router;