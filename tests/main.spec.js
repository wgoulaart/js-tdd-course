var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function () {
  // Smoke test
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  })

  describe('Sum 2 numbers', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2, 2)).to.be.equals(4);
    });
  });

  describe('Sub 2 numbers', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(calc.sub(6, 2)).to.be.equals(4);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(calc.sub(6, 10)).to.be.equals(-4);
    });
  });

  describe('Multiply 2 numbers', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(calc.mult(2, 2)).to.be.equals(4);
    });
  });

  describe('Divided 2 numbers', () => {
    it('should return 5 when `div(10,2)`', () => {
      expect(calc.div(10, 2)).to.be.equals(5);
    });

    it('should return `Não é possivel divisão por zero!`', () => {
      expect(calc.div(4, 0)).to.be.equals('Não é possivel divisão por zero!');
    });
  });

});
