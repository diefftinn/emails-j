/* const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('sudmit', sedEmail)

const serviceId ='service_0g2v0lq'
const template ='template_K1ac81w'
const apikey ='cbwJml6MuuLwwh0H_'

function sedEmail(event){
    event.preventDefault()
    emailjs,init(serviceId)

    emailjs
    .senForm(serviceId, templateId, frmEmail, apikey)
    .then(result =>  Swal.fire('su mensaje se ha enviado con exito.') )
   .catch((error) =>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'algunas cosas no salieron bien!',
       
      });

   });
} */


/* document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var responseMessage = document.getElementById('responseMessage');

    if (name && email && message) {
        // Aquí se puede agregar la lógica para enviar el correo electrónico
        responseMessage.textContent = 'Gracias, ' + name + '. Tu mensaje ha sido enviado.';
        responseMessage.style.color = 'green';
    } else {
        responseMessage.textContent = 'Por favor, completa todos los campos.';
        responseMessage.style.color = 'red';
    }
});
 */

/*const frmEmail = document.getElementById('frm-email');
frmEmail.addEventListener('submit', sendEmail);

const serviceId = 'service_0g2v0lq';
const templateId = 'template_K1ac81w';
const apikey = 'cbwJml6MuuLwwh0H_';

function sendEmail(event) {
    event.preventDefault();
    emailjs.init(apikey);

    emailjs.sendForm(serviceId, templateId, frmEmail)
        .then(result => Swal.fire('Su mensaje se ha enviado con éxito.'))
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: '¡Algunas cosas no salieron bien!',
            });
        });
}

*/

// Asegúrate de que el DOM esté cargado antes de agregar el listener
document.addEventListener('DOMContentLoaded', function() {
    const frmEmail = document.getElementById('frm-email');
    frmEmail.addEventListener('submit', sendEmail);

    const serviceId = 'service_m1y0jih';
    const templateId = 'template_k1ac81w';
    const apikey = 'cbwJml6MuuLwwh0H_';

    function sendEmail(event) {
        event.preventDefault();
        emailjs.init(apikey);

        emailjs.sendForm(serviceId, templateId, frmEmail)
            .then(result => {
                Swal.fire('Su mensaje se ha enviado con éxito.');
            })
            .catch((error) => {
                console.error('Error:', error); // Log error for debugging
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: '¡Algunas cosas no salieron bien!',
                });
            });
    }
});
