export class HttpError extends Error {
    public readonly status: number;
    public readonly statusText: string;
    public readonly body: object | undefined;

    constructor (status: number, statusText: string, body?: object) {
        super();
        this.status = status;
        this.statusText = statusText;
        this.body = body;
    }
}