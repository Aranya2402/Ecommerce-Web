class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor)// error enga generate aguthu error related details ah tharum
    }
}

module.exports = ErrorHandler;