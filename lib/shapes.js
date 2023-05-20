//* Each shape class should have  a render() method
// TODO: Create a shapes class with a render method
class Shape {
    constructor(color="blue") {
      this.color = color;
    }
  }

// ? Maybe use the shapes.prototype() method?
Shape.prototype.render = () => {
    throw new Error('Not implemented');

};

// TODO: Create a circle class that inherits from the shapes class.
class Circle extends Shape {
    constructor(radius="80", color) {
      super(color);
      this.radius = radius;
    }
  
    render() {
      return `<svg><circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" /></svg>`;
    }
  }
  
// TODO: Create a triangle class that inherits from the shapes class.
class Triangle extends Shape {
    constructor(base="182 56", height="18 244", color) {
      super(color);
      this.base = base;
      this.height = height;
    }
  
    render() {
      return `<svg><polygon points="150, ${this.height}, ${this.base}, 182" fill="${this.color}" /></svg>`;
    };
  }

// TODO: Create a square class that inherits from the shapes class.
class Square extends Shape {
    constructor(sideLength="120", color) {
      super(color);
      this.sideLength = sideLength;
    }
  
    render() {
      return `<svg><rect x="90" y="40" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" /></svg>`;
    }
  }
  

module.exports = {
    Shape,
    Circle,
    Triangle,
    Square,
};