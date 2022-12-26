const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')

// const anchorArray = document.getElementsByTagName("a").innerHTML;
// console.log(anchorArray);

// for(let i =0 ; i<Object.values(siteContent["nav"]).length; i++)
// {
//    = Object.values(siteContent["nav"])[i];
// }


document.getElementsByTagName("a")[0].innerHTML = "Servisler";
document.getElementsByTagName("a")[1].innerHTML = siteContent["nav"]["nav-item-2"];
document.getElementsByTagName("a")[2].innerHTML = siteContent["nav"]["nav-item-3"];
document.getElementsByTagName("a")[3].innerHTML = siteContent["nav"]["nav-item-4"];
document.getElementsByTagName("a")[4].innerHTML = siteContent["nav"]["nav-item-5"];
document.getElementsByTagName("a")[5].innerHTML = siteContent["nav"]["nav-item-6"];

//neden burda innerHTML kullanmadık??

document.getElementById("logo-img").src = "/mocks/img/logo.png";
document.getElementById("cta-img").src = "/mocks/img/cta.png";
document.getElementById("middle-img").src = "/mocks/img/accent.png";

document.getElementsByTagName("h1")[0].textContent = "Bu DOM Mükemmel";
document.getElementsByTagName("button")[0].textContent = "Başlayın";


document.getElementsByClassName("text-content")[0].getElementsByTagName("h4")[0].textContent = "Özellikler";

// document.getElementsByClassName("text-content")[0].getElementsByTagName("p")[0].textContent = 
// "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio 
// in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
// scelerisque quis.";

document.getElementsByClassName("text-content")[0].getElementsByTagName("p")[0].textContent = 
siteContent["ana-içerik"]["özellikler-içerik"];

document.getElementsByClassName("text-content")[1].getElementsByTagName("h4")[0].textContent = 
siteContent["ana-içerik"]["hakkımızda-h4"];


document.getElementsByClassName("text-content")[1].getElementsByTagName("p")[0].textContent = 
siteContent["ana-içerik"]["hakkımızda-içerik"];


document.getElementsByClassName("text-content")[2].getElementsByTagName("h4")[0].textContent = 
siteContent["ana-içerik"]["servisler-h4"];


document.getElementsByClassName("text-content")[2].getElementsByTagName("p")[0].textContent = 
siteContent["ana-içerik"]["servisler-içeriği"];

document.getElementsByClassName("text-content")[3].getElementsByTagName("h4")[0].textContent = 
siteContent["ana-içerik"]["ürünler-h4"];


document.getElementsByClassName("text-content")[3].getElementsByTagName("p")[0].textContent = 
siteContent["ana-içerik"]["ürünler-içeriği"];

document.getElementsByClassName("text-content")[4].getElementsByTagName("h4")[0].textContent = 
siteContent["ana-içerik"]["vizyon-h4"];


document.getElementsByClassName("text-content")[4].getElementsByTagName("p")[0].textContent = 
siteContent["ana-içerik"]["vizyon-içeriği"];


document.getElementsByClassName("contact")[0].getElementsByTagName("h4")[0].textContent = 
siteContent["iletisim"]["iletişim-h4"];


document.getElementsByClassName("contact")[0].getElementsByTagName("p")[0].textContent = 
siteContent["iletisim"]["adres"];


document.getElementsByClassName("contact")[0].getElementsByTagName("p")[1].textContent = 
siteContent["iletisim"]["telefon"];


document.getElementsByClassName("contact")[0].getElementsByTagName("p")[2].textContent = 
siteContent["iletisim"]["email"];

document.getElementsByClassName("bold")[0].textContent =  siteContent["footer"]["copyright"];