const fs = require('fs');
const path = require('path');

const directoryPath = 'c:/SISTEMA/Isolamentos Inova/isolamentoinova';
const htmlFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(directoryPath, file);
    let html = fs.readFileSync(filePath, 'utf-8');

    // Add style="display: none;" to the li element with class="language dropdown"
    html = html.replace(/<li class="language dropdown">/g, '<li class="language dropdown" style="display: none;">');
    
    // Some files might have different spacing or characters, but they all share <li class="language dropdown">
    // Some might also have Google Translate code, but the prompt just specifically wants the language switcher hidden.

    fs.writeFileSync(filePath, html, 'utf-8');
});

console.log('Language switcher hidden in all HTML pages.');