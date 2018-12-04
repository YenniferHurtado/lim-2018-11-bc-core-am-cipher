# Cifrado César
# Style in Shoe

Style in shoe es una tienda física de zapatos y accesorios para mujeres de todo tipo de estilo.

![Style in Shoe](https://yferhurtado.github.io/lim-2018-11-bc-core-am-cipher/src)

Pensé primero en una página con la temática de una promoción de secundaria que deseaban tener como un club secreto de mensajería. 

Pero al conversar con una compañera, sobre muchas cosas, tuve la idea de hacerlo más útil. Fue entonces que pensé en una página de descuentos para una tienda en exclusiva(Style in Shoe) donde la marca se preocupara en fidelizar a sus clientas. 

Primero: Que la clienta que fuera recurrente pueda acceder a bonos de descuento proporcionado por la marca. 

La encargada de llevar el control de ventas, verificar quienes son las clientas más fieles, entonces en recompensa les brinda un regalo de descuento: Le envia un correo donde le dice a la clienta que gracias a sus compras constantes tiene un cupón de descuento que puede usar en cualquier de las tiendas físicas. En este correo se le envia el código de descuento, (cifrado) su número de clienta, (offset) junto al link de la pàgina.

Ahora para que la encargada pueda darle este código también debe usar la plataforma de la siguiente manera:

Coloca en el input "GENERAR CÓDIGO DE DESCUENTO (Sólo administración)" que viene hacer el cifrado. Y coloca las siglas siguientes:
VEINTE, TREINTA, CUARENTA, CINCUENTA.

Al ser cifrado estas palabras, brinda un código XXXX, con el offset (número) de la clienta. De esta manera la clienta al recibir su código y descifrarlo podrá ver el monto en descuento. Y cuando ingrese al link y vea el botón de "GENERAR DESCUENTO SOLO ADMINISTRACIÓN" no pueda generar un código válido, al no saber que las palabras encriptadas son estás: VEINTE, TREINTA, CUARENTA, CINCUENTA. Y que sin un número de offset coincidente no podría validarlo.


Pasando a explicar la experiencia de la clienta:
 Una vez la clienta reciba el correo con el link, tiene que ingresar el código que se le envió, su número de clienta (offset) y pulsar el botón "RECIBIR REGALO" que viene hacer el descifrado. Y al ser descifrado el código le indica:

Tienes un DIEZ, VEINTE, TREINTA, CUARENTA, CINCUENTA % de descuento.

Pienso que es algo útil tanto para el consumidor como para la marca, uno obtiene mejores precios, y por la otra parte clientes fidelizados. 

En el diseño pensé en algo femenino ya que las usuarios lo son, y tienen un perfil de compras y accesorios recurrentes, entonces les gusta estar a la moda. Implemente colores pasteles e imágenes de fondo acorde al perfil.


¿Quienes son los principales usuarios del producto?
Las clientas y el administrador o encargado de ventas de la tienda.

¿Cuáles son los objetivos de estos usuarios en relación con tu producto.
Tener bonos de descuentos gracias al consumo de sus productos favoritos.

¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

Resuelve sus problemas al crear una conexión con una tienda que los premia, con los productos que desean, sin la necesidad de buscar más. Y a la tienda a fidelizar a sus clientes para que no tanto sólo se queden en una sola compra y se olviden de la tienda, sino que al ir recurrentemente permanezca recompensadas por comprar más.

