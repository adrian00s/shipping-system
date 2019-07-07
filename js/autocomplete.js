// Autocomplete script
var provincias = ['','', 'Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];

$('#from-autocomplete').mdbAutocomplete({
    inputFocus: '2px solid #F1F322',
    inputFocusShadow: '0 1px 0 0 #A4B702',
    inputBlur: '2px solid red',
    inputBlurShadow: '0 1px 0 0 darkred'
});

$('#to-autocomplete').mdbAutocomplete({
    inputFocus: '2px solid #F1F322',
    inputFocusShadow: '0 1px 0 0 #A4B702',
    inputBlur: '2px solid red',
    inputBlurShadow: '0 1px 0 0 darkred',
});


var getFrom = document.getElementById('from-autocomplete');
var getTo = document.getElementById('to-autocomplete');
var submit = document.getElementById('form__submit');


$('#from-autocomplete, #to-autocomplete').autocomplete({
    source: provincias
});

function getVal(){

    $(submit).on('click', false);

    if(provincias.indexOf(this.value) < 0){
        $(this).mdbAutocomplete({
            inputFocus: '2px solid #F1F322',
            inputFocusShadow: '0 1px 0 0 #A4B702',
            inputBlur: '2px solid red',
            inputBlurShadow: '0 1px 0 0 darkred',
        });
    }else if(getFrom.value === getTo.value){
        $(this).mdbAutocomplete({
            inputFocus: '2px solid #F1F322',
            inputFocusShadow: '0 1px 0 0 #A4B702',
            inputBlur: '2px solid red',
            inputBlurShadow: '0 1px 0 0 darkred',
        });
    }else if(provincias.includes(getTo.value) && !provincias.includes(getFrom.value)){
        $(this).mdbAutocomplete({
            inputFocus: '2px solid #F1F322',
            inputFocusShadow: '0 1px 0 0 #A4B702',
            inputBlur: '2px solid #02DA2F',
            inputBlurShadow: '0 1px 0 0 #03841C',
        });
    }else{
        $(this).mdbAutocomplete({
            inputFocus: '2px solid #F1F322',
            inputFocusShadow: '0 1px 0 0 #A4B702',
            inputBlur: '2px solid #02DA2F',
            inputBlurShadow: '0 1px 0 0 #03841C',
        });
        $(submit).off('click', false);
    }

}

getFrom.addEventListener('change', getVal);
getTo.addEventListener('change', getVal);


// hide nodes created by jquery ui
$('.ui-autocomplete, .ui-menu-item, .ui-helper-hidden-accessible').css('display', 'none');