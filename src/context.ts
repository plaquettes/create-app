import {ExtensionContext, window} from 'vscode';
interface Options {
    extensionContext?: ExtensionContext;
    rootPath?: string;
    extensionPath?: string;
}

interface Context extends Options {
    activeTextEditorId: string;
}

const context: Context = {
    extensionContext: undefined, // 插件 context
    rootPath: '', // 工作空间根目录
    extensionPath: '', // 插件安装目录
    activeTextEditorId: '', // 激活的 tab id
};

export const setExtensionContext = (extensionContext: ExtensionContext) => {
    context.extensionContext = extensionContext;
};

export const getExtensionContext = () => context.extensionContext;

export const getRootPath = () => context.rootPath;

export const setRootPath = (rootPath: string) => {
    context.rootPath = rootPath;
};

export const setExtensionPath = (extensionPath: string) => {
    context.extensionPath = extensionPath;
};

export const setLastActiveTextEditorId = (activeTextEditorId: string) => {
    context.activeTextEditorId = activeTextEditorId;
};

export const getLastAcitveTextEditor = () => {
    const {visibleTextEditors} = window;
    const activeTextEditor = visibleTextEditors.find(
        (item: any) => item.id === context.activeTextEditorId
    );
    return window.activeTextEditor || activeTextEditor;
};

export const getExtensionPath = () => context.extensionPath;

export const initContext = (options: Options) => {
    Object.assign(context, options);
};
