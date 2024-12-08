# MacroQuest2 Macro Language VSCode Extension

This Visual Studio Code extension enhances your experience when writing MacroQuest2 scripts by providing powerful features to streamline development and debugging.

## Key Features

### Syntax Highlighting

- **Comprehensive Support**:
  - Preprocessor directives (e.g., `${directivesRegex}`).
  - Commands, top-level objects, and data types are dynamically updated based on external JSON files.
  - Variables, strings, numbers, and comments are accurately highlighted.
  - Invalid syntax patterns are detected and flagged.

- **Dynamic Syntax Updates**:
  - The extension dynamically generates regular expressions (`Regex`) for commands, directives, top-level objects, and data types from JSON files located in the `syntaxes` directory during the build process.

### Autocompletion

- **Intelligent Suggestions**:
  - Commands, variables, directives, and other constructs are suggested for faster coding.
  - Works seamlessly with MQ2-specific syntax, improving productivity.

### Code Snippets

- **Predefined Templates**:
  - Includes templates for common constructs like `if`, `while`, and `Sub`.
  - Use snippets to quickly insert reusable code structures.

### Bracket Management

- **Auto-Closing**:
  - Automatically pairs and closes brackets, braces, and parentheses, including `${}`.
- **Surrounding Pairs**:
  - Surrounds selected text with appropriate brackets or quotes.

### Code Folding

- **Customizable Folding**:
  - Foldable sections based on MQ2 syntax such as `Sub` functions and `/return`.

---

## Installation

1. **Download and Install**:
   - Install the extension in Visual Studio Code from the marketplace or manually (see "Compilation").

2. **File Association**:
   - Associate `.mac`, and `.inc` files with the extension for automatic syntax highlighting.

---

## Usage

- Open a `.mac` or `.inc` file in Visual Studio Code.
- Start typing, and the extension will provide syntax highlighting, autocompletion, and bracket pairing automatically.
- Use snippets for faster coding by typing a keyword (e.g., `if`) and selecting the corresponding snippet from the suggestions.

---

## Compilation

To build and install the extension locally:

1. **Install Node.js**:
   - Use `winget install -e --id OpenJS.NodeJS` (or install it manually from the [Node.js website](https://nodejs.org)).

2. **Build the Extension**:
   - Run `npm run vsce:package` to package the extension into a `.vsix` file.

3. **Install the Extension**:
   - Use the command `code --install-extension .\mq2-vscode-extension-1.0.0.vsix` to install the packaged extension in Visual Studio Code.

## Technical Details

### Syntax Definitions

The syntax file (`macroquest2.tmLanguage.json`) defines patterns for highlighting:

- **Directives**:
  Preprocessor directives matched using the dynamically generated `${directivesRegex}`.

- **Top-Level Objects**:
  Objects identified by patterns like `${top_objectsRegex}`.

- **Data Types**:
  Data types are matched using `${data_typesRegex}`, ensuring accurate syntax highlighting.

- **Commands**:
  Commands are matched using `${commandRegex}` and include MQ2-specific control keywords like `if`, `while`, `Sub`, and `else`.

- **Comments**:
  - Single-line comments start with `|`.
  - Block comments use `|**` and `**|`.

- **Strings and Numbers**:
  - Strings are enclosed in double quotes.
  - Numbers are detected as standalone numeric constants.

- **Error Detection**:
  Patterns for invalid commands or malformed syntax are highlighted as errors.

### Brackets and Folding

- Supported brackets include `${}`, `{}`, `[]`, and `()`.
- Folding markers are customizable using regex to identify sections like functions (`Sub`) and their endings (`/return`).

---

For more details or to contribute, feel free to submit an issue or pull request on the repository. Happy scripting!
