const yaml = require('js-yaml');
const fs = require('fs');

let struc = yaml.load(fs.readFileSync('./sample-bpn/main.yml'));

console.log(JSON.stringify(struc));