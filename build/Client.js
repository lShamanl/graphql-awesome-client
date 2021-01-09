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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Client.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Client.ts":
/*!*******************!*\
  !*** ./Client.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = void 0;\r\nvar Graphql_1 = __webpack_require__(/*! ./src/Graphql */ \"./src/Graphql.ts\");\r\nObject.defineProperty(exports, \"default\", { enumerable: true, get: function () { return Graphql_1.default; } });\r\n\n\n//# sourceURL=webpack:///./Client.ts?");

/***/ }),

/***/ "./src/Graphql.ts":
/*!************************!*\
  !*** ./src/Graphql.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar TypeGQ_1 = __webpack_require__(/*! ./Types/TypeGQ */ \"./src/Types/TypeGQ.ts\");\r\nvar getTypeConstructor_1 = __webpack_require__(/*! ./functions/getTypeConstructor */ \"./src/functions/getTypeConstructor.ts\");\r\nvar Action_1 = __webpack_require__(/*! ./Nodes/Action */ \"./src/Nodes/Action.ts\");\r\nvar Method_1 = __webpack_require__(/*! ./Nodes/Method */ \"./src/Nodes/Method.ts\");\r\nvar NullType_1 = __webpack_require__(/*! ./Types/NullType */ \"./src/Types/NullType.ts\");\r\nvar Graphql = /** @class */ (function () {\r\n    function Graphql(apiURL) {\r\n        this.apiURL = apiURL;\r\n    }\r\n    /**\r\n     * Send a custom RAW request to the Graphql server\r\n     * @param query\r\n     */\r\n    Graphql.prototype.sendRaw = function (query) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var response;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, fetch(this.apiURL, {\r\n                            method: \"POST\",\r\n                            body: JSON.stringify({ query: query })\r\n                        })];\r\n                    case 1:\r\n                        response = _a.sent();\r\n                        return [4 /*yield*/, response.json()];\r\n                    case 2: return [2 /*return*/, (_a.sent()).data];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Graphql.prototype.sendSingle = function (path, input, output) {\r\n        var inputGQ = this.toGraphQlType(input);\r\n        var outputGQ = this.toGraphQlType(output);\r\n        var action = this.createAction(path, inputGQ, outputGQ);\r\n        return this.sendRaw(action.render());\r\n    };\r\n    Graphql.prototype.sendMultiple = function (data) {\r\n        var _this = this;\r\n        var actions = [];\r\n        data.map(function (sendData) {\r\n            var inputGQ = _this.toGraphQlType(sendData.input);\r\n            var outputGQ = _this.toGraphQlType(sendData.output);\r\n            actions.push(_this.createAction(sendData.path, inputGQ, outputGQ));\r\n        });\r\n        actions.reduce(function (prev, next) {\r\n            prev.gobble(next);\r\n            return prev;\r\n        });\r\n        return this.sendRaw(actions[0].render());\r\n    };\r\n    Graphql.prototype.querySingle = function (path, input, output) {\r\n        if (path.split('.').shift() !== 'query') {\r\n            path = \"query.\" + path;\r\n        }\r\n        return this.sendSingle(path, input, output);\r\n    };\r\n    Graphql.prototype.queryMultiple = function (data) {\r\n        data.map(function (sendData) {\r\n            if (sendData.path.split('.').shift() !== 'query') {\r\n                sendData.path = \"query.\" + sendData.path;\r\n            }\r\n        });\r\n        return this.sendMultiple(data);\r\n    };\r\n    Graphql.prototype.mutationSingle = function (path, input, output) {\r\n        if (path.split('.').shift() !== 'mutation') {\r\n            path = \"mutation.\" + path;\r\n        }\r\n        return this.sendSingle(path, input, output);\r\n    };\r\n    Graphql.prototype.mutationMultiple = function (data) {\r\n        data.map(function (sendData) {\r\n            if (sendData.path.split('.').shift() !== 'mutation') {\r\n                sendData.path = \"mutation.\" + sendData.path;\r\n            }\r\n        });\r\n        return this.sendMultiple(data);\r\n    };\r\n    Graphql.prototype.toGraphQlType = function (rawData) {\r\n        var typesGQ = [];\r\n        if (rawData instanceof Array) {\r\n            for (var _i = 0, rawData_1 = rawData; _i < rawData_1.length; _i++) {\r\n                var data = rawData_1[_i];\r\n                typesGQ.push(new NullType_1.default(data.toString()));\r\n            }\r\n        }\r\n        else if (rawData instanceof Object) {\r\n            for (var i in rawData) {\r\n                if (!rawData.hasOwnProperty(i))\r\n                    continue;\r\n                if (rawData[i] instanceof TypeGQ_1.default) {\r\n                    typesGQ.push(rawData[i]);\r\n                    continue;\r\n                }\r\n                var constructor = getTypeConstructor_1.default(rawData[i]);\r\n                typesGQ.push(new constructor(i, rawData[i]));\r\n            }\r\n        }\r\n        return typesGQ;\r\n    };\r\n    Graphql.prototype.createAction = function (path, inputGQ, outputGQ) {\r\n        if (path.length === 0) {\r\n            throw new Error('Path is empty');\r\n        }\r\n        var nodeNames = path.split('.');\r\n        if (nodeNames.length < 2) {\r\n            throw new Error('Method in path is not found');\r\n        }\r\n        var method = new Method_1.default(nodeNames.pop());\r\n        method.inputs = inputGQ;\r\n        method.outputs = outputGQ;\r\n        var actions = nodeNames.map(function (nodeName) {\r\n            return new Action_1.default(nodeName);\r\n        });\r\n        actions.reduce(function (parent, child) {\r\n            parent.addSubAction(child);\r\n            return child;\r\n        });\r\n        actions[actions.length - 1].addMethod(method);\r\n        return actions[0];\r\n    };\r\n    return Graphql;\r\n}());\r\nexports.default = Graphql;\r\n\n\n//# sourceURL=webpack:///./src/Graphql.ts?");

/***/ }),

/***/ "./src/Nodes/Action.ts":
/*!*****************************!*\
  !*** ./src/Nodes/Action.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar NodeGQ_1 = __webpack_require__(/*! ./NodeGQ */ \"./src/Nodes/NodeGQ.ts\");\r\nvar Action = /** @class */ (function (_super) {\r\n    __extends(Action, _super);\r\n    function Action() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.subActions = [];\r\n        _this.methods = [];\r\n        return _this;\r\n    }\r\n    Action.prototype.addSubAction = function (action) {\r\n        if (this.subActions.indexOf(action) === -1) {\r\n            this.subActions.push(action);\r\n        }\r\n    };\r\n    Action.prototype.addMethod = function (method) {\r\n        if (this.methods.indexOf(method) === -1) {\r\n            this.methods.push(method);\r\n        }\r\n    };\r\n    Action.prototype.render = function () {\r\n        var rendered = [];\r\n        if (this.subActions.length !== 0) {\r\n            this.subActions.map(function (subAction) {\r\n                rendered.push(\"\" + subAction.render());\r\n            });\r\n        }\r\n        if (this.methods.length !== 0) {\r\n            this.methods.map(function (method) {\r\n                rendered.push(\"\" + method.render());\r\n            });\r\n        }\r\n        return this.name + \"{\" + rendered.join(',') + \"}\";\r\n    };\r\n    Action.prototype.gobble = function (action) {\r\n        var busy = new Map();\r\n        var methods = [];\r\n        var subActions = [];\r\n        __spreadArrays(this.methods, action.methods).map(function (method) {\r\n            if (!busy.has(method.name)) {\r\n                methods.push(method);\r\n                busy.set(method.name, method);\r\n            }\r\n        });\r\n        __spreadArrays(this.subActions, action.subActions).map(function (action) {\r\n            if (!busy.has(action.name)) {\r\n                subActions.push(action);\r\n                busy.set(action.name, action);\r\n            }\r\n            else if (busy.get(action.name) instanceof Action) {\r\n                busy.get(action.name).gobble(action);\r\n            }\r\n        });\r\n        this.subActions = subActions;\r\n        this.methods = methods;\r\n    };\r\n    return Action;\r\n}(NodeGQ_1.default));\r\nexports.default = Action;\r\n\n\n//# sourceURL=webpack:///./src/Nodes/Action.ts?");

/***/ }),

/***/ "./src/Nodes/Method.ts":
/*!*****************************!*\
  !*** ./src/Nodes/Method.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar TypeGQ_1 = __webpack_require__(/*! ../Types/TypeGQ */ \"./src/Types/TypeGQ.ts\");\r\nvar NodeGQ_1 = __webpack_require__(/*! ./NodeGQ */ \"./src/Nodes/NodeGQ.ts\");\r\nvar getTypeConstructor_1 = __webpack_require__(/*! ../functions/getTypeConstructor */ \"./src/functions/getTypeConstructor.ts\");\r\nvar Method = /** @class */ (function (_super) {\r\n    __extends(Method, _super);\r\n    function Method() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Method.prototype.render = function () {\r\n        return this.name + \"(\" + this.renderInputs() + \"){\" + this.renderOutputs() + \"}\";\r\n    };\r\n    Method.prototype.renderInputs = function () {\r\n        var renderValues = [];\r\n        if (!this.inputs) {\r\n            return '';\r\n        }\r\n        this.inputs.map(function (value) {\r\n            if (value instanceof TypeGQ_1.default) {\r\n                renderValues.push(value.renderAsInput());\r\n            }\r\n            else {\r\n                var typeConstructor = getTypeConstructor_1.default(value);\r\n                renderValues.push((new typeConstructor(null, value).renderAsInput()));\r\n            }\r\n        });\r\n        return \"\" + renderValues.join(',');\r\n    };\r\n    Method.prototype.renderOutputs = function () {\r\n        if (!this.outputs) {\r\n            return '';\r\n        }\r\n        var renderValues = [];\r\n        this.outputs.map(function (type) {\r\n            renderValues.push(type.renderAsOutput());\r\n        });\r\n        return \"\" + renderValues.join(',');\r\n    };\r\n    return Method;\r\n}(NodeGQ_1.default));\r\nexports.default = Method;\r\n\n\n//# sourceURL=webpack:///./src/Nodes/Method.ts?");

/***/ }),

/***/ "./src/Nodes/NodeGQ.ts":
/*!*****************************!*\
  !*** ./src/Nodes/NodeGQ.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar NodeGQ = /** @class */ (function () {\r\n    function NodeGQ(name) {\r\n        this.name = name;\r\n    }\r\n    return NodeGQ;\r\n}());\r\nexports.default = NodeGQ;\r\n\n\n//# sourceURL=webpack:///./src/Nodes/NodeGQ.ts?");

/***/ }),

/***/ "./src/Types/ArrayType.ts":
/*!********************************!*\
  !*** ./src/Types/ArrayType.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar TypeGQ_1 = __webpack_require__(/*! ./TypeGQ */ \"./src/Types/TypeGQ.ts\");\r\nvar getTypeConstructor_1 = __webpack_require__(/*! ../functions/getTypeConstructor */ \"./src/functions/getTypeConstructor.ts\");\r\nvar ArrayType = /** @class */ (function (_super) {\r\n    __extends(ArrayType, _super);\r\n    function ArrayType() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ArrayType.prototype.renderAsInput = function () {\r\n        var renderValues = [];\r\n        this.value.map(function (value) {\r\n            if (value instanceof TypeGQ_1.default) {\r\n                var clone = value.clone();\r\n                clone.name = null;\r\n                renderValues.push(clone.renderAsInput());\r\n            }\r\n            else {\r\n                var typeConstructor = getTypeConstructor_1.default(value);\r\n                renderValues.push((new typeConstructor(null, value).renderAsInput()));\r\n            }\r\n        });\r\n        return (this.name)\r\n            ? this.name + \":[\" + renderValues.join(',') + \"]\"\r\n            : \"[\" + renderValues.join(',') + \"]\";\r\n    };\r\n    ArrayType.prototype.renderAsOutput = function () {\r\n        return \"\" + this.name;\r\n    };\r\n    return ArrayType;\r\n}(TypeGQ_1.default));\r\nexports.default = ArrayType;\r\n\n\n//# sourceURL=webpack:///./src/Types/ArrayType.ts?");

/***/ }),

/***/ "./src/Types/BooleanType.ts":
/*!**********************************!*\
  !*** ./src/Types/BooleanType.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ScalarType_1 = __webpack_require__(/*! ./ScalarType */ \"./src/Types/ScalarType.ts\");\r\nvar BooleanType = /** @class */ (function (_super) {\r\n    __extends(BooleanType, _super);\r\n    function BooleanType() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    BooleanType.prototype.renderAsInput = function () {\r\n        return (this.name)\r\n            ? this.name + \":\" + (!!this.value ? 'true' : 'false')\r\n            : \"\" + (!!this.value ? 'true' : 'false');\r\n    };\r\n    return BooleanType;\r\n}(ScalarType_1.default));\r\nexports.default = BooleanType;\r\n\n\n//# sourceURL=webpack:///./src/Types/BooleanType.ts?");

/***/ }),

/***/ "./src/Types/NullType.ts":
/*!*******************************!*\
  !*** ./src/Types/NullType.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ScalarType_1 = __webpack_require__(/*! ./ScalarType */ \"./src/Types/ScalarType.ts\");\r\nvar NullType = /** @class */ (function (_super) {\r\n    __extends(NullType, _super);\r\n    function NullType(name) {\r\n        return _super.call(this, name, null) || this;\r\n    }\r\n    NullType.prototype.renderAsInput = function () {\r\n        return (this.name)\r\n            ? this.name + \":null\"\r\n            : \"null\";\r\n    };\r\n    return NullType;\r\n}(ScalarType_1.default));\r\nexports.default = NullType;\r\n\n\n//# sourceURL=webpack:///./src/Types/NullType.ts?");

/***/ }),

/***/ "./src/Types/NumberType.ts":
/*!*********************************!*\
  !*** ./src/Types/NumberType.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ScalarType_1 = __webpack_require__(/*! ./ScalarType */ \"./src/Types/ScalarType.ts\");\r\nvar NumberType = /** @class */ (function (_super) {\r\n    __extends(NumberType, _super);\r\n    function NumberType() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    NumberType.prototype.renderAsInput = function () {\r\n        return (this.name)\r\n            ? this.name + \":\" + this.value\r\n            : \"\" + this.value;\r\n    };\r\n    return NumberType;\r\n}(ScalarType_1.default));\r\nexports.default = NumberType;\r\n\n\n//# sourceURL=webpack:///./src/Types/NumberType.ts?");

/***/ }),

/***/ "./src/Types/ObjectType.ts":
/*!*********************************!*\
  !*** ./src/Types/ObjectType.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar TypeGQ_1 = __webpack_require__(/*! ./TypeGQ */ \"./src/Types/TypeGQ.ts\");\r\nvar getTypeConstructor_1 = __webpack_require__(/*! ../functions/getTypeConstructor */ \"./src/functions/getTypeConstructor.ts\");\r\nvar ObjectType = /** @class */ (function (_super) {\r\n    __extends(ObjectType, _super);\r\n    function ObjectType() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ObjectType.prototype.renderAsInput = function () {\r\n        var renderValues = [];\r\n        for (var name_1 in this.value) {\r\n            if (!this.value.hasOwnProperty(name_1))\r\n                continue;\r\n            var value = this.value[name_1];\r\n            if (value instanceof TypeGQ_1.default) {\r\n                renderValues.push(value.renderAsInput());\r\n            }\r\n            else {\r\n                var typeConstructor = getTypeConstructor_1.default(value);\r\n                renderValues.push((new typeConstructor(name_1, value).renderAsInput()));\r\n            }\r\n        }\r\n        return (this.name)\r\n            ? this.name + \":{\" + renderValues.join(',') + \"}\"\r\n            : \"{\" + renderValues.join(',') + \"}\";\r\n    };\r\n    ObjectType.prototype.renderAsOutput = function () {\r\n        return \"\" + this.name;\r\n    };\r\n    return ObjectType;\r\n}(TypeGQ_1.default));\r\nexports.default = ObjectType;\r\n\n\n//# sourceURL=webpack:///./src/Types/ObjectType.ts?");

/***/ }),

/***/ "./src/Types/ScalarType.ts":
/*!*********************************!*\
  !*** ./src/Types/ScalarType.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar TypeGQ_1 = __webpack_require__(/*! ./TypeGQ */ \"./src/Types/TypeGQ.ts\");\r\nvar ScalarType = /** @class */ (function (_super) {\r\n    __extends(ScalarType, _super);\r\n    function ScalarType(name, value) {\r\n        if (value === void 0) { value = null; }\r\n        return _super.call(this, name, value) || this;\r\n    }\r\n    ScalarType.prototype.renderAsOutput = function () {\r\n        return \"\" + this.name;\r\n    };\r\n    return ScalarType;\r\n}(TypeGQ_1.default));\r\nexports.default = ScalarType;\r\n\n\n//# sourceURL=webpack:///./src/Types/ScalarType.ts?");

/***/ }),

/***/ "./src/Types/StringType.ts":
/*!*********************************!*\
  !*** ./src/Types/StringType.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ScalarType_1 = __webpack_require__(/*! ./ScalarType */ \"./src/Types/ScalarType.ts\");\r\nvar StringType = /** @class */ (function (_super) {\r\n    __extends(StringType, _super);\r\n    function StringType() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    StringType.prototype.renderAsInput = function () {\r\n        return (this.name)\r\n            ? this.name + \":\\\"\" + this.value + \"\\\"\"\r\n            : \"\\\"\" + this.value + \"\\\"\";\r\n    };\r\n    return StringType;\r\n}(ScalarType_1.default));\r\nexports.default = StringType;\r\n\n\n//# sourceURL=webpack:///./src/Types/StringType.ts?");

/***/ }),

/***/ "./src/Types/TypeGQ.ts":
/*!*****************************!*\
  !*** ./src/Types/TypeGQ.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar TypeGQ = /** @class */ (function () {\r\n    function TypeGQ(name, value) {\r\n        if (value instanceof TypeGQ && value === this) {\r\n            throw new Error('Recursion is forbidden');\r\n        }\r\n        this.name = name;\r\n        this.value = value;\r\n    }\r\n    Object.defineProperty(TypeGQ.prototype, \"value\", {\r\n        get: function () {\r\n            return this._value;\r\n        },\r\n        set: function (value) {\r\n            if (this._value !== undefined && typeof this._value !== typeof value) {\r\n                throw new Error('Forbidden to change type');\r\n            }\r\n            this._value = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    TypeGQ.prototype.clone = function () {\r\n        // @ts-ignore\r\n        return new this.constructor(this.name, this.value);\r\n    };\r\n    return TypeGQ;\r\n}());\r\nexports.default = TypeGQ;\r\n\n\n//# sourceURL=webpack:///./src/Types/TypeGQ.ts?");

/***/ }),

/***/ "./src/functions/getTypeConstructor.ts":
/*!*********************************************!*\
  !*** ./src/functions/getTypeConstructor.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar NullType_1 = __webpack_require__(/*! ../Types/NullType */ \"./src/Types/NullType.ts\");\r\nvar StringType_1 = __webpack_require__(/*! ../Types/StringType */ \"./src/Types/StringType.ts\");\r\nvar NumberType_1 = __webpack_require__(/*! ../Types/NumberType */ \"./src/Types/NumberType.ts\");\r\nvar BooleanType_1 = __webpack_require__(/*! ../Types/BooleanType */ \"./src/Types/BooleanType.ts\");\r\nvar ObjectType_1 = __webpack_require__(/*! ../Types/ObjectType */ \"./src/Types/ObjectType.ts\");\r\nvar ArrayType_1 = __webpack_require__(/*! ../Types/ArrayType */ \"./src/Types/ArrayType.ts\");\r\nfunction getTypeConstructor(value) {\r\n    if (typeof value === \"undefined\")\r\n        return NullType_1.default;\r\n    if (value === null)\r\n        return NullType_1.default;\r\n    var className = Object.prototype.toString.call(value).match(/^\\[object\\s(.*)\\]$/)[1];\r\n    switch (className) {\r\n        case 'String': return StringType_1.default;\r\n        case 'Number': return NumberType_1.default;\r\n        case 'Boolean': return BooleanType_1.default;\r\n        case 'Object': return ObjectType_1.default;\r\n        case 'Array': return ArrayType_1.default;\r\n    }\r\n    throw new Error('Invalid value type: ' + className);\r\n}\r\nexports.default = getTypeConstructor;\r\n\n\n//# sourceURL=webpack:///./src/functions/getTypeConstructor.ts?");

/***/ })

/******/ });