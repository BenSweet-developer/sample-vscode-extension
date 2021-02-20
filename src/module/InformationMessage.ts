import * as vscode from 'vscode';
import { Module } from './Module';

export class InformationMessage extends Module {

    constructor(extensionName: string) {
        super(extensionName);
    }

    _init(command: string) {
        this._disposable = vscode.commands.registerCommand(command, async() => {
            await vscode.window.showInformationMessage('I\'m an information message');
            vscode.window.showErrorMessage('I\'m an error message');
        });
    }
}