import * as vscode from 'vscode';

export abstract class Module {

    // @ts-ignore
    protected _disposable: vscode.Disposable = null;
    public get disposable() {
        return this._disposable;
    }

    constructor(extensionName: string) {
        const command = `${extensionName}.${this.constructor.name}`;

        this._init(command);
    }

    protected abstract _init(command: string): void;
}