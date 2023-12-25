"use strict";
// Sanitize input here prior to passing to updateEntity...
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processInput = void 0;
const processInput = (wss, id, msg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = JSON.parse(msg);
        // broadcast all new changes to all open connections
        wss.clients.forEach((client) => {
            client.send(msg);
        });
        //
    }
    catch (err) {
        console.log(err);
        return;
    }
});
exports.processInput = processInput;
