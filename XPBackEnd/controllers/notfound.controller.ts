import { Controller } from "./base.controller";

export class NotFoundController extends Controller {
    constructor() {
        super();

    }

    ProcessRequest() {
        this.Response.statusCode = 404;
        this.Response.statusMessage = "Not found";
        return this.View("notfound")
    }
}