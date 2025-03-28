#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import prompts from 'prompts';
import { Command } from 'commander';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8')
);

// ASCII art logo
const asciiLogo = `
  ${chalk.cyan('■')}${chalk.blue('■')}${chalk.magenta('■')} ${chalk.bold.cyan('CHX')} ${chalk.gray('TEMPLATE')} ${chalk.magenta('■')}${chalk.blue('■')}${chalk.cyan('■')}
  ${chalk.cyan('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀')}
`;

// Fun quotes about coding/development
const quotes = [
  "Code is like humor. When you have to explain it, it's bad. – Cory House",
  "The best error message is the one that never shows up. – Thomas Fuchs",
  "Clean code always looks like it was written by someone who cares. – Michael Feathers",
  "It's not a bug – it's an undocumented feature. – Anonymous",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler"
];

// Get random quote
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

// Generate a fun emoji based on project name
const getProjectEmoji = (name) => {
  const emojiList = ['🚀', '⚡', '🔥', '💫', '✨', '🌟', '💎', '🛠️', '🧩', '🔮'];
  // Use the sum of character codes to deterministically choose an emoji
  const charSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return emojiList[charSum % emojiList.length];
};

// Get time of day greeting
const getTimeGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

// Set up Commander
program
  .name(packageJson.name)
  .description('Create a new React application with an optimized developer experience')
  .version(packageJson.version)
  .argument('[project-directory]', 'The name of your project directory')
  .option('--ts, --typescript', 'Use TypeScript (default)', true)
  .option('--js, --javascript', 'Use JavaScript instead of TypeScript')
  .option('--use-npm', 'Use npm as the package manager (default is the one you used to install create-chx-app)')
  .option('--use-yarn', 'Use yarn as the package manager')
  .option('--use-pnpm', 'Use pnpm as the package manager')
  .action(async (projectDirectory, options) => {
    try {
      await createApp(projectDirectory, options);
    } catch (error) {
      console.error(`${chalk.red.bold('Error:')} ${error.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);

async function createApp(projectDirectory, options) {
  // If no directory is provided, ask for it
  if (!projectDirectory) {
    const res = await prompts({
      type: 'text',
      name: 'projectDirectory',
      message: 'What would you like to name your amazing new project?',
      initial: 'my-chx-app',
      validate: (name) => {
        if (name.trim().length === 0) {
          return 'Project name cannot be empty';
        }
        if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
          return 'Project name can only contain letters, numbers, underscores, and hyphens';
        }
        return true;
      },
    });

    if (!res.projectDirectory) {
      console.log(chalk.red('Operation cancelled'));
      process.exit(1);
    }

    projectDirectory = res.projectDirectory;
  }

  const root = path.resolve(projectDirectory);
  const appName = path.basename(root);
  const projectEmoji = getProjectEmoji(appName);

  // Check if directory exists
  if (fs.existsSync(root)) {
    const res = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: `Directory ${chalk.cyan(projectDirectory)} already exists. Do you want to overwrite it?`,
      initial: false,
    });

    if (!res.overwrite) {
      console.log(chalk.red('Operation cancelled'));
      process.exit(1);
    }

    fs.emptyDirSync(root);
  } else {
    fs.mkdirSync(root, { recursive: true });
  }

  // Display the fancy logo
  console.log(asciiLogo);
  console.log(chalk.bold(`${getTimeGreeting()}, developer! Let's build something awesome together.`));
  console.log();
  console.log(`${chalk.cyan('⚡')} ${chalk.bold(`Initializing ${projectEmoji} ${chalk.cyan(appName)}...`)}`);
  console.log();

  // Determine which package manager to use
  let packageManager = 'npm';
  if (options.useYarn) {
    packageManager = 'yarn';
  } else if (options.usePnpm) {
    packageManager = 'pnpm';
  } else if (options.useNpm) {
    packageManager = 'npm';
  } else {
    // Default to the one used to run create-chx-app
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent && userAgent.includes('yarn')) {
      packageManager = 'yarn';
    } else if (userAgent && userAgent.includes('pnpm')) {
      packageManager = 'pnpm';
    }
  }

  // Spinning animation frames
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  
  // Simulate a loading animation for fun
  const loadingInterval = setInterval(() => {
    process.stdout.write(`\r${chalk.cyan(frames[i++ % frames.length])} Preparing your project template...`);
  }, 80);
  
  // Add a slight delay to make the loading animation visible
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Stop the loading animation
  clearInterval(loadingInterval);
  process.stdout.write('\r' + ' '.repeat(50) + '\r');

  // Copy template directory
  console.log(`${chalk.green('✓')} ${chalk.dim('Template prepared')}`);
  
  // Another loading animation for copying files
  i = 0;
  const copyingInterval = setInterval(() => {
    process.stdout.write(`\r${chalk.cyan(frames[i++ % frames.length])} Crafting your application...`);
  }, 80);
  
  // Copy the template files
  const templateDir = path.join(__dirname, 'template');
  fs.copySync(templateDir, root);
  
  // Wait a bit more for effect
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Stop the animation
  clearInterval(copyingInterval);
  process.stdout.write('\r' + ' '.repeat(50) + '\r');
  
  console.log(`${chalk.green('✓')} ${chalk.dim('Application files crafted')}`);

  // Update package.json in the new project
  const packageJsonPath = path.join(root, 'package.json');
  const templatePackageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  templatePackageJson.name = appName;
  templatePackageJson.version = '0.1.0';
  
  // Add a bit of personalization
  if (!templatePackageJson.contributors) {
    templatePackageJson.contributors = [];
  }
  
  // Add Chamath as a contributor in a subtle way
  templatePackageJson.contributors.push({
    name: "Chamath Thiwanka",
    url: "https://github.com/chama-x"
  });
  
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(templatePackageJson, null, 2) + '\n'
  );

  // Create a .gitignore if it doesn't exist
  const gitignorePath = path.join(root, '.gitignore');
  if (!fs.existsSync(gitignorePath)) {
    fs.writeFileSync(
      gitignorePath,
      `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`
    );
  }

  // Change directory
  process.chdir(root);

  // Display the final message with a futuristic banner
  console.log();
  console.log(chalk.bgCyan.black(' CHX ') + ' ' + chalk.bold(`${projectEmoji} ${chalk.cyan(appName)} created`));
  console.log();
  console.log(`${chalk.cyan('⚡')} ${chalk.dim('Project location:')} ${chalk.green(root)}`);
  console.log();
  console.log(chalk.bold('Get started in seconds:'));
  console.log();
  console.log(`  ${chalk.gray('$')} ${chalk.bold(`cd ${projectDirectory}`)}`);
  console.log(`  ${chalk.gray('$')} ${chalk.bold(`${packageManager === 'npm' ? 'npm i' : packageManager === 'yarn' ? 'yarn' : `${packageManager} install`}`)}`);
  console.log(`  ${chalk.gray('$')} ${chalk.bold(`${packageManager}${packageManager === 'yarn' ? '' : ' run'} dev`)}`);
  console.log();
  
  console.log(chalk.cyan(`${projectEmoji} Ready for you to build something amazing! · CHX by Chamath`));
} 