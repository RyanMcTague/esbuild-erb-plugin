import { test, expect, describe, beforeAll } from '@jest/globals';
import * as esbuild from 'esbuild';
import * as path from 'path';
import { erbPlugin } from '../index';

describe('plugin does not interfere with esbuild functions', () => {

  const buildOptions = {
    entryPoints: [path.join(__dirname, '../fixtures/basic.ts')],
    plugins: [erbPlugin()],
    bundle: true,
    write: false,
    outfile: 'out.js'
  }

  let result: esbuild.BuildResult

  beforeAll(async ()=>{
    result = await esbuild.build(buildOptions);
  })

  test('by still creating a single outfile', async () => {
    expect(result.outputFiles!.length).toBe(1)
  });
});
