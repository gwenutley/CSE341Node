const gwenRoute = (req, res, next) => {
    res.send('Gwen Utley');
};

const fabianRoute = (req, res, next) => {
    res.send('Fabian Martinez');
};

module.exports = {
    gwenRoute,
    fabianRoute
};