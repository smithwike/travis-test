var expect = require('expect');
var algorithm = require('./../algorithm');

describe('Perform basic operations', ()=>{

	it('should add two numbers',()=>{
		var res = algorithm.add(1,3);
		expect(res).toBe(4);
	});

	it('should subtract two numbers',()=>{
		var res = algorithm.subtract(1,3);
		expect(res).toBe(-2);
	});

	it('should square the input number',()=>{
		var res = algorithm.square(3);
		expect(res).toBe(9);
	});

});