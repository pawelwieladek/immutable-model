Immutable Model
===============

Extend ```Model``` class to provide immutability to your properties.

## API

### createProperty(key: String, value: Any)

Creates immutable property. You can get the ```key``` property, but cannot set.

### createProperties(object: Object)

Create immutable properties based on the provides object.

## Example

```js
import Model from 'immutable-model';

class Shape extends Model {
    constructor(x, y) {
        super();
        this.createProperty('x', x);
        this.createProperty('y', y);
    }

    toString() {
        return `x: ${this.x}, y: ${this.y}`;
    }
}

class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.createProperties({
            width,
            height
        });
    }

    toString() {
        return `${super.toString()}, width: ${this.width}, height: ${this.height}`;
    }
}

let shape = new Shape(1, 2);

let rectangle = new Rectangle(1, 2, 200, 100);

console.log(shape.x);               // 1
console.log(shape.y);               // 2

console.log(rectangle.x);           // 3
console.log(rectangle.y);           // 4
console.log(rectangle.width);       // 5
console.log(rectangle.height);      // 5

console.log(`${shape}`);            // x: 1, y: 2
console.log(`${rectangle}`);        // x: 3, y: 4, width: 200, height: 100

shape.x = 0;                        // throws Error: Cannot modify immutable property 'x'
rectangle.width = 500;              // throws Error: Cannot modify immutable property 'width'
```
