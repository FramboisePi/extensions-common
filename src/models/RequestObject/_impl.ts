import { Request, Cookie } from '.'

const _global = global as any

_global.createCookie = function (cookie: Cookie): Cookie {
    return cookie
}

_global.createRequestObject = function (requestObject: Request): Request {
    return requestObject
}