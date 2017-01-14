function solve(args) {
    //const [rows, cols] = args[0].split('').map(Number);
    const arr = args[0].split(' ').map(Number);
    const rows = arr[0];
    const cols = arr[1];

    const playerCoords = args[1].split(/[; ]/g).map(Number);
    let trollW = {
        row: playerCoords[0],
        col: playerCoords[1],
        trapped: false
    };
    let trollN = {
        row: playerCoords[2],
        col: playerCoords[3],
        trapped: false
    };
    let princess = {
        row: playerCoords[4],
        col: playerCoords[5],
        trapped: false
    };
    // Make matrix
    let traps = [];
    for (let i = 0; i < rows; i += 1) {
        let row = new Array(cols);
        row.fill(false);
        traps.push(row);
    }
    // Clear redundant args
    args.shift();
    args.shift();
    // Read commands
    args.forEach(function (command) {
        if (command === 'lay trap') {
            traps[princess.row][princess.col] = true;
        } else {
            let spl = command.split(' ');
            let unitToMove;
            if (spl[1][0] === 'L') { // princess is moving
                unitToMove = princess;
            } else if (spl[1][0] === 'W') { // trollW is moving
                unitToMove = trollW;
            } else if (spl[1][0] === 'N') { // trollN is moving
                unitToMove = trollN;
            }
            // If troll is trapped, read next command
            if (unitToMove.trapped) {
                return;
            }
            // Move unit
            if (spl[2] === 'u' && unitToMove.row > 0) {
                unitToMove.row -= 1;
            } else if (spl[2] === 'd' && unitToMove.row < rows - 1) {
                unitToMove.row += 1;
            } else if (spl[2] === 'l' && unitToMove.col > 0) {
                unitToMove.col -= 1;
            } else if (spl[2] === 'r' && unitToMove.col < cols - 1) {
                unitToMove.col += 1;
            }
            // Rescue troll and destroy trap
            if (trollW.row === trollN.row && trollW.col === trollN.col) {
                trollW.trapped = false;
                trollN.trapped = false;
                traps[trollW.row][trollW.col] = false;
            } // Chech if troll is trapped
            else if (spl[1][0] !== 'L' && traps[unitToMove.row][unitToMove.col]) {
                unitToMove.trapped = true;
            }
            // Chech whether princess is saved or caught
            if (princess.row === rows - 1 && princess.col === cols - 1) {
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            } else if (trollW.trapped && trollN.trapped) {
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            } else if (Math.abs(princess.row - trollW.row) < 2 && Math.abs(princess.col - trollW.col) < 2) {
                console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
            } else if (Math.abs(princess.row - trollN.row) < 2 && Math.abs(princess.col - trollN.col) < 2) {
                console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
            }
        }

    });
}
solve([
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]);
solve([
    '7 7',
    '0 1;0 2;3 3',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup l',
    'mv Wboup l',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'mv Nbslbub l',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r'
]);