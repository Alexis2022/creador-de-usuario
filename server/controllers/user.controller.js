import {pool} from '../db.js';

export const getUsers = async(req, res) =>{
    try {
        const [result] = await pool.query('SELECT * FROM users');
        res.json(result);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createUser = async(req, res) => {
    try {
        const {nombre, contraseña, username} = req.body;
        const [result] = await pool.query("INSERT INTO users (nombre, contraseña, username) VALUES (?, ?, ?)", [nombre, contraseña, username]);
        res.send({
            id: result.insertId,
            nombre,
            contraseña,
            username
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updateUser = async(req, res) => {
    try {
        const [result] = await pool.query("UPDATE users SET ? WHERE ID = ?", [req.body, req.params.id]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteUser = async(req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM users WHERE id = ?", [req.params.id]);
        if(result.affectedRows === 0) return res.status(404).json({message: "User not found"});

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createMasterUser = async(req, res) => {
    try {
        const {nombre, contraseña, username} = req.body;
        const [result] = await pool.query(`INSERT INTO users (nombre, contraseña, username, rango) VALUES (?, ?, ?, "master")`, [nombre, contraseña, username]);
        res.send({
            id: result.insertId,
            nombre,
            contraseña,
            username
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const createMasterPlusUser = async(req, res) => {
    try {
        const {nombre, contraseña, username} = req.body;
        const [result] = await pool.query(`INSERT INTO users (nombre, contraseña, username, rango) VALUES (?, ?, ?, "master+")`, [nombre, contraseña, username]);
        res.send({
            id: result.insertId,
            nombre,
            contraseña,
            username
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}