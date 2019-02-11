import { LAYOUT_NAME } from './../views/views.config';
import { ServerResponse, IncomingMessage } from 'http';
import * as fs from "fs";
import * as path from 'path';
import { DEFAULT_BODY_INDICATOR } from '../constants/ViewConstants';


export abstract class Controller {

    Request: IncomingMessage;
    Response: ServerResponse;

    ProcessRequest() {
        throw 'Not implemenetd';
    }

    View(viewName: string) {

        if (!viewName)
            throw "View name required !";

        let layout = this.RenderLayout();

        if (layout.indexOf(DEFAULT_BODY_INDICATOR) < 0)
            throw 'No body indicator in layout supported , please us @Body() to indicate where the view should be injected !';

        let view = this.RenderView(viewName);

        layout = layout.replace(DEFAULT_BODY_INDICATOR, view);

        return layout;

    }

    ViewPage(page_path) {

        if (!page_path)
            throw "Page path required !";

        let content = "";


        if (page_path.indexOf(".html") < 0)
            throw 'page file should be in correct html format with .html extension';


        page_path = path.resolve(page_path);


        if (fs.existsSync(page_path))
            content = fs.readFileSync(page_path, { encoding: "utf-8" });

        

        return content;
    }

    private RenderLayout(): string {

        let content = "";

        const DEFAULT_LAYOUT_NAME = LAYOUT_NAME;

        if (DEFAULT_LAYOUT_NAME.indexOf(".html") < 0)
            throw 'layout file should be in correct html format with .html extension';


        const layout_path = "./views/" + DEFAULT_LAYOUT_NAME;

        if (layout_path && fs.existsSync(layout_path))
            content = fs.readFileSync(layout_path, { encoding: "utf-8" });

        return content;
    }

    private RenderView(viewName): string {

        let content = "";


        const hasExtension = (path.extname(viewName) || "").toLowerCase() === ".html";

        const view_path = "./views/" + viewName + (hasExtension ? "" : ".html");

        if (view_path && fs.existsSync(view_path))
            content = fs.readFileSync(view_path, { encoding: "utf-8" });

        return content;
    }

}