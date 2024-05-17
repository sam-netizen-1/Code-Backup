"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
const cors = () => {
    return (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
    };
};
exports.cors = cors;
