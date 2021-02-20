"use strict";
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
exports.QuickPick = void 0;
const vscode = require("vscode");
class QuickPick {
    constructor(extensionName) {
        this._quickPickItems = [
            {
                label: 'Like or Dislike extension', description: 'Do you like or dislinke this extension?', cb: this.likeOrDislike
            },
            {
                label: 'Ask question', description: 'Ask question and show the result as information message', cb: this.askQuestion
            }
        ];
        this._disposable = vscode.commands.registerCommand(`${extensionName}.quickPick`, () => __awaiter(this, void 0, void 0, function* () {
            const quickPickItem = yield vscode.window.showQuickPick(this._quickPickItems);
            quickPickItem.cb();
        }));
    }
    get disposable() {
        return this._disposable;
    }
    askQuestion() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield vscode.window.showInputBox({ placeHolder: `How are you?` });
            vscode.window.showInformationMessage('That\'s great!');
        });
    }
    likeOrDislike() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield vscode.window.showInformationMessage('I\'m Ben!?...', 'Like', 'Dislike');
            if (res == 'Like')
                vscode.window.showInformationMessage(':-)');
            else if (res == 'Dislike')
                vscode.window.showInformationMessage(':-(');
        });
    }
}
exports.QuickPick = QuickPick;
//# sourceMappingURL=QuickPick.js.map