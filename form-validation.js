function header() { 
    //Logo
    let div = document.createElement('div');
    div.className = 'py-5 text-center';
    let img = document.createElement('img');
    img.className = 'd-block mx-auto mb-4';
    img.src = 'bootstrap-solid.svg';
    img.width = 72;
    img.height = 72;
    div.appendChild(img);

    //Titulo del header
    let h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode('Checkout form'));
    div.appendChild(h2);

    //texto del  header
    let p = document.createElement('p');
    p.className = 'lead';
    p.appendChild(document.createTextNode('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.'));
    div.appendChild(p);

    return div;
}

function billing(){

    //formato de disposicion del billing

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

    // primer elemento del forulario dentro del formulario "first name"

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

    // segundo elemento del formulario "last name"

    let divFormLast = document.createElement('div');
    divFormLast.className = 'col-md-6 mb-3';
    divForm.appendChild(divFormLast);
    row.appendChild(divFormLast);

    let secondLabel = document.createElement('label');
    secondLabel.htmlFor = 'lastName';
    secondLabel.appendChild(document.createTextNode('Last name'));
    divFormLast.appendChild(secondLabel);

    let secondInput = document.createElement('input');
    secondInput.className = 'form-control';
    secondInput.type = 'text';
    secondInput.id = 'lastName';
    secondInput.placeholder = '';
    att = document.createAttribute('value');
    secondInput.setAttributeNode(att);
    att = document.createAttribute('required');
    secondInput.setAttributeNode(att);
    divFormLast.appendChild(secondInput);

    let divInvalid2 = document.createElement('div');
    divInvalid2.className = 'invalid-feedback';
    divInvalid2.appendChild(document.createTextNode('Valid first name is required'));
    divFormLast.appendChild(divInvalid2);

    //

    let divUserName = document.createElement('div');
    divUserName.className = 'mb-3';
    form.appendChild(divUserName)

    return divContainer;
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
}row

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
    let container = document.createElement('div');
    container.className = 'col-md-4 order-md-2 mb-4';
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
    container.appendChild(h4);

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


    container.appendChild(ul);
    container.appendChild(promo_code());
    return container;
}

function footer_link(texto) {
    var li = document.createElement('li');
    li.className = 'list-inline-item';
    var a = document.createElement('a');
    a.href = '#';
    a.appendChild(document.createTextNode(texto));
    li.appendChild(a);

    return li;
}

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

var body = document.getElementsByTagName('body')[0];
body.className = 'bg-light';
var container = document.createElement('div');
container.className = 'container';
body.appendChild(container);
container.appendChild(header());
container.appendChild(billing());
var row = document.createElement('div');
row.className = 'row';
container.appendChild(row);
row.appendChild(cart());
container.appendChild(footer());