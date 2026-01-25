'use strict';

const renderAssets = require('./render-assets');
const upath = require('upath');
const sh = require('shelljs');

renderAssets();

// Copy CNAME file for GitHub Pages
const sourceCNAME = upath.resolve(upath.dirname(__filename), '../src/CNAME');
const destCNAME = upath.resolve(upath.dirname(__filename), '../dist/CNAME');

sh.cp(sourceCNAME, destCNAME);