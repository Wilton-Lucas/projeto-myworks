import express from 'express';
import loginRouter from './routes/login.router';
import atividadeRouter from './routes/atividade.router';

class App {

    constructor() {
        this.app = express();
        //carregamento das rotas
        this.initMiddleware();
        this.loadRoutes();
        this.endMiddlewares();
    }

    initMiddleware() {
        this.app.use(express.json());

    }
    loadRoutes() {
        this.app.use('/myworks', loginRouter);
        this.app.use("/myworks", atividadeRouter);

    }
    endMiddlewares() {
        this.app.use((err, req, res, next) => {
            if (err) {
                res.status(400).json({
                    message: err.message,
                    status: 400
                })
            }
        });
    }

}

export default new App().app;