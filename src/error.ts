import express from 'express';

export class HttpError extends Error {
    public readonly status: number;
    public readonly statusText: string;
    public readonly body: Record<string, unknown> | undefined;

    constructor(status: number, statusText: string, body?: Record<string, unknown>) {
        super();
        this.status = status;
        this.statusText = statusText;
        this.body = body;
    }
}

export const errorHandler = (e: any, res: express.Response) => {
    if (e instanceof HttpError) {
        res.status(e.status);
        res.statusMessage = e.statusText;
        res.json(e.body);
        return;
    } else {
        res.status(500).end();
    }
    return;
};
