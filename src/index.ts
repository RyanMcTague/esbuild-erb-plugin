import { Plugin, PluginBuild } from 'esbuild';
import * as fs from 'fs';

export const erbPlugin = (): Plugin => {
  return {
    name: 'erb',
    setup(build: PluginBuild) {
      build.onLoad({ filter: /\.erb$/ }, async (args) => {
        const source = await fs.promises.readFile(args.path, 'utf-8');

        return {
          contents: source,
        };
      });
    },
  };
};
