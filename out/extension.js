"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const InformationMessage_1 = require("./module/InformationMessage");
const QuickPick_1 = require("./module/QuickPick");
function activate(context) {
    const extensionName = 'sample';
    const instances = [
        new QuickPick_1.QuickPick(extensionName),
        new InformationMessage_1.InformationMessage(extensionName)
    ];
    for (let instance of instances)
        context.subscriptions.push(instance.disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map