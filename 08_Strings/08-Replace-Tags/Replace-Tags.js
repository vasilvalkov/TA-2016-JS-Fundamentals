function solve(args) {
    const text = args[0];
    let aTagOpen = "<a href=\"",
        aTagClose = "</a>",
        urlTagClose = "\">",
        startIndex = 0,
        parsedText = '';

    while (true) {
        let startAnchor = text.indexOf(aTagOpen, startIndex);
        if (startAnchor < 0) {
            break;
        }
        parsedText += text.substr(startIndex, startAnchor - startIndex);
        startIndex = startAnchor + aTagOpen.length;
        let endUrl = text.indexOf(urlTagClose, startIndex);
        let url = text.substr(startIndex, endUrl - startIndex);
        let endAnchor = text.indexOf(aTagClose, startIndex);
        startIndex = endUrl + urlTagClose.length;
        parsedText += '[';
        parsedText += text.substr(startIndex, endAnchor - startIndex);
        parsedText += '](';
        parsedText += url;
        parsedText += ')';
        startIndex = endAnchor + aTagClose.length;
    }
    parsedText += text.substr(startIndex, text.length - startIndex);

    console.log(parsedText);
}
solve(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);