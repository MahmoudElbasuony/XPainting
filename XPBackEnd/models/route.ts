import { IncomingMessage, ServerResponse } from "http";
import { Controller } from "../controllers/base.controller";

export class Route {
    url: string;
    handler: Controller;
}