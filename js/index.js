const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent["cta"]["img-src"])
let middle_img = document.getElementById("middle-img");
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Nav
/*
let a = document.querySelectorAll("nav a");
a[0].innerHTML = siteContent["nav"]["nav-item-1"]
a[0].style.color = "green";
a[1].innerHTML = siteContent["nav"]["nav-item-2"]
a[1].style.color = "green";
a[2].innerHTML = siteContent["nav"]["nav-item-3"]
a[2].style.color = "green";
a[3].innerHTML = siteContent["nav"]["nav-item-4"]
a[3].style.color = "green";
a[4].innerHTML = siteContent["nav"]["nav-item-5"]
a[4].style.color = "green";
a[5].innerHTML = siteContent["nav"]["nav-item-6"]
a[5].style.color = "green";
*/



//Figured it out!
let a = document.querySelectorAll("nav a").forEach((element, i)=>{
element.textContent = Object.values(siteContent.nav)[i];
element.style.color = "green";
});

//new stuff on the nav
let newA = document.querySelector("nav");
newA.appendChild(document.createElement("a"));
document.querySelector("nav a:last-child").textContent = "Click After";
document.querySelector("nav a:last-child").style.color = "Red";
newA.prepend(document.createElement("a"));
document.querySelector("nav a:first-child").textContent = "Click Before";
document.querySelector("nav a:first-child").style.color = "Blue";

//cta
let h1 = document.querySelector(".cta h1");
h1.innerHTML = siteContent["cta"]["h1"]
let button = document.querySelector(".cta button");
button.innerHTML = siteContent["cta"]["button"]

//main-content
let main_content_h4 = document.querySelectorAll(".main-content h4");
main_content_h4[0].innerHTML = siteContent["main-content"]["features-h4"]
main_content_h4[1].innerHTML = siteContent["main-content"]["about-h4"]
main_content_h4[2].innerHTML = siteContent["main-content"]["services-h4"]
main_content_h4[3].innerHTML = siteContent["main-content"]["product-h4"]
main_content_h4[4].innerHTML = siteContent["main-content"]["vision-h4"]

let main_content_p = document.querySelectorAll(".main-content p");
main_content_p[0].innerHTML = siteContent["main-content"]["features-content"]
main_content_p[1].innerHTML = siteContent["main-content"]["about-content"]
main_content_p[2].innerHTML = siteContent["main-content"]["services-content"]
main_content_p[3].innerHTML = siteContent["main-content"]["product-content"]
main_content_p[4].innerHTML = siteContent["main-content"]["vision-content"]

//Contact
let contact_h4 = document.querySelector(".contact h4");
contact_h4.innerHTML = siteContent["contact"]["contact-h4"]

let contact_p = document.querySelectorAll(".contact p");
contact_p[0].innerHTML = siteContent["contact"]["address"]
contact_p[1].innerHTML = siteContent["contact"]["phone"]
contact_p[2].innerHTML = siteContent["contact"]["email"]

//Footer
let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"]


//The DESTROYER
let myButton = document.createElement("button");
myButton.innerHTML = "I WILL DESTROY";
myButton.style.width = "10%";
myButton.style.position = "fixed";
myButton.style.bottom = "0";
myButton.style.left = "0";
myButton.style.padding = "1%";
myButton.style.margin = "1%";
document.body.appendChild(myButton);
myButton.setAttribute("class", "myButton");
document.querySelector(".myButton").addEventListener('click', function() {
  myButton.style.color = "green", document.querySelector("nav").textContent = " ";});



let myButton2 = document.createElement("button");
myButton2.innerHTML = "I WILL DESTROY";
myButton2.style.width = "10%";
myButton2.style.position = "fixed";
myButton2.style.top = "0";
myButton2.style.right = "0";
myButton2.style.padding = "1%";
myButton2.style.margin = "1%";
document.body.appendChild(myButton2);
myButton.setAttribute("class", "myButton2");
document.querySelector(".myButton2").addEventListener('click', function() {
  myButton2.style.color = "red", document.querySelector("contact").textContent = " ";});


let myButton3 = document.createElement("button");
myButton3.innerHTML = "I WILL DESTROY";
myButton3.style.width = "10%";
myButton3.style.position = "fixed";
myButton3.style.top = "0";
myButton3.style.left = "0";
myButton3.style.padding = "1%";
myButton3.style.margin = "1%";
document.body.appendChild(myButton3);
myButton.setAttribute("class", "myButton3");
document.querySelector(".myButton3").addEventListener('click', function() {
  myButton3.style.color = "white", document.querySelector("main-content").textContent = " ";});


let myButton4 = document.createElement("button");
myButton4.innerHTML = "I WILL DESTROY";
myButton4.style.width = "10%";
myButton4.style.position = "fixed";
myButton4.style.bottom = "0";
myButton4.style.right = "0";
myButton4.style.padding = "1%";
myButton4.style.margin = "1%";
document.body.appendChild(myButton4);
myButton.setAttribute("class", "myButton4");
document.querySelector(".myButton4").addEventListener('click', function() {
  myButton4.style.color = "blue", document.querySelector("cta").textContent = " ";});
