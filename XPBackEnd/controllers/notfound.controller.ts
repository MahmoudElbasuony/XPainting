import { Controller } from "./base.controller";

export class NotFoundController extends Controller {
    constructor() {
        super();

    }

    ProcessRequest() {
        return this.View("notfound")
    }
}