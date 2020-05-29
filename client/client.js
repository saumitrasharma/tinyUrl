console.log('Hallelujah')
const DYNAMIC_URL = 'EnterURL';

var formElelent = document.querySelector('form');
if(formElelent.addEventListener){
   formElelent.addEventListener("submit", callback);  //Modern browsers
}else if(formElelent.attachEvent){
   formElelent.attachEvent('onsubmit', callback);            //Old IE
}

function callback(event) {
    event.preventDefault();
    const formData = new FormData(formElelent);
    const url = formData.get('inputUrl');
    console.log(url);

    fetch(DYNAMIC_URL, {
        method:'POST',
        body: JSON.stringify(url),
        headers: {
            'content-type': 'application/json'
        }
    });
};

