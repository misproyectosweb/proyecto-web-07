
// Código para cambiar el texto de los botones cuando al desplegar como ocultar los artículos en la sección de noticias
$(document).ready(function ()
{
    $(function ()
    {
        $(".btnTexto").bind("click", function ()
        {
            $(this).text($(this).text() === "Ocultar artículo" ? "Mostrar artículo" : "Ocultar artículo");
            $(this).prev().slideToggle();
        });
    });
});