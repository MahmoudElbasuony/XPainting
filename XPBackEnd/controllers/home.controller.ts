import { Controller } from "./base.controller";

export class HomeController extends Controller {
    constructor() {
        super();
    }


    ProcessRequest() {
        return this.View("home");
        
    }


    
}