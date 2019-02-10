import { Controller } from "./base.controller";

export class HomeController extends Controller {
    constructor() {
        super();
    }


    ProcessRequest() {
        this.Response.write('welcome to home page')
    }
}