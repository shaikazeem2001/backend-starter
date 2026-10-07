/**
 * Request Body & Parameter Validation Middleware Helper
 */
const validateRequest = (schema) => (req, res, next) => {
  try {
    if (schema.body) {
      schema.body.parse(req.body);
    }
    if (schema.query) {
      schema.query.parse(req.query);
    }
    if (schema.params) {
      schema.params.parse(req.params);
    }
    next();
  } catch (error) {
    return res.status(400).json({
      message: 'Validation Error',
      errors: error.errors || error.message,
    });
  }
};

module.exports = { validateRequest };
