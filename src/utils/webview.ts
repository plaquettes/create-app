import * as path from 'path';
import * as vscode from 'vscode';
import { WebviewPanel, window } from 'vscode';
import { getExtensionPath } from '../context';

export const setWebviewHtml = (panel: vscode.WebviewPanel) => {
    const scriptPathOnDisk = vscode.Uri.file(
        path.join(getExtensionPath(), 'webview-dist', 'main.js')
    );

    const scriptUri = 'http://localhost:8000/main.js';
    // const scriptUri = panel.webview.asWebviewUri(scriptPathOnDisk);

    panel.webview.html = `
              <!DOCTYPE html>
              <html>
              <head>
                  <meta charset="utf-8" />
                  <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
                  />
                  <script>
                      window.routerBase = "/";
                  </script>
                  <script>
                     window.g_path = "/";
                  </script>
                  <script>
                     window.vscode = acquireVsCodeApi();
                  </script>
              </head>
              <body>
                  <div id="root"></div>
                  <script src="${scriptUri}"></script>
              </body>
          </html>
  `;
};
