// Example starter JavaScript for disabling form submissions if there are invalid fields (funcion que valida los campos obligatorios)
(function () {
    'use strict'

    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

      // Loop over them and prevent submission
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


function header() { 

    // * Logo *
    let div = document.createElement('div');
    div.className = 'py-5 text-center';
    let img = document.createElement('img');
    img.className = 'd-block mx-auto mb-4';
    img.src = 'bootstrap-solid.svg';
    img.width = 72;
    img.height = 72;
    div.appendChild(img);

    // *Titulo del header*
    let h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode('Checkout form'));
    div.appendChild(h2);

    // *texto del  header*
    let p = document.createElement('p');
    p.className = 'lead';
    p.appendChild(document.createTextNode('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.'));
    div.appendChild(p);

    return div;
}


function cart_item(name, description, price, promo=false) {
    let li = document.createElement('li');
    let div = document.createElement('div');

    if (promo) {
    div.className = 'text-success';
    li.className = 'list-group-item d-flex justify-content-between bg-light';
    }
    else {
    li.className = 'list-group-item d-flex justify-content-between lh-condensed';
    }
    let h6 = document.createElement('h6');
    h6.className = 'my-0';
    let small = document.createElement('small');
    small.className = 'text-muted';
    let span = document.createElement('span');
    span.className = 'text-muted';

    h6.appendChild(document.createTextNode(name));
    small.appendChild(document.createTextNode(description));
    div.appendChild(h6);
    div.appendChild(small);
    li.appendChild(div);
    span.appendChild(document.createTextNode(price));
    li.appendChild(span);

        
    return li;
}

function promo_code() {
    let form = document.createElement('form');
    form.className = 'card p-2';
    let div = document.createElement('div');
    div.className = 'input-group';
    form.appendChild(div);
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Promo code';
    div.appendChild(input);
    let div_button = document.createElement('div');
    div_button.className = 'input-group-append';
    let button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-secondary';
    button.appendChild(document.createTextNode('Redeem'));
    div_button.appendChild(button);
    div.appendChild(div_button);

    return form;            
}

function cart() {

    let cartContainer = document.createElement('div');
    cartContainer.className = 'col-md-4 order-md-2 mb-4';
    let h4 = document.createElement('h4');
    h4.className = 'd-flex justify-content-between align-items-center mb-3';
    let span = document.createElement('span');
    span.className = 'text-muted';
    span.appendChild(document.createTextNode('Your cart'));
    h4.appendChild(span);
    span = document.createElement('span');
    span.className = 'badge badge-secondary badge-pill';
    span.appendChild(document.createTextNode('3'));
    h4.appendChild(span);
    cartContainer.appendChild(h4);

    let ul = document.createElement('ul');
    ul.className = 'list-group mb-3';
    ul.appendChild(cart_item('Product name', 'Brief description', '$12'));
    ul.appendChild(cart_item('Second Product', 'Brief description', '$8'));
    ul.appendChild(cart_item('Third item', 'Brief description', '$5'));
    ul.appendChild(cart_item('Promo code', 'EXAMPLECODE', '-$5', true));

    let total = document.createElement('li');
    total.className = 'list-group-item d-flex justify-content-between';
    let total_span = document.createElement('span');
    total_span.appendChild(document.createTextNode('Total (USD)'));
    let total_price = document.createElement('strong');
    total_price.appendChild(document.createTextNode('$20'));
    total.appendChild(total_span);
    total.appendChild(total_price);
    ul.appendChild(total);


    cartContainer.appendChild(ul);
    cartContainer.appendChild(promo_code());

    return cartContainer;
}

function billing(){

    // formato de disposicion del billing
    let divContainer = document.createElement('div');
    divContainer.className = 'col-md-8 order-md-1';
    let h4 = document.createElement('h4');
    h4.className = 'mb-3';
    h4.appendChild(document.createTextNode('Billing address'));
    divContainer.appendChild(h4);


    let form = document.createElement('form');
    form.className = 'needs-validation';
    form.noValidate =true;
    divContainer.appendChild(form);

    let row =document.createElement('form');
    row.className = 'row';
    form.appendChild(row);

    let divForm = document.createElement('div');
    divForm.className ='col-md-6 mb-3';
    row.appendChild(divForm);

    // *PRIMER ELEMENTO* del forulario dentro del formulario "first name"
    let labelFirst = document.createElement('label');
    labelFirst.htmlFor = 'firstName';
    labelFirst.appendChild(document.createTextNode('First name'));
    divForm.appendChild(labelFirst);
    
    let firstInput = document.createElement('input');
    firstInput.className = 'form-control';
    firstInput.type = 'text';
    firstInput.id = 'firstName';
    firstInput.placeholder = '';
    att = document.createAttribute('value');
    firstInput.setAttributeNode(att);
    att = document.createAttribute('required');
    firstInput.setAttributeNode(att);
    divForm.appendChild(firstInput);

    let divInvalid = document.createElement('div');
    divInvalid.className = 'invalid-feedback';
    divInvalid.appendChild(document.createTextNode('Valid first name is required'));
    divForm.appendChild(divInvalid);

    // disposicion del segundo elemento
    let divForm2 = document.createElement('div');
    divForm2.className = 'col-md-6 mb-3';
    divForm.appendChild(divForm2);
    row.appendChild(divForm2);
    //

    // *SEGUNDO ELEMENTO* del formulario "last name"
    let secondLabel = document.createElement('label');
    secondLabel.htmlFor = 'lastName';
    secondLabel.appendChild(document.createTextNode('Last name'));
    divForm2.appendChild(secondLabel);

    let secondInput = document.createElement('input');
    secondInput.className = 'form-control';
    secondInput.type = 'text';
    secondInput.id = 'lastName';
    secondInput.placeholder = '';
    att = document.createAttribute('value');
    secondInput.setAttributeNode(att);
    att = document.createAttribute('required');
    secondInput.setAttributeNode(att);
    divForm2.appendChild(secondInput);

    let divInvalid2 = document.createElement('div');
    divInvalid2.className = 'invalid-feedback';
    divInvalid2.appendChild(document.createTextNode('Valid first name is required'));
    divForm2.appendChild(divInvalid2);

    // *TECER ELEMENTO* del formulario "username"

    let divForm3 = document.createElement('div');
    divForm3.className = 'mb-3';
    form.appendChild(divForm3)

    let thirdLabel = document.createElement('label');
    thirdLabel.htmlFor = 'username';
    thirdLabel.appendChild(document.createTextNode('Username'));
    divForm3.appendChild(thirdLabel);

    

    // campo "@"

    let divForm3_2 = document.createElement('div');
    divForm3_2.className = 'input-group';
    divForm3.appendChild(divForm3_2);

    let divForm3_3 = document.createElement('div');
    divForm3_3.className = 'input-group-prepend';
    divForm3_2.appendChild(divForm3_3);

    let spanForm3 = document.createElement('span');
    spanForm3.className = 'input-group-text';
    spanForm3.appendChild(document.createTextNode('@'));
    divForm3_3.appendChild(spanForm3);

    // tercer input

    let thirdInput = document.createElement('input');
    thirdInput.className = 'form-control';
    thirdInput.type = 'text';
    thirdInput.id = 'username';
    thirdInput.placeholder = 'Username';
    thirdInput.requerid = true;
    divForm3_2.appendChild(thirdInput);


    let divForm3_4 = document.createElement('div');
    divForm3_4.className = 'invalid-feedback';
    divForm3_4.setAttribute('style', 'width: 100%');
    divForm3_4.appendChild(document.createTextNode('Your username is required'));
    divForm3_2.appendChild(divForm3_4);

    // disposicion del cuarto elemento

    let divForm4 = document.createElement('div');
    divForm4.className = 'mb-3';
    form.appendChild(divForm4);

    // *CUARTO ELEMENTO* del formulario

    let fourthLabel = document.createElement('label');
    fourthLabel.htmlFor = 'email';
    fourthLabel.appendChild(document.createTextNode('Email'));
    divForm4.appendChild(fourthLabel);

    let spanform4 = document.createElement('span');
    spanform4.className = 'text-muted';
    spanform4.appendChild(document.createTextNode(' (Optional)'));
    divForm4.appendChild(spanform4);

    let fouthInput = document.createElement('input');
    fouthInput.className = 'form-control';
    fouthInput.type = 'email';
    fouthInput.id = 'email';
    fouthInput.placeholder = 'you@example.com';
    divForm4.appendChild(fouthInput);

    let divInvalid4 = document.createElement('div');
    divInvalid4.className = "invalid-feedback";
    divInvalid4.appendChild(document.createTextNode('Please enter a valid email address for shipping updates.'));
    divForm4.appendChild(divInvalid4);
    

    // *Quinto elemento* del formulario "Address"
    
    let divForm5 = document.createElement('div');
    divForm5.className = 'mb-3';
    form.appendChild(divForm5);

    let fifthLabel = document.createElement('label');
    fifthLabel.htmlFor = 'address';
    fifthLabel.appendChild(document.createTextNode('Address'));
    divForm5.appendChild(fifthLabel);

    let fifthInput = document.createElement('input');
    fifthInput.className = 'form-control';
    fifthInput.type = 'text';
    fifthInput.id = 'address';
    fifthInput.placeholder = '1234 Main St';
    fifthInput.required = true;
    divForm5.appendChild(fifthInput);

    let divInvalid5 = document.createElement('div');
    divInvalid5.className = 'invalid-feedback';
    divInvalid5.appendChild(document.createTextNode('Please enter your shipping address.'));
    divForm5.appendChild(divInvalid5);


    // *QUINTO_ELEMENTO_2* del formulario "Address2"

    let divForm5_2 = document.createElement('div');
    divForm5_2.className = 'address';
    divForm5_2.appendChild(document.createTextNode('Address'));
    form.appendChild(divForm5_2);

    let fifthLabel2 = document.createElement('label');
    fifthLabel2.htmlFor = 'address2';
    fifthLabel2.appendChild(document.createTextNode('Address'));
    divForm5_2.appendChild(fifthLabel2);

    let divSpanForm5 = document.createElement('span');
    divSpanForm5.className = 'text-muted';
    divSpanForm5.appendChild(document.createTextNode(' (Optional)'));
    divForm5_2.appendChild(divSpanForm5);

    let fifthInput2 = document.createElement('input');
    fifthInput2.className = 'form-control';
    fifthInput2.type = 'text';
    fifthInput2.id = 'address2';
    fifthInput2.placeholder = 'Apartment or suite';
    divForm5_2.appendChild(fifthInput2);

    // *LOCATION SECTION*

    let divRowSection = document.createElement('div');
    divRowSection.className = 'row';
    form.appendChild(divRowSection);

    // *SEXTO_ELEMENTO* DEL FORMULARIO "COUNTRY"

    let divForm6 = document.createElement('div');
    divForm6.className = 'col-md-5 mb-3';
    divRowSection.appendChild(divForm6);

    let sixLabel = document.createElement('label');
    sixLabel.htmlFor = 'country';
    sixLabel.appendChild(document.createTextNode('Country'));
    divForm6.appendChild(sixLabel);

    let sixLabelSelector = document.createElement('select');
    sixLabelSelector.className = 'custom-select d-block w-100';
    sixLabelSelector.id = 'country';
    sixLabelSelector.required = true;
    divForm6.appendChild(sixLabelSelector);

    let sixLabelOptions = document.createElement('option');
    sixLabelOptions.value = '';
    sixLabelOptions.appendChild(document.createTextNode('Choose...'));

    let optionUS = document.createElement('option');
    optionUS.appendChild(document.createTextNode('United States'));
    sixLabelSelector.appendChild(sixLabelOptions);
    sixLabelSelector.appendChild(optionUS);

    let divInvalid6 = document.createElement('div');
    divInvalid6.className = 'invalid-feedback';
    divInvalid6.appendChild(document.createTextNode('Please select a valid country.'));
    divForm6.appendChild(divInvalid6);
    
    // *SEXTO_ELEMENTO_2* DEL FORMULARIO "State"
    let divForm6_2 = document.createElement('div');
    divForm6_2.className = "col-md-4 mb-3";
    divRowSection.appendChild(divForm6_2);

    let sixLabel2 = document.createElement('label');
    sixLabel2.htmlFor = 'state';
    sixLabel2.appendChild(document.createTextNode('State'));
    divForm6_2.appendChild(sixLabel2);

    let sixLabelSelector2 = document.createElement('select');
    sixLabelSelector2.className = 'custom-select d-block w-100';
    sixLabelSelector2.id = 'state';
    sixLabelSelector2.required = true;
    divForm6_2.appendChild(sixLabelSelector2);

    let sixLabelOptions2 = document.createElement('option');
    sixLabelOptions2.value = '';
    sixLabelOptions2.appendChild(document.createTextNode('Choose...'));

    let optionST = document.createElement('option');
    optionST.appendChild(document.createTextNode('California'));
    sixLabelSelector2.appendChild(sixLabelOptions2);
    sixLabelSelector2.appendChild(optionST);
    
    let divInvalid6_2 = document.createElement('div');
    divInvalid6_2.className = 'invalid-feedback';
    divInvalid6_2.appendChild(document.createTextNode('Please provide a valid state.'));
    divForm6_2.appendChild(divInvalid6_2);

    // *SEXTO_ELEMENTO_3* DEL FORMULARIO "ZIP"
    let divForm6_3 = document.createElement('div');
    divForm6_3.className = "col-md-3 mb-3";
    divRowSection.appendChild(divForm6_3);
    
    let sixLabel3 = document.createElement('label');
    sixLabel3.htmlFor = 'zip';
    sixLabel3.appendChild(document.createTextNode('Zip'));
    divForm6_3.appendChild(sixLabel3);

    let sixInput6_3 = document.createElement('input');
    sixInput6_3.type = 'text';
    sixInput6_3.className = 'form-control';
    sixInput6_3.id = 'zip';
    sixInput6_3.placeholder = '';
    sixInput6_3.required = true;
    divForm6_3.appendChild(sixInput6_3);

    let divInvalid6_3 = document.createElement('div');
    divInvalid6_3.className = 'invalid-feedback';
    divInvalid6_3.appendChild(document.createTextNode('Zip code required.'));
    divForm6_3.appendChild(divInvalid6_3);



    
    //Payment

    const h4Payment = document.createElement('h4');
    h4Payment.className = "mb-3";
    h4Payment.textContent = "Payment";
    form.appendChild(h4Payment);

    const divPayBlock = document.createElement('div');
    divPayBlock.className = "d-block my-3";
    form.appendChild(divPayBlock);

    const divPayCustom1 = document.createElement('div');
    divPayCustom1.className = "custom-control custom-radio";
    divPayBlock.appendChild(divPayCustom1);
    const inputPayCustom1 = document.createElement('input');
    inputPayCustom1.className = "custom-control-input";
    inputPayCustom1.type = "radio";
    inputPayCustom1.id = "credit";
    inputPayCustom1.name = "paymentMethod";
    inputPayCustom1.checked = true;
    inputPayCustom1.required = true;
    divPayCustom1.appendChild(inputPayCustom1);
    const labelPayCustom1 = document.createElement('label');
    labelPayCustom1.className = "custom-control-label";
    labelPayCustom1.htmlFor = "credit";
    labelPayCustom1.appendChild(document.createTextNode('Credit card'));
    divPayCustom1.appendChild(labelPayCustom1);

    const divPayCustom2 = document.createElement('div');
    divPayCustom2.className = "custom-control custom-radio";
    divPayBlock.appendChild(divPayCustom2);
    const inputPayCustom2 = document.createElement('input');
    inputPayCustom2.className = "custom-control-input";
    inputPayCustom2.type = "radio";
    inputPayCustom2.id = "debit";
    inputPayCustom2.name = "paymentMethod";
    inputPayCustom2.required = true;
    divPayCustom2.appendChild(inputPayCustom2);
    const labelPayCustom2 = document.createElement('label');
    labelPayCustom2.className = "custom-control-label";
    labelPayCustom2.htmlFor = "debit";
    labelPayCustom2.appendChild(document.createTextNode('Debit card'));
    divPayCustom2.appendChild(labelPayCustom2);

    const divPayCustom3 = document.createElement('div');
    divPayCustom3.className = "custom-control custom-radio";
    divPayBlock.appendChild(divPayCustom3);
    const inputPayCustom3 = document.createElement('input');
    inputPayCustom3.className = "custom-control-input";
    inputPayCustom3.type = "radio";
    inputPayCustom3.id = "paypal";
    inputPayCustom3.name = "paymentMethod";
    inputPayCustom3.required = true;
    divPayCustom3.appendChild(inputPayCustom3);
    const labelPayCustom3 = document.createElement('label');
    labelPayCustom3.className = "custom-control-label";
    labelPayCustom3.htmlFor = "paypal";
    labelPayCustom3.appendChild(document.createTextNode('Paypal'));
    divPayCustom3.appendChild(labelPayCustom3);

    const divCardRow = document.createElement('div');
    divCardRow.className = "row";
    form.appendChild(divCardRow);

    const divCardCol = document.createElement('div');
    divCardCol.className = "col-md-6 mb-3";
    divCardRow.appendChild(divCardCol);
    const labelCardCol = document.createElement('label');
    labelCardCol.htmlFor = "cc-name";
    labelCardCol.appendChild(document.createTextNode('Name on card'));
    divCardCol.appendChild(labelCardCol);
    const inputCardCol = document.createElement('input');
    inputCardCol.className = "form-control";
    inputCardCol.type = "text";
    inputCardCol.id = "cc-name";
    inputCardCol.placeholder = "";
    inputCardCol.required = true;
    divCardCol.appendChild(inputCardCol);
    const smallCardCol = document.createElement('small');
    smallCardCol.className = "text-muted";
    smallCardCol.appendChild(document.createTextNode('Full name as displayed on card'));
    divCardCol.appendChild(smallCardCol);
    const divInvalidCard = document.createElement('div');
    divInvalidCard.className = "invalid-feedback";
    divInvalidCard.appendChild(document.createTextNode('Name on card is required'));
    divCardCol.appendChild(divInvalidCard);

    const divCardCol2 = document.createElement('div');
    divCardCol2.className = "col-md-6 mb-3";
    divCardRow.appendChild(divCardCol2);
    const labelCardCol2 = document.createElement('label');
    labelCardCol2.htmlFor = "cc-name";
    labelCardCol2.appendChild(document.createTextNode('Credit card number'));
    divCardCol2.appendChild(labelCardCol2);
    const inputCardCol2 = document.createElement('input');
    inputCardCol2.className = "form-control";
    inputCardCol2.type = "text";
    inputCardCol2.id = "cc-name";
    inputCardCol2.placeholder = "";
    inputCardCol2.required = true;
    divCardCol2.appendChild(inputCardCol2);
    const divInvalidCard2 = document.createElement('div');
    divInvalidCard2.className = "invalid-feedback";
    divInvalidCard2.appendChild(document.createTextNode('Credit card number is required'));
    divCardCol2.appendChild(divInvalidCard2);

    const divCardRow2 = document.createElement('div');
    divCardRow2.className = "row";
    form.appendChild(divCardRow2);

    const divCardCol3 = document.createElement('div');
    divCardCol3.className = "col-md-3 mb-3";
    divCardRow2.appendChild(divCardCol3);
    const labelCardCol3 = document.createElement('label');
    labelCardCol3.htmlFor = "cc-expiration";
    labelCardCol3.appendChild(document.createTextNode('Expiration'));
    divCardCol3.appendChild(labelCardCol3);
    const inputCardCol3 = document.createElement('input');
    inputCardCol3.className = "form-control";
    inputCardCol3.type = "text";
    inputCardCol3.id = "cc-expiration";
    inputCardCol3.placeholder = "";
    inputCardCol3.required = true;
    divCardCol3.appendChild(inputCardCol3);
    const divInvalidCardExp = document.createElement('div');
    divInvalidCardExp.className = "invalid-feedback";
    divInvalidCardExp.appendChild(document.createTextNode('Expiration date required'));
    divCardCol3.appendChild(divInvalidCardExp);

    const divCardCol4 = document.createElement('div');
    divCardCol4.className = "col-md-3 mb-3";
    divCardRow2.appendChild(divCardCol4);
    const labelCardCol4 = document.createElement('label');
    labelCardCol4.htmlFor = "cc-cvv";
    labelCardCol4.appendChild(document.createTextNode('CVV'));
    divCardCol4.appendChild(labelCardCol4);
    const inputCardCol4 = document.createElement('input');
    inputCardCol4.className = "form-control";
    inputCardCol4.type = "text";
    inputCardCol4.id = "cc-cvv";
    inputCardCol4.placeholder = "";
    inputCardCol4.required = true;
    divCardCol4.appendChild(inputCardCol4);
    const divInvalidCardExp2 = document.createElement('div');
    divInvalidCardExp2.className = "invalid-feedback";
    divInvalidCardExp2.appendChild(document.createTextNode('Security code required'));
    divCardCol4.appendChild(divInvalidCardExp2);

    const hr3 = document.createElement('hr');
    hr3.className = "mb-4";
    form.appendChild(hr3);

    //Botón checkout
    const buttonForm = document.createElement('button');
    buttonForm.className = "btn btn-primary btn-lg btn-block";
    buttonForm.type = "submit";
    buttonForm.textContent = "Continue to checkout";
    form.appendChild(buttonForm);

    return divContainer;
}

//disposicion del footer
function footer_link(texto) {
    var li = document.createElement('li');
    li.className = 'list-inline-item';
    var a = document.createElement('a');
    a.href = '#';
    a.appendChild(document.createTextNode(texto));
    li.appendChild(a);

    return li;
}

//elementos del footer

function footer() {
    var footer = document.createElement('footer');
    footer.className = 'my-5 pt-5 text-muted text-center text-small';
    var p = document.createElement('p');
    p.className = 'mb-1';
    p.appendChild(document.createTextNode('2017-2019 Company Name'));
    footer.appendChild(p);

    var ul = document.createElement('ul');
    ul.className = 'list-inline';
    ul.appendChild(footer_link('Privacy'));
    ul.appendChild(footer_link('Terms'));
    ul.appendChild(footer_link('Support'));
    footer.appendChild(ul);
    
    return footer;
}


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



