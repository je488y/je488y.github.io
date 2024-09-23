// Asegúrate de que el DOM esté completamente cargado
$(document).ready(function() {
    // Inicializa el carrusel de Bootstrap
    $('#carouselExampleIndicators').carousel({
        interval: 2000,
        wrap: true
    });

    $(document).ready(function() {
        function toggleVisibility() {
            $('.welcome-container').fadeIn(500).delay(8000).fadeOut(500);
        }
    
        // Llama a la función cada 10 segundos
        setInterval(toggleVisibility, 10000);
    });
    

    // Función para manejar el desvanecimiento de las imágenes
    function fadeCarouselSlide($nextSlide) {
        var $currentSlide = $('.carousel-item.active');
        $currentSlide.fadeOut(500, function() {
            $(this).removeClass('active');
            $nextSlide.addClass('active').fadeIn(500);
        });
    }

    // Manejo de eventos para el botón "Next"
    $('.carousel-control-next').click(function() {
        var $nextSlide = $('.carousel-item.active').next('.carousel-item');
        if ($nextSlide.length === 0) {
            $nextSlide = $('.carousel-item').first();
        }
        fadeCarouselSlide($nextSlide);
    });

    // Manejo de eventos para el botón "Previous"
    $('.carousel-control-prev').click(function() {
        var $prevSlide = $('.carousel-item.active').prev('.carousel-item');
        if ($prevSlide.length === 0) {
            $prevSlide = $('.carousel-item').last();
        }
        fadeCarouselSlide($prevSlide);
    });

    // Mostrar alerta con el nombre de la figura en la transición
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
        var nextSlide = $(e.relatedTarget);
        var figureName = nextSlide.data('name');
        alert('Mostrando: ' + figureName);
    });
});
