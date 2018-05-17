"use strict"
const div = document.createElement('div');

document.body.appendChild(div);
let page = 'Home';

var http = require('http');
var fs = require('fs');
let read = fs.readFile('/src/Home.html', 'utf8', (err, data) => {
    if(err) throw err;
    return data;
  });

let loadHome = (div) => {
history.pushState({},null,'Home');
div.innerHTML = '';
let home = fs.readFile('/src/Home.html', 'utf8', (err, data) => {
    if(err) throw err;
    return data;
  });
console.log(Home.data);
div.appendChild(Home);
// //card container
// const container = document.createElement('div');
// container.className = 'container';

// //column row container
// const row = document.createElement('div');
// row.className = 'row';

// const column1 = document.createElement('div');
// column1.className = 'col-sm-8';

// //create info header
// const columnHeader = document.createElement('h2');
// columnHeader.className = 'mt-4';
// columnHeader.innerHTML = 'About the Clinic';

// //create info paragraphs
// const infoParagraph1 = document.createElement('p');
// infoParagraph1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!';
// const infoParagraph2 = document.createElement('p');
// infoParagraph2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!';

// columnHeader.appendChild(infoParagraph1);
// columnHeader.appendChild(infoParagraph2);

// //create container for contact info
// const addressContainer = document.createElement('div');
// addressContainer.className = 'col-sm-4';

// //create header for contact info
// const contactHeader = document.createElement('h2');
// contactHeader.innerHTML = 'Contact Us';

// const address = document.createElement('address');
// const strong = document.createElement('strong');
// strong.innerHTML = 'Nemo Foot Clinic';
// const streetAddress = '3482 Melrose Place';
// const cityState = 'Beverly Hills, CA 90210';
// const br = document.createElement('br');

// address.appendChild(strong);
// address.appendChild(br);
// address.appendChild(streetAddress);
// address.appendChild(br);
// address.appendChild()
// address.appendChild(strong);

};

let loadServices = (div) =>{   
        history.pushState({},null,'Services');
        page = 'Services';
        div.innerHTML = '';
        
        const issueHeader = document.createElement('h2');
        issueHeader.innerHTML = 'Services';
        const about = document.createElement('p');
        about.innerHTML = 'about us';
        
        const appointmentsHeader = document.createElement('h2');
        appointmentsHeader.innerHTML = 'Appointments';
        const appointments = document.createElement('p');
        appointments.innerHTML = 'appointments';
        
        div.appendChild(issueHeader);
        div.appendChild(about);
        div.appendChild(appointmentsHeader);
        div.appendChild(appointments);

};

let loadCalendar = (div) =>{
    history.pushState({},null,'Calendar');
        page = 'Calendar';
        div.innerHTML = '';
        
        const issueHeader = document.createElement('h2');
        issueHeader.innerHTML = 'Deb\s Calendar';
        const about = document.createElement('p');
        about.innerHTML = 'about us';
        
        const appointmentsHeader = document.createElement('h2');
        appointmentsHeader.innerHTML = 'Appointments';
        const appointments = document.createElement('p');
        appointments.innerHTML = 'appointments';
        
        div.appendChild(issueHeader);
        div.appendChild(about);
        div.appendChild(appointmentsHeader);
        div.appendChild(appointments);
};

let loadContact = (div) =>{
    history.pushState({},null,'Contact_Us');
        page = 'Contact_Us';
        div.innerHTML = '';
        
        const issueHeader = document.createElement('h2');
        issueHeader.innerHTML = 'Contact_Us';
        const about = document.createElement('p');
        about.innerHTML = 'about us';
        
        const appointmentsHeader = document.createElement('h2');
        appointmentsHeader.innerHTML = 'Appointments';
        const appointments = document.createElement('p');
        appointments.innerHTML = 'appointments';
        
        div.appendChild(issueHeader);
        div.appendChild(about);
        div.appendChild(appointmentsHeader);
        div.appendChild(appointments);
}

let loadPage = (page) =>{
    if (page == 'Services'){        
        loadServices(div);
    }

    else if (page == 'Calendar'){
        loadCalendar(div);
    }
    else if (page == 'Contact_Us'){
        loadContact(div);
    }

    else{
        loadHome(div);
    }
};


if(location.pathname == '/Services'){
    page = 'Services';
}

else if(location.pathname == '/Calendar'){
    page = 'Calendar';
}

else if(location.pathname == '/Contact_Us'){
    page = 'Contact_Us';
}

else {
    page = 'Home';
}

history.replaceState({},null,page);
loadPage(page);

window.addEventListener('popstate', (evt) =>{
    if(location.path == '/Services'){
        page = 'Services';
    }
    else if(location.pathname == '/Calendar'){
        page = 'Calendar';
    }
    
    else if(location.pathname == '/Contact_Us'){
        page = 'Contact_Us';
    }
    else{
        page = 'Home';
    }
    loadPage(page);
    
}, false);