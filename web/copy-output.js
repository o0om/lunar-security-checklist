const fs = require('fs');
const path = require('path');

console.log('Starting copy-output.js script...');

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'output');
console.log('Output directory path:', outputDir);

if (!fs.existsSync(outputDir)) {
  console.log('Creating output directory...');
  fs.mkdirSync(outputDir, { recursive: true });
} else {
  console.log('Output directory already exists');
}

// Copy files from .vercel/output to output
function copyDir(src, dest) {
  console.log(`Copying from ${src} to ${dest}`);
  
  if (!fs.existsSync(dest)) {
    console.log(`Creating destination directory: ${dest}`);
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  console.log(`Found ${entries.length} entries in ${src}`);
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      console.log(`Copying directory: ${entry.name}`);
      copyDir(srcPath, destPath);
    } else {
      console.log(`Copying file: ${entry.name}`);
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const sourceDir = path.join(__dirname, '.vercel', 'output');
const targetDir = path.join(__dirname, 'output');

console.log('Source directory:', sourceDir);
console.log('Target directory:', targetDir);

if (fs.existsSync(sourceDir)) {
  console.log('Source directory exists, starting copy...');
  copyDir(sourceDir, targetDir);
  console.log('Successfully copied build output to output/ directory');
  
  // Verify the copy worked
  const outputContents = fs.readdirSync(targetDir);
  console.log('Output directory contents:', outputContents);
} else {
  console.error('Source directory .vercel/output does not exist');
  console.log('Current directory contents:', fs.readdirSync(__dirname));
  process.exit(1);
} 