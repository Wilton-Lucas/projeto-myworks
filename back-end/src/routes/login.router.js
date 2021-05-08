import express from 'express';
import LoginController from '../controllers/login.controller';
import Login from '../models/login.model';

const loginRouter = express.Router();

loginRouter.post('/login', (req, res, next) => {
    try {
        const login = new Login(req.body.username, req.body.password);
        res.status(200).send(new LoginController().fazerLogin(login));
    } catch (err) {
        next(err);
    }

});



export default loginRouter;