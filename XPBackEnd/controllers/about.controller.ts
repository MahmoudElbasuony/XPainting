import { Controller } from "./base.controller";

export class AboutController extends Controller {
    constructor() {
        super();
    }

    ProcessRequest() {
        this.Response.write('welcome to about page');
    }
}  