import * as vscode from 'vscode';
import {VISUAL_COMMANDS} from './const';
import { initContext } from './context';
import visualWebview from './webview/visual';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "create-app" is now active!');
    initContext({
        extensionContext: context,
        extensionPath: context.extensionPath,
    });

    context.subscriptions.push(
        vscode.commands.registerCommand(VISUAL_COMMANDS, () => {
            visualWebview(context);
        })
    );

    vscode.window.registerWebviewPanelSerializer(VISUAL_COMMANDS, {
        async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any) {
            // `state`是webview内调用`setState`保留住的
            console.log(`Got state: ${state}`);
        },
    });
}

export function deactivate() {}
