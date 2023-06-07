# Proyecto Web 07
Sitio web que muestra información variada de un taller de servicio automotriz

Sitio web creado con:

- **HTML:** permite crear la estructura del sitio web mediante etiquetas
- **CSS:** para definir y crear la presentación de del sitio web
- **JavaScript:** añade características que permite establecer acciones interactivas al sitio web
- **Bootstrap:** utilizado para personalizar el sitio web y adaptarlo a la pantalla del dispositivo usado por el usuario
- **Node.js:** entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript
- **EJS:** es un motor de plantillas utilizado por Node.js. El motor de plantillas ayuda a crear una plantilla HTML con un código mínimo. Además, puede inyectar datos en la plantilla HTML en el lado del cliente y producir el HTML final.

Este sitio web fue creado y desarrollado usando la plataforma **Microsoft Visual Studio Code.** Además está adaptado para ejecutarse en dispositivos móviles.
El archivo **inicio.js** es el que contiene la página de inicio o la página principal del sitio web y consta de varias secciones:

1.	Un encabezado: donde se muestra el logotipo de la organización y algunos referencias de contacto
2.	Un menú de navegación: el cual contiene el menú de navegación del sitio web
3.	Una sección principal: el cual consta de cinco partes:
    - La primera parte consta de una presentación del negocio a través de un carrusel de imágenes
    - La segunda parte consta de un breve resumen que muestra las cualidades de la empresa
    - La tercera parte consta de breves referencias a los servicios que ofrece la empresa
    - La cuarta parte consta de un enlace que envía al usuario a un formulario donde él puede realizar sus comentarios y/o concretar una cita para un servicio a su automóvil
    - La quinta parte consta de referencias breves a noticias del mundo automotriz y un enlace que envía al usuario a explorar y leer el resto de su contenido
4.	Un pie de página: muestra la información de contacto del negocio

El menú principal consta de cinco opciones:

1.	Inicio: es la página principal del sitio web.
2.	Quienes somos: muestra información acerca de la organización, tales como la visión, misión y muestra un resumen de las cualidades del personal que integra la empresa
3.	Nuestros servicios: muestra de manera más descriptiva y amplia los servicios que ofrece la empresa
4.	Noticias: muestra noticias actualizadas del mundo automotriz con el fin de que el usuario conozca las últimas tendencias en servicio automotriz
5.	Contáctenos: presenta información variada que le permitirá al usuario conocer dónde está ubicada la empresa, el horario de servicio, un breve resumen de servicios adicionales y un formulario que le permitirá al usuario realizar sus comentarios acerca del servicio recibido dentro de las instalaciones del taller; así como la posibilidad de concretar citas para servicios al automóvil

Cada archivo que compone cada opción del menú está formado con plantillas creadas con EJS, las cuales incluyen, entre otras, las partes repetibles del sitio web y todas estas plantillas están almacenadas en la carpeta partials. Cada página que compone el sitio web son accesadas por medio de rutas definidas utilizando el framework Express.js

Para enviar la información del usuario a través del formulario de contacto a una cuenta de correo de destino se utiliza un módulo llamado Nodemailer, el cual, se apoya en API’s de Google con el fin de brindar soporte para autorización y autenticación con OAuth 2.0.

Nodemailer se instala usando npm y debe ser ejecutado bajo un servidor creado con Nodejs utilizando express para crearlo; así, se proporciona un conjunto sólido de funciones para el desarrollo de aplicaciones web y móviles

A continuación se presentan algunas imágenes del sitio web brevemente descrito anteriormente:

![taller_automotriz_01](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/427cfb88-f29c-4130-88e8-7513ceffc25f)
**-------------------------------------------------------------------------------------------------------------------------------------------------------------**
![taller_automotriz_02](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/47b50366-46b7-4c29-b495-5ed22d0b12a3)
**============================================================================================================================**
![taller_automotriz_03](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/b26b9a82-6bc3-40b1-9f92-63f65e70d115)
![taller_automotriz_04](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/c1cbdc0c-e718-413e-882b-ef838e30346b)
![taller_automotriz_05](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/53522a36-ac6d-41af-be87-d2948ad2849a)
![taller_automotriz_06](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/029948e4-c63f-42c0-8bb1-cb7e25ddc4ce)
![taller_automotriz_07](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/c6213a6d-c50b-4018-9b12-dd0a6133dcb4)
![taller_automotriz_08](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/047f5ba3-2b40-4f8a-b30c-bb27956df2b0)
![taller_automotriz_09](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/ed0bc696-5db0-4d4b-81df-1dcecac58a1d)
![taller_automotriz_10](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/81085070-8954-4211-ba09-32a41eb06802)
![taller_automotriz_11](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/c31bed5e-72b6-4606-8c8f-506e96f07cec)
![taller_automotriz_12](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/e52e3e0b-810e-44d9-9d2c-52b587e2bb6f)
![taller_automotriz_13](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/7707001a-3585-44b9-be21-1f8de1f2e301)
![taller_automotriz_14](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/bea8a537-1f74-4614-a34d-01ee696a81da)
![taller_automotriz_15](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/fa8b8ff4-bcff-4fa9-a11f-3753959646c3)
![taller_automotriz_16](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/2a8cb20b-b7e9-4bb8-a737-18538d30f045)
![taller_automotriz_17](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/1ac2ee29-1b29-4ea3-9911-231fb3314781)
![taller_automotriz_18](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/0cd558e0-2caf-4de9-9400-b20271db8d7f)
![taller_automotriz_19](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/56a83cc8-3daf-4dde-8d2c-9f04afea05f9)
![taller_automotriz_20](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/83c1b07a-14f5-4efc-aaca-3df1bc4b701e)
