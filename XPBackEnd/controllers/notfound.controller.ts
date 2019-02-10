import { Controller } from "./base.controller";

export class NotFoundController extends Controller {
    constructor() {
        super();

    }

    ProcessRequest() {
        this.Response.write('page not found');
    }
}