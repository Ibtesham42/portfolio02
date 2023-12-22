let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contens");
let tablink;
let tabcontent;
function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";   //Open Menu
}

function closemenu(){
    sidemenu.style.right = "-200px";  // Close MEnu
}

// contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbz6XUAGMCua4kP9xW48ccwefvH1LQ7RoUvnUWAJY3ZMTymqWwE8xMU2epfWeCDlWH_c/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Sucessfully"
        setTimeout(function(){
            msg.innerHTML = " "
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})