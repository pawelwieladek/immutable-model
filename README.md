```js
import Model from 'immutable-model';

class Point extends Model {
  constructor({ x, y }) {
    super();
    this.createProperties({ x, y });
  }

  toString() {
    return `x: ${this.x} y: ${this.y}`;
  }
}

class Color extends Point {
  constructor({ x, y, z }) {
    super({ x, y });
    this.createProperty('z', z);
  }

  toString() {
    return `${super.toString()} z: ${this.z}`;
  }
}

let p = new Point({ x: 1, y: 2 });

let c = new Color({ x: 3, y: 4, z: 5 });

console.log(p.x);       // 1
console.log(p.y);       // 2

console.log(c.x);       // 3
console.log(c.y);       // 4
console.log(c.z);       // 5

console.log(`${p}`);    // x: 1 y: 2
console.log(`${c}`);    // x: 3 y: 4 z: 5

p.x = 0;                // Cannot modify immutable property 'x'
```
