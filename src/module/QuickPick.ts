import * as vscode from 'vscode';
import { Module } from './Module';

interface iCustomQuickPickItem extends vscode.QuickPickItem {
    cb: Function
}

type tLikeOrDislike = 'Like' | 'Dislike';

export class QuickPick extends Module {

    private _quickPickItems: iCustomQuickPickItem[] = [
		{
			label: 'Like or Dislike extension', description: 'Do you like or dislinke this extension?', cb: this.likeOrDislike
		},
		{
			label: 'Ask question', description: 'Ask question and show the result as information message', cb: this.askQuestion
		}
	];

	constructor(extensionName: string) {
		super(extensionName);
	}

	protected _init(command: string): void {
		
		this._disposable = vscode.commands.registerCommand(`${command}`, async () => {

			const quickPickItem = await vscode.window.showQuickPick(this._quickPickItems) as iCustomQuickPickItem;

            quickPickItem.cb();

        });
	}

    private async askQuestion(): Promise<void> {
        const res = await vscode.window.showInputBox({placeHolder: `How are you?`});
        vscode.window.showInformationMessage('That\'s great!');
    }

    private async likeOrDislike(): Promise<void> {
        const res = await vscode.window.showInformationMessage('I\'m Ben!?...', 'Like', 'Dislike') as tLikeOrDislike;
        if (res == 'Like') vscode.window.showInformationMessage(':-)');
        else if (res == 'Dislike') vscode.window.showInformationMessage(':-(');
    }
}