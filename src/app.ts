import express from 'express';


export const app = express();

app.use('/', (req, res) => {
    res.end('Hello World');
});
