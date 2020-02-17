function sendMail(contactForm){
    var templateParams = {
        'email_address': contactForm.emailaddress.value,
        'error_description': contactForm.errorsummary.value
    }
emailjs.send('gmail', 'milestone_project_2', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setTimeout("location.reload(true);",1000);
    }, function(error) {
       console.log('FAILED...', error);
    });
    return false;
}