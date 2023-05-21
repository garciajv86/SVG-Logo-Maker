// TODO: Include packages needed for this file
const { Square, Triangle, Circle } = require("./shapes");

// TODO: Write test for Triangle, Circle, and Square classes using jest
//* each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

describe("Shapes", () => {
  // TODO: Write the triangle test
  describe("Triangle", () => {
    test("render() method should return SVG string with given color", () => {
      const triangle = new Triangle(56, 244, "blue");
      const svg = triangle.render();
      expect(svg).toContain("<svg");
      expect(svg).toContain('fill="blue"');
      expect(svg).toContain("<polygon");
    });
  });

  // TODO: Write the circle test
  describe("Circle", () => {
    test("render() method should return SVG string with given color", () => {
      const circle = new Circle(80, "blue");
      const svg = circle.render();
      expect(svg).toContain("<svg");
      expect(svg).toContain('fill="blue"');
      expect(svg).toContain("<circle");
    });
  });
  // TODO: Write the square test
  describe("Square", () => {
    test("render() method should return SVG string with given color", () => {
      const square = new Square(120, "green");
      const svg = square.render();
      expect(svg).toContain("<svg");
      expect(svg).toContain('fill="green"');
      expect(svg).toContain("<rect");
    });
  });
});
