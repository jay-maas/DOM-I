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
let a = document.querySelectorAll("nav a");
a[0].innerHTML = siteContent["nav"]["nav-item-1"]
a[1].innerHTML = siteContent["nav"]["nav-item-2"]
a[2].innerHTML = siteContent["nav"]["nav-item-3"]
a[3].innerHTML = siteContent["nav"]["nav-item-4"]
a[4].innerHTML = siteContent["nav"]["nav-item-5"]
a[5].innerHTML = siteContent["nav"]["nav-item-6"]

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