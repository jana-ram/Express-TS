import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { UserRoutes } from '../routes/users';

class App {
    public app: Application;
    private user_routes: UserRoutes = new UserRoutes();
    constructor() {
        this.app = express();
        this.setConfig();
        this.allRoutes();
    }

    private setConfig() {
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
        this.app.use(cors());
    }
    private allRoutes() {
        this.user_routes.route(this.app)
    }
}

export default new App().app;
