const httpError = require('http-errors');

module.exports = {
    notFound: (req, res, next) => {
        next(httpError(404, 'Resource not found'));
    },

    printStackTrace: (err, req, res, next) => {
        console.error(err.stack);
        console.error(err);
        next(err);
    },

    /* Pegar qualquer erro incondicionalmente */
    catchAll: (err, req, res, next) => {
        res.status(err.statusCode ?? 500);
        res.json({
            message: err.message,
            code: res.statusCode,
            error: true,
        });
    },
};
