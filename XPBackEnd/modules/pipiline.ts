import { ServerResponse } from 'http';
import { IncomingMessage } from 'http';
export function Pipline(request: IncomingMessage, response: ServerResponse, modules: any[]) {


    if (modules && modules.length) {

        for (let i = 0; i < modules.length; i++) {
            const currentModule = modules[i];
            const nextModule = modules[i + 1];
            if (nextModule) {
                currentModule.next = nextModule;
            }
        }

        // start pipeline 
        modules[0].invoke(request, response);
    }
    else {
        response.statusCode = 200;
        response.end();
    }
    
}