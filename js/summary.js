
$('#selectedDepartment').html(function(index, currentContent){
    return currentContent += ` <span class=font-weight-normal>${sessionStorage.getItem('department')}</span>`;
});

$('#wouldLikeToSend').html(function(index, currentContent){
    return currentContent += ` <span class=font-weight-normal>${sessionStorage.getItem('would-like-send')} <i class="far fa-box-full"></i></span>`;
});

$('#whoAreYou').html(function(index, currentContent){
    return currentContent += ` <span class=font-weight-normal>${sessionStorage.getItem('whoAreYou')} <i class="far fa-signature"></i></span>`;
});

$('#sendFrom').html(function(index, currentContent){
    return currentContent += ` <span class=font-weight-normal>${sessionStorage.getItem('sendFrom')} <i class="far fa-plane-departure"></i></span>`;
});

$('#sendTo').html(function(index, currentContent){
    return currentContent += ` <span class=font-weight-normal>${sessionStorage.getItem('sendTo')} <i class="far fa-plane-arrival"></i></span>`;
});

$('#email').html(function(index, currentContent){
    return currentContent += ` <span class=font-weight-normal>${sessionStorage.getItem('email')} <i class="fal fa-inbox-in"></i></span>`;
});

$('#details').html(function(index, currentContent){
    return currentContent += ` <span class=font-weight-normal>${sessionStorage.getItem('moreDetails')}</span>`;
});

$('#modalMessage').html(function(index, currentContent){
    return currentContent += ` <span class=font-weight-bold>${sessionStorage.getItem('email')}</span> with all the details.
    You will also recieve an ID number to follow your package progress.`;
});