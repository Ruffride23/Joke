import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['server.ts'],
  bundle: true,
  platform: 'node',
  target: 'node20',
  outfile: 'dist/server.js',
  format: 'esm',
  external: ['express', 'mysql2', 'bcryptjs', 'jsonwebtoken', 'dotenv', 'vite'],
}).catch(() => process.exit(1));
