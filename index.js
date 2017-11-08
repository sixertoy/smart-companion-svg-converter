#!/usr/bin/env node
/* eslint
  import/no-extraneous-dependencies: 0 */
const path = require('path');
const sstp = require('sstp');

const INPUT_DIR = 'svg';
const OUTPUT_DIR = 'output';

const file = ['crown', 'peach'];
sstp.convertToPath(
  path.join('.', INPUT_DIR, `${file[0]}.svg`),
  path.join('.', OUTPUT_DIR, `${file[1]}.svg`)
);
