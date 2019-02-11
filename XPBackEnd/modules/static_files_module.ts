import * as path from 'path';
import { IncomingMessage } from 'http';
import { ServerResponse } from 'http';
import * as fs from "fs";
export function StaticFilesModule(rootPath) {

    this.next = null;
    this.invoke = (request: IncomingMessage, response: ServerResponse) => {

        const startIndex = request.url.indexOf(path.join(rootPath));

        if (startIndex >= 0) {
            const file_path = path.resolve(request.url.substr(startIndex, request.url.length));
            response.write(fs.readFileSync(file_path));
            response.end();
            return;
        }

        if (this.next)
            this.next.invoke(request, response);

    };
}

