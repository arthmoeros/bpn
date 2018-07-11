const yaml = require('js-yaml');
const fs = require('fs');

let struc = yaml.load(fs.readFileSync('./sample-bpn/main.yml'));

let todo = [];

for (let sectionName in struc.main) {
    for(let i = 0; i < struc.main[sectionName].tasks.length; i+=1){
        let item = struc.main[sectionName].tasks[i];
        for(let taskName in item){          
            todo.push({
                sectionName,
                taskName,
                params: item[taskName]
            });
        }
    }
}

console.log(JSON.stringify(todo));