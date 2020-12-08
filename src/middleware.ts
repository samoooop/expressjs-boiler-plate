import express, { Handler } from 'express';
import Joi from 'joi';

import { HttpError } from './error';

export const handlerFactory = <REQ, RES>(
    handler: RequestHandler<REQ, RES>,
    schema: Joi.Schema,
) => {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const query = req.query;
            const body = req.body;
            const request = req.method === 'POST' ? body : query;
            const { error, value } = schema.validate(request);
            if (error) {
                throw new HttpError(400, 'BAD_REQUEST');
            }
            const result = await handler(request, req);
            res.status(200).json(result);
            return;
        } catch (e) {
            if (e instanceof HttpError) {
                res.status(e.status);
                res.statusMessage = e.statusText;
                res.json(e.body);
                return;
            } else {
                res.status(500).end();
            }
        }
    };
};
