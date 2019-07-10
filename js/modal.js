$('#hide-shipment-details').on('click', function(){
    $('#shipment-details').show().fadeOut('fast');

    $(this).hide().fadeIn('slow').replaceWith('<a href="index.html" type="button" class="btn btn-success"><i class="fal fa-home fa-2x"></i> GO HOME</a>')
});

// when user clicks outside
$(window).on('click', function(e){
    if(e.target === $('#centralModalSuccess')){
        open("https://www.google.es");
    }
});