type RequestHandler<REQ, RES> = (request: REQ, rawRequest: import('express').Request) => Promise<RES>;
