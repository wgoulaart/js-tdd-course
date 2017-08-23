import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', function() {
  // Smoke test
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum 2 numbers', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equals(4);
    });
  });

  describe('Sub 2 numbers', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6,2)).to.be.equals(4);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6,10)).to.be.equals(-4);
    });
  });

  describe('Multiply 2 numbers', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(mult(2,2)).to.be.equals(4);
    });
  });

  describe('Divided 2 numbers', () => {
    it('should return 5 when `div(10,2)`', () => {
      expect(div(10,2)).to.be.equals(5);
    });

    it('should return `Não é possível divisão por zero!` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });

});
