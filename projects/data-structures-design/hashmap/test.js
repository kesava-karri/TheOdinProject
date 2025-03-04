import HashMap from './HashMap.js';

const test = new HashMap(); // or HashMap() if using a factory

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.length());
test.set('lion', 'silver');
test.set('ice cream', 'pistachio');
console.log(test.length());

test.set('moon', 'silver');

console.log(test.length());
// test.toString();
