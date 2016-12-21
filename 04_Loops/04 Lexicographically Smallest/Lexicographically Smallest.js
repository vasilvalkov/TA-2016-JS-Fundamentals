function solve() {
    var smallestDoc = 'document',
        smallestWin = 'window',
        smallestNav = 'navigator';

    for (var property in document) {
        if (property.toLowerCase() < smallestDoc.toLowerCase()) {
            smallestDoc = property;
        }
    }
    for (var property in window) {
        if (property.toLowerCase() < smallestWin.toLowerCase()) {
            smallestWin = property;
        }
    }
    for (var property in navigator) {
        if (property.toLowerCase() < smallestNav.toLowerCase()) {
            smallestNav = property;
        }
    }

    document.getElementById('doc').innerHTML = smallestDoc;    
    document.getElementById('win').innerHTML = smallestWin;    
    document.getElementById('nav').innerHTML = smallestNav;

    console.log('Lexicographically smallest property in the Document object is: ' + smallestDoc);
    console.log('Lexicographically smallest property in the Window object is: ' + smallestWin);
    console.log('Lexicographically smallest property in the Navigator object is: ' + smallestNav);

}
solve();