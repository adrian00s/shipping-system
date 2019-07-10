// Autocomplete script
var provincias = ['','', 'Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Caceres',
'Cadiz','Cantabria','Castellón','Ciudad Real','Cordoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
'Guipuzcoa','Huelva','Huesca','Islas Baleares','Jaen','Leon','Lerida','Lugo','Madrid','Malaga','Murcia','Navarra',
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
var submit = document.getElementsByClassName('submit__btns');


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
    }else if(!provincias.includes(getTo.value) && provincias.includes(getFrom.value)){
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

function gatherData(){
    // use session storage to store the data
    sessionStorage.setItem("department", $('#choose-dep option:selected').text());
    sessionStorage.setItem("would-like-send", $('#what-to-send option:selected').text());
    sessionStorage.setItem('whoAreYou', $('#who-are-you option:selected').text());
    sessionStorage.setItem('sendFrom', $('#from-autocomplete').val());
    sessionStorage.setItem('sendTo', $('#to-autocomplete').val());
    sessionStorage.setItem("email", $('input[type=email]').val());
    sessionStorage.setItem('moreDetails', $('#form__textarea').val());
}

$(submit).on('click', gatherData);

// hide nodes created by jquery ui
$('.ui-autocomplete, .ui-menu-item, .ui-helper-hidden-accessible').css('display', 'none');