const http = require('http');
const htmlHandler = require('./htmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    'GET': {
        '/': htmlHandler.getIndex,
        '/style.css': htmlHandler.getCSS,
        // /default -> all other 404
        // /getusers
        // /notReal
    },
    'HEAD': {
        // /getusers
        // /notReal

    },
    'POST':{
        // /addUser

    }
};

// http.createServer(onRequest).listen(port, () => {
//     console.log(`Listening on 127.0.0.1: ${port}`);
// });
