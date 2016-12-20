function solve(args) {
    var number = +args[0],
		hundreds = Math.floor((number / 100) % 10),
	    tens = Math.floor((number / 10) % 10),
        digits = Math.floor(number % 10),
        len = args[0].length,
        hun = '',
	    ten = '',
	    dig = '';

    if (len === 1){
		switch (digits) {
			case 0: dig = 'Zero'; break;
			case 1: dig = 'One'; break;
			case 2: dig = 'Two'; break;
			case 3: dig = 'Three'; break;
			case 4: dig = 'Four'; break;
			case 5: dig = 'Five'; break;
			case 6: dig = 'Six'; break;
			case 7: dig = 'Seven'; break;
			case 8: dig = 'Eight'; break;
			case 9: dig = 'Nine'; break;
			default: dig = ''; break;
		}
		return dig;
	}
    if (len === 2){
		if (tens == 1) {
			switch (digits) {
				case 0: ten = 'Ten'; break;
				case 1: ten = 'Eleven'; break;
				case 2: ten = 'Twelve'; break;
				case 3: ten = 'Thirteen'; break;
				case 4: ten = 'Fourteen'; break;
				case 5: ten = 'Fifteen'; break;
				case 6: ten = 'Sixteen'; break;
				case 7: ten = 'Seventeen'; break;
				case 8: ten = 'Eighteen'; break;
				case 9: ten = 'Nineteen'; break;
				default: ten = ''; break;
			}
		}
		else {
			switch (tens) {	
				case 2: ten = 'Twenty '; break;
				case 3: ten = 'Thirty '; break;
				case 4: ten = 'Forty '; break;
				case 5: ten = 'Fifty '; break;
				case 6: ten = 'Sixty '; break;
				case 7: ten = 'Seventy '; break;
				case 8: ten = 'Eighty '; break;
				case 9: ten = 'Ninety '; break;
				default: ten = ''; break;
			}
			switch (digits) {
				case 1: dig = 'one'; break;
				case 2: dig = 'two'; break;
				case 3: dig = 'three'; break;
				case 4: dig = 'four'; break;
				case 5: dig = 'five'; break;
				case 6: dig = 'six'; break;
				case 7: dig = 'seven'; break;
				case 8: dig = 'eight'; break;
				case 9: dig = 'nine'; break;
				default: dig = ''; break;
			}	
		}
        return ten + dig;
	}
    if (len === 3){
		switch (hundreds) {				
			case 1: hun = 'One hundred '; break;
			case 2: hun = 'Two hundred '; break;
			case 3: hun = 'Three hundred '; break;
			case 4: hun = 'Four hundred '; break;
			case 5: hun = 'Five hundred '; break;
			case 6: hun = 'Six hundred '; break;
			case 7: hun = 'Seven hundred '; break;
			case 8: hun = 'Eight hundred '; break;
			case 9: hun = 'Nine hundred '; break;
			default: hun = ''; break;
		}
		if (tens === 1) {
			switch (digits) {
				case 0: ten = 'and ten'; break;
				case 1: ten = 'and eleven'; break;
				case 2: ten = 'and twelve'; break;
				case 3: ten = 'and thirteen'; break;
				case 4: ten = 'and fourteen'; break;
				case 5: ten = 'and fifteen'; break;
				case 6: ten = 'and sixteen'; break;
				case 7: ten = 'and seventeen'; break;
				case 8: ten = 'and eighteen'; break;
				case 9: ten = 'and nineteen'; break;
				default: ten = ''; break;
			}
		}
		else {
			switch (tens) {			
				case 0: 
					if (digits === 0)
						ten = '';
					else 
						ten = 'and '; 
				break;				
				case 2: ten = 'and twenty '; break;
				case 3: ten = 'and thirty '; break;
				case 4: ten = 'and forty '; break;
				case 5: ten = 'and fifty '; break;
				case 6: ten = 'and sixty '; break;
				case 7: ten = 'and seventy '; break;
				case 8: ten = 'and eighty '; break;
				case 9: ten = 'and ninety '; break;
				default: ten = ''; break;
			}
			switch (digits) {
				case 1: dig = 'one'; break;
				case 2: dig = 'two'; break;
				case 3: dig = 'three'; break;
				case 4: dig = 'four'; break;
				case 5: dig = 'five'; break;
				case 6: dig = 'six'; break;
				case 7: dig = 'seven'; break;
				case 8: dig = 'eight'; break;
				case 9: dig = 'nine'; break;
				default: dig = ''; break;
		    }	
		}
		return hun + ten + dig;
	}    
}