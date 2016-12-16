$( document ).ready(function() {
    console.log( "ready!" );
});

function showSuccess() {
    $('#flexiContactForm').slideUp("fast");
    $('#success-message').slideDown( "fast" );
}