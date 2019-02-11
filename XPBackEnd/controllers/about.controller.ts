import { Controller } from "./base.controller";

export class AboutController extends Controller {
    constructor() {
        super();
    }

    ProcessRequest() {
        return this.View("about")
    }
}  