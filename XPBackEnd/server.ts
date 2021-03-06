import { AppController } from './controllers/app.controller';
import { NotFoundController } from './controllers/notfound.controller';
import { HomeController } from './controllers/home.controller';
import { AddressInfo } from 'net';
import { SERVER_DEFAULT_PORT } from './constants/ServerConstants';
import * as http from "http";
import { Routing } from './modules/routing_moudle';
import { AboutController } from './controllers/about.controller';
import { StaticFilesModule } from './modules/static_files_module';
import { Pipline } from './modules/pipiline';

const server = http.createServer((request, response) => {

    try {

        Pipline(request, response, [

            new StaticFilesModule('assets'),

            new Routing([
                {
                    url: '/home',
                    handler: new HomeController()

                },
                {
                    url: '/about',
                    handler: new AboutController()
                },
                {
                    url : '/app',
                    handler: new AppController()
                },
                {
                    url: '/',
                    handler: new HomeController()
                },
                {
                    url: '**',
                    handler: new NotFoundController()
                }
            ])

        ]);

    }
    catch (e) {
        console.log(e);
        response.statusCode = 500;
        response.statusMessage = "Internal Server Error";
    }

    response.end();


});

server.on("listening", _ => {
    const address: AddressInfo = <AddressInfo>server.address();
    console.log(`Server listening to : ${address.address} , port : ${address.port}`);
})


export function StartServer(port = SERVER_DEFAULT_PORT) {
    server.listen(port);
}
