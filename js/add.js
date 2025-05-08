//front-end

const burgerBarClick = document.getElementById("burger-bar")



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
        document.getElementById("add-input").value = ""
        document.getElementById("add-input-id").value = ""
        addMenuClick = true
    }else {
        AddMenu.style.display = "none"
        addMenuClick = false
    }
}

const Close = document.getElementById("close")

const letters = "abcdefghijklmnopqrstuvwxyz"

const letterShift = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const numbers = "12345678910"

const allChars = letters + letterShift + numbers;

function GerarId(tamanho = 6){

    let resultado = "";

    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        resultado += allChars[randomIndex]
    }
    
    document.getElementById("add-input-id").value = resultado
}

const ShowProduct = document.getElementById("product-stock-content");

function saveProduct() {
    

    const productRow = document.createElement("div");

    const NameCol = document.createElement("div"); NameCol.classList.add('name-stock-content-name')

    const IdCol = document.createElement("div"); IdCol.classList.add('name-stock-content-id')

    const GroupCol = document.createElement("div"); GroupCol.classList.add('name-stock-content-name')

    const SubGroupCol = document.createElement("div"); SubGroupCol.classList.add('name-stock-content-name')

    const DateCol = document.createElement("div"); DateCol.classList.add('name-stock-content-date')

    const WeightCol = document.createElement("div"); WeightCol.classList.add('name-stock-content-peso')

    productRow.classList.add('ProductRow')

    productRow.appendChild(NameCol);
    productRow.appendChild(IdCol);
    productRow.appendChild(GroupCol);
    productRow.appendChild(SubGroupCol);
    productRow.appendChild(DateCol);
    productRow.appendChild(WeightCol);

    ShowProduct.appendChild(productRow)
}

