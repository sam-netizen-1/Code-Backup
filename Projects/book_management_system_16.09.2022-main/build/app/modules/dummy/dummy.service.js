"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dummy_schema_1 = __importDefault(require("./dummy.schema"));
const dummyGet = () => {
    return dummy_schema_1.default.get();
};
exports.default = {
    dummyGet
};
//# sourceMappingURL=dummy.service.js.map