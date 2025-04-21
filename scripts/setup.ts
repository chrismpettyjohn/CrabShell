import { writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { createInterface } from 'readline';

function prompt(question: string): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(res => rl.question(question, answer => {
    rl.close();
    res(answer);
  }));
}

function ensureEnv(path: string, content: string): void {
  if (!existsSync(path)) writeFileSync(path, content);
}

function runCommand(cmd: string): void {
  execSync(cmd, { stdio: 'inherit' });
}

async function main(): Promise<void> {
  const dbHost = await prompt('> What is your DB HOST: ');
  const dbPort = await prompt('> What is your DB PORT: ');
  const dbUser = await prompt('> What is your DB USER: ');
  const dbPass = await prompt('> What is your DB PASS: ');

  const runMigrations = (await prompt('> Do you want to run migrations (yes/no): ')).toLowerCase() === 'yes';

  const apiUrl = await prompt('> API URL: ');
  const adminUrl = await prompt('> Admin URL: ');
  const publicUrl = await prompt('> Public URL: ');

  const envApi = `DB_HOST=${dbHost}
    DB_PORT=${dbPort}
    DB_USER=${dbUser}
    DB_PASS=${dbPass}
    `;

  const envUi = `VITE_API_URL=${apiUrl}
    VITE_ADMIN_URL=${adminUrl}
    VITE_PUBLIC_URL=${publicUrl}
    `;

  ensureEnv('./apps/api/.env', envApi);
  ensureEnv('./apps/admin/.env', envUi);
  ensureEnv('./apps/web/.env', envUi);

  runCommand('bun install');
  runCommand('bun run build');

  if (runMigrations) runCommand('bun run sql ./scripts/crabshell.sql');

  runCommand('bunx pm2 start apps/api/dist/main.js --name crabshell-api');

  console.log('✅ Setup complete.');
}


main();