import createDiv from ".";

function createTitle() {
    const title = createDiv('title');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contacts';
    title.append(h1);
    return title;
}

function createConent() {
    const content = createDiv('content-page');
    content.append(
        createConentLeft(),
        createConentRight(),
    )
    return content;
}

function createConentLeft() {
    const divLeft = createDiv('contact-left');
    const mapDiv = createDiv('map-container');
    const info = createDiv('contact-info');
    const adress = createDiv('contact-adress');
    const tel = createDiv('contact-tel');
    const hours = createDiv('contact-hours');
    adress.innerHTML= 'Adress:<br>1234 ELM ST,<br>NEW YORK, NY 123456, USA';
    tel.innerHTML = 'Phone:<br>(123)456-7890';
    hours.innerHTML = 'Hours:<br>MON/THU - 11:30AM - 9PM<br>FRI/SAT - 11:30AM - 10PM<br>SUN - CLOSED'

    info.append(adress, tel, hours);
    divLeft.append(mapDiv, info);
    return divLeft;
}

function createConentRight() {
    const divRight = createDiv('contact-right');
    const logo = createDiv('contact-logo');
    logo.innerHTML = '<span class="material-symbols-outlined"> lunch_dining </span>'
    const h3 = document.createElement('h3');
    h3.textContent = 'Order catering';
    const form = document.createElement('form');
    const name = document.createElement('input');
    name.type = 'text';
    name.placeholder = 'Name';

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'Email';

    const tel = document.createElement('input');
    tel.type = 'tel';
    tel.placeholder = 'Phone number';

    const message = document.createElement('textarea');
   
    message.placeholder = 'Message';
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Submit';


    divRight.append(logo, h3, form);
    form.append(name, email, tel, message, submit);

    return divRight;
}

export default function createContact() {
    const page = createDiv('page-contact');
    page.append(
        createTitle(),
        createConent(),
    )
    return page;
}