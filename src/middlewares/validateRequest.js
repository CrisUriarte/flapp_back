const validateRequest = (schema) => (req, res, next) => {
    try {
        console.log('validando', req.body)
      schema.parse(req.body);
      next(); // ✅ Si la validación es correcta, sigue al controlador
    } catch (error) {
      res.status(400).json({ 
        success: false,
        status: 400,
        message: "Error de validación",
        errors: error.errors 
      });
    }
  };
  
  module.exports = {
    validateRequest
  }
  