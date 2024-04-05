# Proyecto Web 07
Sitio web que muestra información variada de un taller de servicio automotriz

Sitio web creado con las siguientes herramientas a nivel de front-end y back-end:

- **HTML:** permite crear la estructura del sitio web mediante etiquetas
- **CSS:** para definir y crear la presentación de del sitio web
- **JavaScript:** añade características que permite establecer acciones interactivas al sitio web
- **Bootstrap:** utilizado para personalizar el sitio web y adaptarlo a la pantalla del dispositivo usado por el usuario
- **Node.js:** entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript
- **EJS:** es un motor de plantillas utilizado por Node.js. El motor de plantillas ayuda a crear una plantilla HTML con un código mínimo. Además, puede inyectar datos en la plantilla HTML en el lado del cliente y producir el HTML final.

Este sitio web fue creado y desarrollado usando la plataforma **Microsoft Visual Studio Code.** Además está adaptado para ejecutarse en dispositivos móviles.
El archivo **inicio.js** es el que contiene la página de inicio o la página principal del sitio web y consta de cuatro secciones:

- **Un encabezado:** donde se muestra el logotipo de la organización y algunos datos de referencia para contacto
- **Un menú de navegación:** el cual contiene el menú de opciones de servicios y otras características de la empresa
- **Una sección principal:** el cual consta de cinco partes:
    - La primera parte consta de una presentación del negocio a través de un carrusel de imágenes
    - La segunda parte consta de un breve resumen que muestra las cualidades de la empresa
    - La tercera parte consta de breves referencias a los servicios que ofrece la empresa
    - La cuarta parte consta de un enlace que envía al usuario a un formulario donde él puede realizar sus comentarios y/o concretar una cita para un servicio a su automóvil
    - La quinta parte consta de referencias breves a noticias del mundo automotriz y un enlace que envía al usuario a explorar y leer el resto de su contenido
- **Un pie de página:** muestra la información de contacto del negocio

El menú principal consta de cinco opciones:

- **Inicio:** es la página principal del sitio web.
- **Quienes somos:** muestra información acerca de la organización, tal como la visión, la misión y muestra además breves datos acerca del personal que trabaja en la empresa y el área de servicio donde labora
- **Nuestros servicios:** muestra de manera más descriptiva y amplia los servicios que ofrece la empresa
- **Noticias:** muestra noticias actualizadas del mundo automotriz con el fin de que el usuario conozca las últimas tendencias en este tipo de servicio
- **Contáctenos:** presenta información variada que le permitirá al usuario conocer dónde está ubicada la empresa, el horario de servicio, un breve resumen de servicios adicionales y un formulario que le permitirá al usuario realizar sus comentarios acerca del servicio recibido dentro de las instalaciones del taller; así como la posibilidad de concretar citas para servicios al automóvil

Cada archivo que compone cada opción del menú está formado con plantillas creadas con **EJS,** las cuales incluyen, entre otras, las partes repetibles del sitio web y todas estas plantillas están almacenadas en la carpeta partials. Cada página que compone el sitio web son accesadas por medio de rutas definidas utilizando el framework **Express.js**

Para enviar la información del usuario a través del formulario de contacto a una cuenta de correo de destino se utiliza un módulo llamado **Nodemailer,** el cual, se apoya en API’s de Google con el fin de brindar soporte para autorización y autenticación con **OAuth 2.0.**

Nodemailer se instala usando **npm** y debe ser ejecutado bajo un servidor creado con Nodejs utilizando express para crearlo; así, se proporciona un conjunto sólido de funciones para el desarrollo de aplicaciones web y móviles

A continuación se presentan algunas imágenes del sitio web brevemente descrito anteriormente:

![01  inicio_1](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/cbc33530-fab2-478c-9229-e59dab02348c)
**==========================================================================**
![01  inicio_2](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/0d061f27-5ecb-40ca-b47e-763c7abf1a0a)
**==========================================================================**
![01  inicio_3](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/6cf9419a-f857-4973-872b-118100792f7d)
**==========================================================================**
![01  inicio_4](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/b58596ec-8e33-4f08-8d06-2b8f0b84914f)
**==========================================================================**
![01  inicio_5](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/52d40767-278c-4007-8cb8-e43abee20aed)
**==========================================================================**
![01  inicio_6](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/62516025-7ef1-4231-a768-cddc2dd5d770)
**==========================================================================**
![01  inicio_7](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/00c944f3-d3a2-47d8-9ff3-a483c3426703)
**==========================================================================**
![02  nosotros_1](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/788427e7-b26b-4494-b1ac-ad91327c7aeb)
**==========================================================================**
![02  nosotros_2](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/afb5b5c5-5c93-4e51-9921-962f64798e16)
**==========================================================================**
![02  nosotros_3](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/fb6525b9-8b56-40ab-8822-6b86bbf77fd7)
**==========================================================================**
![02  nosotros_4](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/f7cdc059-ab24-4b94-821e-4a382de88d28)
**==========================================================================**
![03  servicios_1](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/4de55df7-5ace-40e9-bf1f-cbcec924080a)
**==========================================================================**
![03  servicios_2](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/9269b702-3c01-40fc-8e23-9689e8cfdd8e)
**==========================================================================**
![03  servicios_3](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/e6eabc12-6495-487a-a39d-3bcf47c518e5)
**==========================================================================**
![03  servicios_4](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/e1240878-d055-435a-a44b-5c5b342c3fc0)
**==========================================================================**
![03  servicios_5](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/ffd1403b-2df3-45f8-a79c-d72e37e214ce)
**==========================================================================**
![04  noticias_1](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/95a345b4-28c2-41d4-bd95-8df7051cff5d)
**==========================================================================**
![04  noticias_2](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/18559f13-ea1a-4e7d-9f7f-47c1cd045136)
**==========================================================================**
![04  noticias_3](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/a7229ef7-893f-4340-a374-02e1011691e1)
**==========================================================================**
![04  noticias_4](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/1a1ebabb-6957-4e5a-a649-a6bd81d5ca64)
**==========================================================================**
![05  contacto_1](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/87eabe30-b820-41db-a9be-208a88a68a9c)
**==========================================================================**
![05  contacto_2](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/7463cd1c-dbaf-4b2d-9f4f-e807db860809)
**==========================================================================**
![05  contacto_3](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/7fc2cfed-7187-4da1-b209-1b3b7158e53b)
**==========================================================================**
![05  contacto_4](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/e67ad00a-0015-4f60-8a58-c223a87e8e68)
**==========================================================================**
![05  contacto_5](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/0a4dbc1a-2808-49e3-bdd5-de2f5c42c0ea)
**==========================================================================**
![05  contacto_6](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/68de4820-8d41-4fff-a321-64874c41be34)
**==========================================================================**
![05  contacto_7](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/7d19e6b7-6104-4106-a0eb-22a95abd1ca1)
**==========================================================================**
![05  contacto_8](https://github.com/misproyectosweb/proyecto-web-07/assets/98922137/dbadd577-b69b-42a1-a8ab-b813bd7ead8c)
**==========================================================================**
