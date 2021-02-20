import * as vscode from 'vscode';
import { InformationMessage } from './module/InformationMessage';
import { QuickPick } from './module/QuickPick';

export function activate(context: vscode.ExtensionContext) {
	const extensionName = 'sample';

	const instances = [
		new QuickPick(extensionName),
		new InformationMessage(extensionName)
	];

	for (let instance of instances)
		context.subscriptions.push(instance.disposable);
}

export function deactivate() {}