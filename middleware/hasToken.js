module.exports = (req, res, next) => {
    
    if (req.headers.authorization != '123token987') {
        return res.json({message: 'unauthorized'});
    }

    next();
}