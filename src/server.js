const http = require('http');
const htmlHandler = require('./htmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    'GET': {
        '/': htmlHandler.getIndex,
        '/style.css': htmlHandler.getCSS,

    },
    'HEAD': {

    }
};

const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);

    if (!urlStruct[request.method]) {
        urlStruct['HEAD'].notFound(request, response);
    };

    const methodHandlers = urlStruct[request.mehtod];
    const handlerFunc = urlStruct[parsedUrl.pathname];
    if (handlerFunc) {
        handlerFunc(request, response);
    }
    else {
        urlStruct[request.method].notFound(request, response);
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1: ${port}`);
});
