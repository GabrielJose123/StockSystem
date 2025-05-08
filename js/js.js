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


//abrir bash lateral



function OpenBash(Element,Element2,Class1,Class2) {
    let ClickBash = false;

    Element.addEventListener('click', () => {
        if (ClickBash == false) {
            Element.classList.add(Class1);
            Element.classList.remove(Class2);
            Element2.style.display = "block"
            ClickBash = true
        }else {
            Element.classList.add(Class2);
            Element.classList.remove(Class1);
            ClickBash = false
            Element2.style.display = "none"
        }
        console.log(ClickBash)
    })
}

const SideBash = document.getElementById("SideBash");

const imageContent = document.getElementById("image-content")

const BashItems = document.getElementById("bash-items-container")

OpenBash(SideBash,BashItems,'section-bash-open','section-bash')


