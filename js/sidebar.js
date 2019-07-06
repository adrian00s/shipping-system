// SideNav Button Initialization
var show = $(".button-collapse").sideNav();

$(show).on('click', function(){
    $('.main-content').css('display','block');
});
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
var ps = new PerfectScrollbar(sideNavScrollbar);


// fix bug
$(window).on('resize', function(e){
    if(e) $('.main-content').css('display','none');
});