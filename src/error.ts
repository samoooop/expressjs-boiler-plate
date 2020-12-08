export class HttpError extends Error {
    public readonly status: number;
    public readonly statusText: string;
    public readonly body: Record<string, unknown> | undefined;

    constructor (status: number, statusText: string, body?: Record<string, unknown>) {
        super();
        this.status = status;
        this.statusText = statusText;
        this.body = body;
    }
}