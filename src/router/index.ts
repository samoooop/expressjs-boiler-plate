import express from 'express';
import { handlerFactory } from '../middleware';
import Joi from 'joi';
import { HttpError } from '../error';

export const router = express.Router();

const echoSchema = Joi.object({
    message: Joi.string().allow('').required(),
});

const echoHandler: RequestHandler<{ message: string }, { echo: string }> = async (body) => {
    return {
        echo: `You says: "${body.message}".`,
    }
}

const echoHandler2: RequestHandler<{ message: string }, { echo: string }> = async () => {
    throw new HttpError(501, 'NOT_IMPLEMENTED', { message: "sorry, not implemented." });
}

router.get('/echo', handlerFactory(echoHandler, echoSchema));
router.get('/echo-2', handlerFactory(echoHandler2, Joi.any()));
