// TODO: Include packages needed for this file
const { Square, Triangle, Circle } = require("./shapes");

// TODO: Write test for Triangle, Circle, and Square classes using jest
//* each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

describe("Shapes", () => {
  // TODO: Write the triangle test
  describe("Triangle", () => {
    it("Should return a string for the Triangle SVG file with the given shape color.", () => {
      const shape1 = new Triangle();
      expect(shape1.render()).toEqual(
        `<svg><polygon points="150, 18 244, 182 56, 182" fill="blue" /></svg>`
      );
    });
  });
  // TODO: Write the circle test
  describe("Circle", () => {
    it("Should return a string for the Triangle SVG file with the given shape color.", () => {
      const shape2 = new Circle();
      expect(shape2.render()).toEqual(
        `<svg><circle cx="150" cy="100" r="80" fill="blue" /></svg>`
      );
    });
  });
  // TODO: Write the square test
  describe("Square", () => {
    it("Should return a string for the Triangle SVG file with the given shape color.", () => {
      const shape3 = new Square();
      expect(shape3.render()).toEqual(
        `<svg><rect x="90" y="40" width="120" height="120" fill="blue" /></svg>`
      );
    });
  });
});
