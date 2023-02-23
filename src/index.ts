import { Plugin, PluginBuild } from 'esbuild';
import { spawnSync } from 'child_process';
import { promises } from 'fs';
import { join } from 'path';

const compile = (source: string): string => {
  const shell = spawnSync('ruby', [join(__dirname, '../bin/transform.rb'), `--source=${source}`], {});
  return shell.stdout.toString();
};

export const erbPlugin = (): Plugin => {
  return {
    name: 'erb',
    setup(build: PluginBuild) {
      build.onLoad({ filter: /\.js.erb$/ }, async (args) => {
        const source = await promises.readFile(args.path, 'utf-8');
        const compiledCode = compile(source);
        return {
          contents: compiledCode,
        };
      });
    },
  };
};
