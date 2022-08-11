import * as vscode from 'vscode';

let currentPanel: vscode.WebviewPanel | undefined = undefined;

export default function visualWebview(context: vscode.ExtensionContext) {
    const panelTitle = 'Create App Visual';

    const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

    if (currentPanel) {
        currentPanel.reveal(columnToShowIn);
    } else {
        currentPanel = vscode.window.createWebviewPanel(
            'visual',
            panelTitle,
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
            }
        );

        currentPanel.webview.html = getWebviewContent();

        currentPanel.onDidChangeViewState(
            e => {
                const panel = e.webviewPanel;
                console.log(panel.viewColumn);
                switch (panel.viewColumn) {
                }
            },
            null,
            context.subscriptions
        );

        currentPanel.onDidDispose(
            () => {
                currentPanel = undefined;
            },
            null,
            context.subscriptions
        );
    }
}

function updateCreateAppWebview(panel: vscode.WebviewPanel, title: string) {
    panel.title = title;
    panel.webview.html = getWebviewContent();
}

function getWebviewContent() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta
                http-equiv="Content-Security-Policy"
                content="default-src 'none';img-src vscode-resource: https:; script-src vscode-resource:; style-src vscode-resource:;"
            >
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Create APP Visual</title>
        </head>
        <body>
            <div>CreateAPP</div>
        </body>
        </html>
    `;
}
