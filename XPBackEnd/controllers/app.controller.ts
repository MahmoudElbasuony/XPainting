import { DEFAULT_FRONT_END_ENTRY_PATH } from './../constants/ViewConstants';
import { Controller } from "./base.controller";

export class AppController extends Controller {
    constructor() {
        super();
    }

    ProcessRequest() {
        return this.ViewPage(DEFAULT_FRONT_END_ENTRY_PATH)
    }
}  