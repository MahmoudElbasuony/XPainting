/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/ServerConstants.ts":
/*!**************************************!*\
  !*** ./constants/ServerConstants.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.SERVER_DEFAULT_PORT = 4000;\r\n\n\n//# sourceURL=webpack:///./constants/ServerConstants.ts?");

/***/ }),

/***/ "./constants/ViewConstants.ts":
/*!************************************!*\
  !*** ./constants/ViewConstants.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.DEFAULT_BODY_INDICATOR = \"@Body()\";\r\nexports.DEFAULT_FRONT_END_ENTRY_PATH = \"./assets/dist/FE/index.html\";\r\n\n\n//# sourceURL=webpack:///./constants/ViewConstants.ts?");

/***/ }),

/***/ "./controllers/about.controller.ts":
/*!*****************************************!*\
  !*** ./controllers/about.controller.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar base_controller_1 = __webpack_require__(/*! ./base.controller */ \"./controllers/base.controller.ts\");\r\nvar AboutController = /** @class */ (function (_super) {\r\n    __extends(AboutController, _super);\r\n    function AboutController() {\r\n        return _super.call(this) || this;\r\n    }\r\n    AboutController.prototype.ProcessRequest = function () {\r\n        return this.View(\"about\");\r\n    };\r\n    return AboutController;\r\n}(base_controller_1.Controller));\r\nexports.AboutController = AboutController;\r\n\n\n//# sourceURL=webpack:///./controllers/about.controller.ts?");

/***/ }),

/***/ "./controllers/app.controller.ts":
/*!***************************************!*\
  !*** ./controllers/app.controller.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar ViewConstants_1 = __webpack_require__(/*! ./../constants/ViewConstants */ \"./constants/ViewConstants.ts\");\r\nvar base_controller_1 = __webpack_require__(/*! ./base.controller */ \"./controllers/base.controller.ts\");\r\nvar AppController = /** @class */ (function (_super) {\r\n    __extends(AppController, _super);\r\n    function AppController() {\r\n        return _super.call(this) || this;\r\n    }\r\n    AppController.prototype.ProcessRequest = function () {\r\n        return this.ViewPage(ViewConstants_1.DEFAULT_FRONT_END_ENTRY_PATH);\r\n    };\r\n    return AppController;\r\n}(base_controller_1.Controller));\r\nexports.AppController = AppController;\r\n\n\n//# sourceURL=webpack:///./controllers/app.controller.ts?");

/***/ }),

/***/ "./controllers/base.controller.ts":
/*!****************************************!*\
  !*** ./controllers/base.controller.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar views_config_1 = __webpack_require__(/*! ./../views/views.config */ \"./views/views.config.ts\");\r\nvar fs = __webpack_require__(/*! fs */ \"fs\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar ViewConstants_1 = __webpack_require__(/*! ../constants/ViewConstants */ \"./constants/ViewConstants.ts\");\r\nvar Controller = /** @class */ (function () {\r\n    function Controller() {\r\n    }\r\n    Controller.prototype.ProcessRequest = function () {\r\n        throw 'Not implemenetd';\r\n    };\r\n    Controller.prototype.View = function (viewName) {\r\n        if (!viewName)\r\n            throw \"View name required !\";\r\n        var layout = this.RenderLayout();\r\n        if (layout.indexOf(ViewConstants_1.DEFAULT_BODY_INDICATOR) < 0)\r\n            throw 'No body indicator in layout supported , please us @Body() to indicate where the view should be injected !';\r\n        var view = this.RenderView(viewName);\r\n        layout = layout.replace(ViewConstants_1.DEFAULT_BODY_INDICATOR, view);\r\n        return layout;\r\n    };\r\n    Controller.prototype.ViewPage = function (page_path) {\r\n        if (!page_path)\r\n            throw \"Page path required !\";\r\n        var content = \"\";\r\n        if (page_path.indexOf(\".html\") < 0)\r\n            throw 'page file should be in correct html format with .html extension';\r\n        page_path = path.resolve(page_path);\r\n        if (fs.existsSync(page_path))\r\n            content = fs.readFileSync(page_path, { encoding: \"utf-8\" });\r\n        return content;\r\n    };\r\n    Controller.prototype.RenderLayout = function () {\r\n        var content = \"\";\r\n        var DEFAULT_LAYOUT_NAME = views_config_1.LAYOUT_NAME;\r\n        if (DEFAULT_LAYOUT_NAME.indexOf(\".html\") < 0)\r\n            throw 'layout file should be in correct html format with .html extension';\r\n        var layout_path = \"./views/\" + DEFAULT_LAYOUT_NAME;\r\n        if (layout_path && fs.existsSync(layout_path))\r\n            content = fs.readFileSync(layout_path, { encoding: \"utf-8\" });\r\n        return content;\r\n    };\r\n    Controller.prototype.RenderView = function (viewName) {\r\n        var content = \"\";\r\n        var hasExtension = (path.extname(viewName) || \"\").toLowerCase() === \".html\";\r\n        var view_path = \"./views/\" + viewName + (hasExtension ? \"\" : \".html\");\r\n        if (view_path && fs.existsSync(view_path))\r\n            content = fs.readFileSync(view_path, { encoding: \"utf-8\" });\r\n        return content;\r\n    };\r\n    return Controller;\r\n}());\r\nexports.Controller = Controller;\r\n\n\n//# sourceURL=webpack:///./controllers/base.controller.ts?");

/***/ }),

/***/ "./controllers/home.controller.ts":
/*!****************************************!*\
  !*** ./controllers/home.controller.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar base_controller_1 = __webpack_require__(/*! ./base.controller */ \"./controllers/base.controller.ts\");\r\nvar HomeController = /** @class */ (function (_super) {\r\n    __extends(HomeController, _super);\r\n    function HomeController() {\r\n        return _super.call(this) || this;\r\n    }\r\n    HomeController.prototype.ProcessRequest = function () {\r\n        return this.View(\"home\");\r\n    };\r\n    return HomeController;\r\n}(base_controller_1.Controller));\r\nexports.HomeController = HomeController;\r\n\n\n//# sourceURL=webpack:///./controllers/home.controller.ts?");

/***/ }),

/***/ "./controllers/notfound.controller.ts":
/*!********************************************!*\
  !*** ./controllers/notfound.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar base_controller_1 = __webpack_require__(/*! ./base.controller */ \"./controllers/base.controller.ts\");\r\nvar NotFoundController = /** @class */ (function (_super) {\r\n    __extends(NotFoundController, _super);\r\n    function NotFoundController() {\r\n        return _super.call(this) || this;\r\n    }\r\n    NotFoundController.prototype.ProcessRequest = function () {\r\n        this.Response.statusCode = 404;\r\n        this.Response.statusMessage = \"Not found\";\r\n        return this.View(\"notfound\");\r\n    };\r\n    return NotFoundController;\r\n}(base_controller_1.Controller));\r\nexports.NotFoundController = NotFoundController;\r\n\n\n//# sourceURL=webpack:///./controllers/notfound.controller.ts?");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar server_1 = __webpack_require__(/*! ./server */ \"./server.ts\");\r\nserver_1.StartServer();\r\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ }),

/***/ "./modules/pipiline.ts":
/*!*****************************!*\
  !*** ./modules/pipiline.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nfunction Pipline(request, response, modules) {\r\n    if (modules && modules.length) {\r\n        for (var i = 0; i < modules.length; i++) {\r\n            var currentModule = modules[i];\r\n            var nextModule = modules[i + 1];\r\n            if (nextModule) {\r\n                currentModule.next = nextModule;\r\n            }\r\n        }\r\n        // start pipeline \r\n        modules[0].invoke(request, response);\r\n    }\r\n    else {\r\n        response.statusCode = 200;\r\n        response.end();\r\n    }\r\n}\r\nexports.Pipline = Pipline;\r\n\n\n//# sourceURL=webpack:///./modules/pipiline.ts?");

/***/ }),

/***/ "./modules/routing_moudle.ts":
/*!***********************************!*\
  !*** ./modules/routing_moudle.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar notfound_controller_1 = __webpack_require__(/*! ../controllers/notfound.controller */ \"./controllers/notfound.controller.ts\");\r\nfunction Routing(routes) {\r\n    var _this = this;\r\n    if (routes === void 0) { routes = []; }\r\n    this.next = null;\r\n    this.invoke = function (request, response) {\r\n        response.statusCode = 200;\r\n        response.statusMessage = 'Ok';\r\n        var result = null;\r\n        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {\r\n            var route = routes_1[_i];\r\n            if (route.url != \"**\" && route.url.indexOf('/') < 0)\r\n                throw \"Route url should start with /\";\r\n            if (route.url === request.url) {\r\n                var controller = route.handler;\r\n                controller.Response = response;\r\n                controller.Request = request;\r\n                result = controller.ProcessRequest();\r\n                if (result) {\r\n                    response.write(result);\r\n                }\r\n                return response.end();\r\n            }\r\n        }\r\n        var notMatchHandler = (routes.filter(function (route) { return route.url == \"**\" && route.handler; }).map(function (route) { return route.handler; })[0] || new notfound_controller_1.NotFoundController());\r\n        notMatchHandler.Request = request;\r\n        notMatchHandler.Response = response;\r\n        result = notMatchHandler.ProcessRequest();\r\n        if (result) {\r\n            response.write(result);\r\n        }\r\n        if (_this.next)\r\n            _this.next.invoke(request, response);\r\n    };\r\n}\r\nexports.Routing = Routing;\r\n\n\n//# sourceURL=webpack:///./modules/routing_moudle.ts?");

/***/ }),

/***/ "./modules/static_files_module.ts":
/*!****************************************!*\
  !*** ./modules/static_files_module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar fs = __webpack_require__(/*! fs */ \"fs\");\r\nfunction StaticFilesModule(rootPath) {\r\n    var _this = this;\r\n    this.next = null;\r\n    this.invoke = function (request, response) {\r\n        var startIndex = request.url.indexOf(path.join(rootPath));\r\n        if (startIndex >= 0) {\r\n            var file_path = path.resolve(request.url.substr(startIndex, request.url.length));\r\n            if (request.headers.accept)\r\n                response.setHeader(\"Content-Type\", request.headers.accept);\r\n            response.write(fs.readFileSync(file_path));\r\n            response.end();\r\n            return;\r\n        }\r\n        if (_this.next)\r\n            _this.next.invoke(request, response);\r\n    };\r\n}\r\nexports.StaticFilesModule = StaticFilesModule;\r\n\n\n//# sourceURL=webpack:///./modules/static_files_module.ts?");

/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar app_controller_1 = __webpack_require__(/*! ./controllers/app.controller */ \"./controllers/app.controller.ts\");\r\nvar notfound_controller_1 = __webpack_require__(/*! ./controllers/notfound.controller */ \"./controllers/notfound.controller.ts\");\r\nvar home_controller_1 = __webpack_require__(/*! ./controllers/home.controller */ \"./controllers/home.controller.ts\");\r\nvar ServerConstants_1 = __webpack_require__(/*! ./constants/ServerConstants */ \"./constants/ServerConstants.ts\");\r\nvar http = __webpack_require__(/*! http */ \"http\");\r\nvar routing_moudle_1 = __webpack_require__(/*! ./modules/routing_moudle */ \"./modules/routing_moudle.ts\");\r\nvar about_controller_1 = __webpack_require__(/*! ./controllers/about.controller */ \"./controllers/about.controller.ts\");\r\nvar static_files_module_1 = __webpack_require__(/*! ./modules/static_files_module */ \"./modules/static_files_module.ts\");\r\nvar pipiline_1 = __webpack_require__(/*! ./modules/pipiline */ \"./modules/pipiline.ts\");\r\nvar server = http.createServer(function (request, response) {\r\n    try {\r\n        pipiline_1.Pipline(request, response, [\r\n            new static_files_module_1.StaticFilesModule('assets'),\r\n            new routing_moudle_1.Routing([\r\n                {\r\n                    url: '/home',\r\n                    handler: new home_controller_1.HomeController()\r\n                },\r\n                {\r\n                    url: '/about',\r\n                    handler: new about_controller_1.AboutController()\r\n                },\r\n                {\r\n                    url: '/app',\r\n                    handler: new app_controller_1.AppController()\r\n                },\r\n                {\r\n                    url: '/',\r\n                    handler: new home_controller_1.HomeController()\r\n                },\r\n                {\r\n                    url: '**',\r\n                    handler: new notfound_controller_1.NotFoundController()\r\n                }\r\n            ])\r\n        ]);\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n        response.statusCode = 500;\r\n        response.statusMessage = \"Internal Server Error\";\r\n    }\r\n    response.end();\r\n});\r\nserver.on(\"listening\", function (_) {\r\n    var address = server.address();\r\n    console.log(\"Server listening to : \" + address.address + \" , port : \" + address.port);\r\n});\r\nfunction StartServer(port) {\r\n    if (port === void 0) { port = ServerConstants_1.SERVER_DEFAULT_PORT; }\r\n    server.listen(port);\r\n}\r\nexports.StartServer = StartServer;\r\n\n\n//# sourceURL=webpack:///./server.ts?");

/***/ }),

/***/ "./views/views.config.ts":
/*!*******************************!*\
  !*** ./views/views.config.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.LAYOUT_NAME = 'layout.html';\r\n\n\n//# sourceURL=webpack:///./views/views.config.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });