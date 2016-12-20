function solve(args) {
    var hexNumber = args[0],
        len = hexNumber.length,
        val = 1,
        decNumber = 0,
        power = 0;

    for (var i = len - 1; i >= 0; i -= 1){
        switch (hexNumber[i]) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                val = +hexNumber[i]; break;
            case 'A': val = 10; break;
            case 'B': val = 11; break;
            case 'C': val = 12; break;
            case 'D': val = 13; break;
            case 'E': val = 14; break;
            case 'F': val = 15; break;
            default: break;
        }

        decNumber += val * Math.pow(16, power++)
    }

    console.log(decNumber.toFixed(0));
}