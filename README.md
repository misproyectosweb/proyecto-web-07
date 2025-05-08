# Proyecto Web 07: taller de servicio automotriz

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

![01  inicio_00](https://github.com/user-attachments/assets/4b67b4ba-085e-42dd-8663-56f5552b6125)
**==========================================================================**
![01  inicio_01](https://github.com/user-attachments/assets/15aac4fb-b7f8-4a41-8032-c122ca31caa7)
**==========================================================================**
![01  inicio_02](https://github.com/user-attachments/assets/eb197405-bfc5-4613-a6d7-a4c16b2361e5)
**==========================================================================**
![01  inicio_03](https://github.com/user-attachments/assets/082e5121-bc3d-4085-8d62-080cf7342015)
**==========================================================================**
![01  inicio_04](https://github.com/user-attachments/assets/3ed55134-3e8c-4b36-8bbc-f65277f92c0f)
**==========================================================================**
![01  inicio_05](https://github.com/user-attachments/assets/54e0fb01-1870-4ba7-9ca3-7557dd22f569)
**==========================================================================**
![02  nosotros_01](https://github.com/user-attachments/assets/e69159d4-44cf-4c4a-b78d-26d48f8ebadb)
**==========================================================================**
![02  nosotros_02](https://github.com/user-attachments/assets/d6e9336e-eca6-433d-a235-d90d34bce997)
**==========================================================================**
![02  nosotros_03](https://github.com/user-attachments/assets/42bda2f3-0de4-4d45-99db-8545e69e19ed)
**==========================================================================**
![03  servicios_01](https://github.com/user-attachments/assets/ae170947-df8f-49a1-a8ad-fc7612b6f102)
**==========================================================================**
![03  servicios_02](https://github.com/user-attachments/assets/222e1e87-4212-4d00-873e-40416def7e49)
**==========================================================================**
![03  servicios_03](https://github.com/user-attachments/assets/16417cd5-eba2-41a0-a4d7-98e95128d6a2)
**==========================================================================**
![03  servicios_04](https://github.com/user-attachments/assets/d9d92955-41ff-4ce0-9cc7-a7dc27b9ad36)
**==========================================================================**
![04  noticias_01](https://github.com/user-attachments/assets/7f310466-ab48-4be4-bdc0-3194d600b5ae)
**==========================================================================**
![04  noticias_02](https://github.com/user-attachments/assets/632895cf-9531-49cb-b36b-7ec07ef61fca)
**==========================================================================**
![04  noticias_03](https://github.com/user-attachments/assets/dea13fc6-5a39-4894-ba63-894c1096896d)
**==========================================================================**
![05  contacto_01](https://github.com/user-attachments/assets/21df9cf7-b56e-49a7-83c0-89912bbfde78)
**==========================================================================**
![05  contacto_02](https://github.com/user-attachments/assets/dd645ed4-fa2a-4fb2-b032-5828d512a048)
**==========================================================================**
![05  contacto_03](https://github.com/user-attachments/assets/085ff172-d594-4f74-8348-138a4524f743)
**==========================================================================**
![05  contacto_04](https://github.com/user-attachments/assets/d6507bbe-37e5-4a72-bfa8-5022c701921d)
**==========================================================================**
![05  contacto_05](https://github.com/user-attachments/assets/70ab9284-4aa0-4299-885d-d776dc3683c1)
**==========================================================================**
![05  contacto_08](https://github.com/user-attachments/assets/33a0a5de-84ef-462f-a6af-db80631e2917)
**==========================================================================**
![05  contacto_09](https://github.com/user-attachments/assets/dd5bf5b0-23c6-45c9-889a-24e063a1c752)
**==========================================================================**
![05  contacto_10](https://github.com/user-attachments/assets/8b875cd0-3592-42a0-93bf-b188e0dbcd66)
