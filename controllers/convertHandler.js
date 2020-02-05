/*
*
*
*       Complete the handler logic below
*       
*       
*/



function ConvertHandler() {

  
  
  
  
  
  this.getNum = function(input) {
    
    var index = input.search(/[a-z]/i);
    var result = index < 0 ? input : index === 0 ? '1' : input.slice(0, index);
  
    if (/(\d+\.\d+\/\d+)/.test(result)) {
      result = eval(result);  
    }
    
    if (isNaN(result)) {
      return 'invalid number'
    } 
      
    return /(\.\d{6,})/.test(result) ? result.toFixed(5) : result;      
  };

  
  
  
  
  
  
  
  
  
  
  
  this.getUnit = function(input) {
    var result;
    
    if (!!input.match(/[a-z]+/i)) {
      result = input.match(/[a-z]+/i).toString().toLowerCase();
    }
    
    if (this.getReturnUnit(result) === undefined) {
      return 'invalid unit'
    } 
    
    return result;
  };

  
  
  
  
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch(initUnit) {
		case 'mi':
			result = 'km'
			break;
		case 'km':
			result = 'mi'
			break;
		case 'lbs':
			result = 'kg'
			break;
		case 'kg':
			result = 'lbs'
			break;
		case 'gal':
			result = 'l'
			break;
		case 'l':
			result = 'gal'
			break;
	}
    
    return result;
  };

  
  
  
  
  
  this.spellOutUnit = function(unit) {
    
    let unitText = {
      mi: 'miles', 
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms',
      gal: 'gallons',
      l: 'liters'
    };

    let result = unitText[unit];
    
    return result;
  };

  
  
  
  
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    var result;
    
    switch(initUnit) {
		case 'mi':
			result = initNum * miToKm;
			break;

		case 'km':
			result = initNum / miToKm;
			break;

		case 'lbs':
			result = initNum * lbsToKg;
			break;

		case 'kg':
			result = initNum / lbsToKg;
			break;

		case 'gal':
			result = initNum * galToL;
			break;

		case 'l':
			result = initNum / galToL;
			break;		
	}

    // test if more than 6 decimal places
    // if true return toFixed(5)
    return /(\.\d{6,})/.test(result) ? Number(result.toFixed(5)) : Number(result);
  };
  

  
  
  
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    var initUnitText = this.spellOutUnit(initUnit);
    var returnUnitText = this.spellOutUnit(returnUnit);

    result = initNum + ' ' + initUnitText + ' converts to ' + returnNum + ' ' + returnUnitText;

    return result;
  };
  
}

module.exports = ConvertHandler;
