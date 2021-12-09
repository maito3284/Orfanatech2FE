// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }else{
                    ingresar();
                    event.preventDefault();
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function ingresar(){
    let usuario = document.querySelector("#usuario").value;
    let password = document.querySelector("#password").value;
    
    let url =`http://127.0.0.1:3000/identificarPersona`;

    let datos = {
        usuario: usuario,
        clave: password
    };

    fetch(url ,{
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        res.json();
        let respuesta = res.body;
        console.log(respuesta)
    })
    .then(mensaje => {
        //console.log(mensaje)
    })
    
}