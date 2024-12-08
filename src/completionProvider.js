const vscode = require('vscode');

module.exports = vscode.languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'macroquest2' },
    {
        provideCompletionItems(document, position) {
            const suggestions = [
                new vscode.CompletionItem("if", vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem("declare", vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem("sub", vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem("${MyVariable}", vscode.CompletionItemKind.Variable)
            ];
            return suggestions;
        }
    },
    "" // Triggers suggestions on all characters
);
