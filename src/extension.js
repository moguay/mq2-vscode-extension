const vscode = require('vscode');
const completionProvider = require('./completionProvider');

function activate(context) {
    context.subscriptions.push(completionProvider);
}

function deactivate() {}

module.exports = { activate, deactivate };
