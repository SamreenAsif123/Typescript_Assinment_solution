"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = 'Shahnaz Khan';
console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
