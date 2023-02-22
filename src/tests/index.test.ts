import { test, expect, describe } from '@jest/globals';
import { build } from 'esbuild';
import { erbPlugin } from '../index';
import { join } from 'path';

describe('esbuild-erb-plugin', () => {
  const bundle = async (fixture: string): Promise<string> => {
    const buildOptions = {
      entryPoints: [join(__dirname, `../fixtures/${fixture}`)],
      plugins: [erbPlugin()],
      bundle: true,
      write: false,
      outfile: 'out.js',
    };
    const result = await build(buildOptions);

    return result.outputFiles![0].text;
  };

  test('compiles code without an erb import <basic.ts>', async () => {
    const result = await bundle('basic.ts');
    expect(result).toMatchSnapshot();
  });
});
