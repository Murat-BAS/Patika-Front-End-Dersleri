let userName=prompt("Adınızı Giriniz")
let text=document.querySelector("#info")
document.querySelector("#info").classList.add("algin","font")
let yearDate=new Date();
text.innerHTML=`Merhaba <b>${userName}</b> Hoş Geldin! <br> <b>${yearDate.getDay()}/${yearDate.getMonth()}/${yearDate.getFullYear()}  ${yearDate.getUTCHours()}:${yearDate.getMinutes()}:${yearDate.getSeconds()} </b><br> Tarihinde Siteye Giriş Yaptınız`
