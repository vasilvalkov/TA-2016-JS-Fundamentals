function solve(args) {
    const url = args[0];
    let parsed = {
        protocol: '',
        server: '',
        resource: ''
    };
    parsed.protocol = url.substr(0, url.indexOf(':'));
    parsed.server = url.substr(url.indexOf('/') + 2, (url.indexOf('/', url.indexOf(':') + 3)) - (url.indexOf('/') + 2));
    parsed.resource = url.substr(url.indexOf('/', url.indexOf('.')));

    console.log('protocol: ' + parsed.protocol);
    console.log('server: ' + parsed.server);
    console.log('resource: ' + parsed.resource);
}
solve(['http://telerikacademy.com/Courses/Courses/Details/239']);