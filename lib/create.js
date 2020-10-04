const prompt = require('prompt');
const shell = require('shelljs');
const fs = require('fs');
const colors = require("colors/safe");

module.exports = (args, options, logger) => {
  const templatePath = `${__dirname}/../templates/${args.template}/`;
  const localPath = process.cwd();

 if (fs.existsSync(templatePath)) {
    logger.info('Copying files…');
    shell.cp('-R', `${templatePath}`, `~/work/${args.projectName}`);
    logger.info('✔ The files have been copied!');
    shell.cd(`~/work/${args.projectName}`);
    logger.info('✔ Installing packages');
    shell.exec('npm install')
    shell.exec('code .')
    
  } else {
    logger.error(`The requested template wasn’t found.`)
    process.exit(1);
  }
}
