import { IncomingMessage, ServerResponse } from "http";
import { Route } from "../models/route";
import { NotFoundController } from "../controllers/notfound.controller";
import { Controller } from "../controllers/base.controller";

export function Routing(request: IncomingMessage, response: ServerResponse, routes: Route[] = []) {

    response.statusCode = 200;
    response.statusMessage = 'Ok';


    let result = null;
    for (const route of routes) {


        if (route.url != "**" && route.url.indexOf('/') < 0)
            throw `Route url should start with /`;



        if (route.url === request.url) {
            const controller = route.handler;
            controller.Response = response;
            controller.Request = request;
            result = controller.ProcessRequest();
            if (result) {
                response.write(result);
            }
            return response.end();
        }


    }

    const notMatchHandler = <Controller>(routes.filter(route => route.url == "**" && route.handler).map(route => route.handler)[0] || new NotFoundController());
    notMatchHandler.Request = request;
    notMatchHandler.Response = response;

    result = notMatchHandler.ProcessRequest();
    if (result) {
        response.write(result);
    }

}