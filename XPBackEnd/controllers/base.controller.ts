import { ServerResponse, IncomingMessage } from 'http';
export abstract class Controller {

    Request: IncomingMessage;
    Response: ServerResponse;

    ProcessRequest() {
        throw 'Not implemenetd';
    }


}