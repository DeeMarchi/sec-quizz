const httpError = require('http-errors');

module.exports = {
    notFound: (req, res, next) => {
        next(httpError.NotFound('Resource not found'));
    },

    printStackTrace: (err, req, res, next) => {
        console.error(err);
        next(err);
    },

    catchNotFound: (err, req, res, next) => {
        if (err instanceof httpError.HttpError && err.statusCode === 404) {
            res.status(404);
            return res.render('notFound');
        }
        next(err);
    },

    /* Pegar qualquer erro incondicionalmente */
    catchAll: (err, req, res, next) => {
        res.render('error');
    },
};
