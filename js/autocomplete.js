// Autocomplete script
var provincias = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];

$('#from-autocomplete').mdbAutocomplete({
    data: provincias,
    dataColor: 'purple',
    inputFocus: '2px solid #F1F322',
    inputFocusShadow: '0 1px 0 0 #A4B702',
    inputBlur: '2px solid #02DA2F',
    inputBlurShadow: '0 1px 0 0 #03841C',
});

$('#to-autocomplete').mdbAutocomplete({
    data: provincias,
    dataColor: 'purple',
    inputFocus: '2px solid #F1F322',
    inputFocusShadow: '0 1px 0 0 #A4B702',
    inputBlur: '2px solid #02DA2F',
    inputBlurShadow: '0 1px 0 0 #03841C',
});
