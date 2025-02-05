--Recibir carrito
recibe info, pasa por dto para confirmar la data que envian.

--Paginacion
Enviamos 10 primeros productos para armar el front y elegir productos.
luego al ir cambiando pagina, enviar en el post el numero de pagina, para hacer el skip en la url y traer los sigueintes productos.


Para l boton generar carrito existe un endpoint de la api de carritos. con esta generamos carritos al azar.

Trae el total de productos y guardamos en un array. armar objeto con id,nombre,precio por unidad, decuneto, cantidad solicitada, stock obtenido, rating, stock real.