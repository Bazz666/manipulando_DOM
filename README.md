# manipulando_DOM

// Formulatio tipo Bootstrap html crado solo con manipulacion de DOM con codigo VanilaJS

* Codigo con funciones comentadas y explicadas dentro del index
    // Funcion que valida los campos obligatorios "needs-validation"

         (function () {
            'use strict'

                window.addEventListener('load', function () {
                var forms = document.getElementsByClassName('needs-validation')
                Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                    }, false)
                })
            }, false)
        }())

*functions : [header, cart_item,cart,billing,footer_link,footer]

    // disposicion de los elementos cart , billing y footer en la pagina
        const body = document.getElementsByTagName('body')[0];
        body.className = 'bg-light';
        const containerPage = document.createElement('div');
        containerPage.className = 'container';
        body.appendChild(containerPage);
        containerPage.appendChild(header());
        const rowPage = document.createElement('div');
        rowPage.className = 'row';
        containerPage.appendChild(rowPage);
        rowPage.appendChild(cart());
        rowPage.appendChild(billing())
        containerPage.appendChild(footer());
    //
