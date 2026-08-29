const fs = require('fs');
const execSync = require('child_process').execSync;

const userHtmlContent = process.env.USER_HTML_CODE || '<h1>Default App</h1>';

execSync('npx cordova create myApp com.alimi.app StudioApp');
fs.writeFileSync('myApp/www/index.html', userHtmlContent);

process.chdir('myApp');
execSync('cordova platform add android');
execSync('cordova build android --verbose');
