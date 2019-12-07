$( document ).ready(function() {
    console.log( "ready!" );
});

function showSuccess() {
    $('#flexiContactForm').slideUp("fast");
    $('#success-message').slideDown( "fast" );
}

$('.nav-icon').click(function(){
    $(this).toggleClass('open');
});