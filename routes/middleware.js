const authorization = (req, res, next) => {
  if (req.headers['authorization']) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = {
  authorization,
};
