const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).json({ message: 'No token, access denied' });
    }
    
    const token = authHeader.replace('Bearer ', '').trim();
    if (!token) {
      return res.status(401).json({ message: 'No token, access denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log('JWT Error:', err.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};