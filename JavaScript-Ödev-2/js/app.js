let ulDOM=document.querySelector("#listGroupIndex")
let buttonDOM=document.querySelector("#button")
let inputDOM=document.querySelector("#inputIndex")
function addItem(){
    if(inputDOM.value==""){//burada ki if ile inputa girilen değerin boş olup olmadıgını kontrol ettik
        alert("boş bilgi girdiniz")
    }
    else{
        let liDOM=document.createElement('li')//li elementi oluşturduk
        liDOM.innerHTML=//li elementinin içine inputa yazılan değeri yazdırdık
        `
        ${inputDOM.value}
        <button id="closeButton" onclick="removeItem()">
            X
        </button>
        `
        ulDOM.appendChild(liDOM)//ul doma aktardık li elemntini
        inputDOM.value="";//ekle dedikten sonra inputun içinde ki değeri sildik
        liDOM.id="liIndex"//yeni eklenen li ye index verik bu sayede silme işlemi yaparken id ye bakarak sildigi için id olmadan silerken hata veriyor
    }
}
function removeItem(){
    let lidom=document.querySelector("#liIndex")//liIndex sahip li leri aldık
    lidom.remove();//aldıgım li leri silme işlemi yaptık.
}