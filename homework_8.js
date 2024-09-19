const regex = /^[^a]{6,}$/i;
const text = "Wonderful, Happiness, Joyful, Time, Task, Apple";

const words = text.split(/[\s,]+/);
const matches = words.filter(word => regex.test(word));

console.log(matches);