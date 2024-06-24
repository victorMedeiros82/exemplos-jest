Array.prototype.top = function(){return this[this.length-1]}
Array.prototype.isEmpty = function(){return this.leght === 0}
import  {readFileSync}  from 'fs'
const entrada = readFileSync('./inp.md', 'utf-8');
const lines = entrada.split('\n')
console.log(lines)