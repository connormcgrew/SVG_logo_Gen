const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    test('renders correctly', () => {
        const circle = new Circle(5);
        var color = "red";
        circle.setColor(color);
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
});

describe('Square', () => {
    test('renders correctly', () => {
        const square = new Square(5);
        var color = 'green';
        square.setColor(color);
        expect(square.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const triangle = new Triangle(5);
        var color = 'blue';
        triangle.setColor(color);
        expect(triangle.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
    });
});
