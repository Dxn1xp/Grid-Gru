const fs = require('fs').promises;

const readFile = async (path) => {
  return await fs.readFile(path, 'utf8');
};

const writeFile = async (path, data) => {
  return await fs.writeFile(path, data, 'utf8');
};

module.exports = { readFile, writeFile };