const fs = require('fs');
const path = require('path');
const commands = require('./syntaxes/commands'); // Load the list of commands
const top_objects = require('./syntaxes/top_objects'); // Load the list of top_objects
const data_types = require('./syntaxes/data_types'); // Load the list of data_types
const directives = require('./syntaxes/directives'); // Load the list of directives

// Create a dynamic regular expression from the list of commands
const commandRegex = commands.map(command => command).join("|");
// Create a dynamic regular expression from the list of top_objects
const top_objectsRegex = top_objects.map(top_object => top_object).join("|");
// Create a dynamic regular expression from the list of data_types
const data_typesRegex = data_types.map(data_type => data_type).join("|");
// Create a dynamic regular expression from the list of directives
const directivesRegex = directives.map(directive => directive).join("|");

// Load the grammar file
const grammarFilePath = path.join(__dirname, 'syntaxes', 'macroquest2.tmLanguage.json');
const buildPath = path.join(__dirname, 'build', 'macroquest2.tmLanguage.json'); // Output folder

fs.readFile(grammarFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the grammar file:', err);
    return;
  }

  // Replace only ${commandRegex} in the `match` rule
  let updatedData = data.replace(
    /\$\{commandRegex\}/g, // Replace the variable ${commandRegex}
    commandRegex // With the value of the generated commandRegex variable
  );

  updatedData = updatedData.replace(
    /\$\{top_objectsRegex\}/g, // Replace the variable ${top_objectsRegex}
    top_objectsRegex // With the value of the generated top_objectsRegex variable
  );

  updatedData = updatedData.replace(
    /\$\{data_typesRegex\}/g, // Replace the variable ${data_typesRegex}
    data_typesRegex // With the value of the generated data_typesRegex variable
  );

  updatedData = updatedData.replace(
    /\$\{directivesRegex\}/g, // Replace the variable ${directivesRegex}
    directivesRegex // With the value of the generated directivesRegex variable
  );

  // Save the updated file in the build folder (without modifying the source file)
  fs.writeFile(buildPath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error saving the grammar file:', err);
    } else {
      console.log('Grammar successfully generated in the build folder!');
    }
  });
});
