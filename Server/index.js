const app = require('./app');

const port = 3000;

app.listen(port,() => {
    console.log(`Assignment departed from http://localhost:${port}!`);
});
