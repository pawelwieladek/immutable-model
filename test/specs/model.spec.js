import Model from '../../src/model';

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

describe('Model', function() {
    describe('should create property', function() {
        beforeEach(function() {
            this.shape = new Shape(1, 2);
        });

        it('readable', function() {
            expect(this.shape.x).to.equal(1);
            expect(this.shape.y).to.equal(2);
        });

        it('not writable', function() {
            // given
            let assignX = () => {
                this.shape.x = 3;
            };
            let assignY = () => {
                this.shape.y = 4;
            };

            // then
            expect(assignX).to.throw(`Cannot modify immutable property 'x'`);
            expect(assignY).to.throw(`Cannot modify immutable property 'y'`);
        });

        it('accessible for methods', function() {
            expect(this.shape.toString()).to.equal('x: 1, y: 2');
        });
    });

    describe('should create properties', function() {
        beforeEach(function() {
            this.rectangle = new Rectangle(1, 2, 200, 100);
        });

        it('readable', function() {
            expect(this.rectangle.x).to.equal(1);
            expect(this.rectangle.y).to.equal(2);
            expect(this.rectangle.width).to.equal(200);
            expect(this.rectangle.height).to.equal(100);
        });

        it('not writable', function() {
            // given
            let assignX = () => {
                this.rectangle.x = 3;
            };
            let assignY = () => {
                this.rectangle.y = 4;
            };
            let assignWidth = () => {
                this.rectangle.width = 400;
            };
            let assignHeight = () => {
                this.rectangle.height = 300;
            };

            // then
            expect(assignX).to.throw(`Cannot modify immutable property 'x'`);
            expect(assignY).to.throw(`Cannot modify immutable property 'y'`);
            expect(assignWidth).to.throw(`Cannot modify immutable property 'width'`);
            expect(assignHeight).to.throw(`Cannot modify immutable property 'height'`);
        });

        it('accessible for methods', function() {
            expect(this.rectangle.toString()).to.equal('x: 1, y: 2, width: 200, height: 100');
        });
    });
});