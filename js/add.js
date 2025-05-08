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
        const randomIndex = Math.floor(Math.random() * allChars.length)
        resultado += allChars[randomIndex]
    }
    
    document.getElementById("add-input-id").value = resultado
}


