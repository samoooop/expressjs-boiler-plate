import express from 'express';
import cors from 'cors';

import { router as rootRouter } from './router';

export const app = express();

// add middlewares
app.use(express.json()); // parse json
app.use(cors({
    origin: '*', // change this in production!
}));

app.use(rootRouter);

app.use('/echo', (req, res) => {
    res.status(200).json({
        'query': req.query,
        'body': req.body,
        'method': req.method,
    });
});

