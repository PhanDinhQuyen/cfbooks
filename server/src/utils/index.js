const handlerCatchError = (func) => (req, res, next) =>
  func(req, res, next).catch(next);

module.exports = { handlerCatchError };
