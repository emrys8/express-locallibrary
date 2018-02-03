/**
 * @function error404
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next
 * an error 404 catcher middleware
 */

const error404 = function(req, res, next) {
    let error = new Error('Not Found');
    error.status = 404;
    next(error);
}

/**
 * @function errorHandler
 * @param {Object} err 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
const errorHandler = function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
}

exports.error404 = error404;
exports.errorHandler = errorHandler;