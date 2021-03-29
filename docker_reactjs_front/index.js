require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

/* configuration */
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

/* middleswares */
const publicPath  = path.join(__dirname, '.', 'build');
app.use(express.static(publicPath));
app.use(express.json());

/* start rhe server */
app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

/* start rhe server */
app.listen(app.get('port'), () => {
    console.log('Server is up!');
 });
