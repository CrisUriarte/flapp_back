const { z } = require("zod");

// Esquema de validación para un solo producto
const productDto = z.object({
  productId: z.string().min(1, "El productId es requerido"),
  price: z.number().positive("El precio debe ser un número positivo"),
  quantity: z.number().int().positive("La cantidad debe ser un entero positivo"),
  discount: z.number().min(0, "El descuento no puede ser negativo"),
});

// Esquema para validar un array de productos
const cartDto = z.array(productDto);

module.exports = { productDto, cartDto };
