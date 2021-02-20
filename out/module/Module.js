"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
class Module {
    constructor(extensionName) {
        // @ts-ignore
        this._disposable = null;
        const command = `${extensionName}.${this.constructor.name}`;
        this._init(command);
    }
    get disposable() {
        return this._disposable;
    }
}
exports.Module = Module;
//# sourceMappingURL=Module.js.map