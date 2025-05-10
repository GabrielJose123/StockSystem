//front-end

const burgerBarClick = document.getElementById("burger-bar")

function Element(id) {
    return document.getElementById(`${id}`)
}

function ChangeImage(elementClick,ElementChange,Image1,Image2) {
    let clickElement = false;

    elementClick.addEventListener('click',function(){
        if (clickElement == false) {
            ElementChange.src = Image1;
            clickElement = true;
        }else {
            ElementChange.src = Image2;
            clickElement = false;
        }
    })
}
//mudar seta Ordenar
const ordenate = document.getElementById("ordenate-button")

const ordenateImage = document.getElementById("ordenate-image")

ChangeImage(ordenate,ordenateImage,"/icons/image(1)(1).png","/icons/image(1).png")

const AddMenu = document.getElementById("add-menu")

let addMenuClick = false;

function openAddMenu() {
    

    if (addMenuClick == false) {
        AddMenu.style.display = "block"
        Element("add-input-name").value = ""
        Element("add-input-Group").value = ""
        Element("add-input-Sub").value = ""
        Element("add-input-date").value = ""
        Element("add-input-peso").value = ""
        document.getElementById("add-input-id").value = ""
        addMenuClick = true
        
    }else {
        AddMenu.style.display = "none"
        addMenuClick = false
        console.log(varButtonId)
        varButtonId.disabled = false;
        varButtonId = false; 
       
    }
    
}



const Close = document.getElementById("close")

const Idbutton = Element("btn-cad")

const letters = "abcdefghijklmnopqrstuvwxyz"

const letterShift = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const numbers = "12345678910"

const allChars = letters + letterShift + numbers;

let Id;

let varButtonId = false;

function GerarId(tamanho = 6){

    if (varButtonId == false) {
        let resultado = "";

        for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        resultado += allChars[randomIndex]
        document.getElementById("add-input-id").value = resultado
        }
        Id = resultado

        Idbutton.disabled = false
        
        varButtonId = true;
    }     
    console.log(varButtonId)
}

const ShowProduct = document.getElementById("product-content-stock");

let ProductRowDiv;

function saveProduct() {
    Idbutton.disabled = true;
    varButtonId = false;

    const productRow = document.createElement("div");
    productRow.classList.add('ProductRow');
  

    const NameCol = document.createElement("div");
    NameCol.classList.add('name-stock-content-name');
    NameCol.innerHTML = Element("add-input-name").value;

    const IdCol = document.createElement("div");
    IdCol.classList.add('name-stock-content-id');
    IdCol.innerHTML = Id;

    const GroupCol = document.createElement("div");
    GroupCol.classList.add('name-stock-content-name');
    GroupCol.innerHTML = Element("add-input-Group").value;

    const SubGroupCol = document.createElement("div");
    SubGroupCol.classList.add('name-stock-content-name');
    SubGroupCol.innerHTML = Element("add-input-Sub").value;

    const DateCol = document.createElement("div");
    DateCol.classList.add('name-stock-content-date');
    DateCol.innerHTML = Element("add-input-date").value;

    const WeightCol = document.createElement("div");
    WeightCol.classList.add('name-stock-content-peso');
    WeightCol.innerHTML = Element("add-input-peso").value + "g";

    productRow.appendChild(NameCol);
    productRow.appendChild(IdCol);
    productRow.appendChild(GroupCol);
    productRow.appendChild(SubGroupCol);
    productRow.appendChild(DateCol);
    productRow.appendChild(WeightCol);

    ShowProduct.appendChild(productRow);

    productRow.addEventListener('click', () => {
        if (productRow.style.backgroundColor == "rgb(255, 255, 255)") {
            productRow.style.backgroundColor = "rgb(255, 88, 88)"
        }else {
            productRow.style.backgroundColor = "rgb(255, 255, 255)"
        }
        
        
    });

    Id = "";
    openAddMenu();
}


function exluideStock() {

    const CatchProduct = ShowProduct.querySelectorAll("*")

    CatchProduct.forEach(element => {
        if (getComputedStyle(element).backgroundColor == "rgb(255, 88, 88)") {
            element.remove()
        }
    });

}



