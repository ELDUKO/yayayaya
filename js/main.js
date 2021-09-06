let writing = str => {

    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.body.innerHTML += arrFromStr[i];
        i++;

        if(i === arrFromStr.length){
            clearInterval(printStr);
            document.body.style.color ='white'


        }
    },1200);
};

writing('BITACORA DEL PRIMER PARCIAL ELABORADA POR LOPEZ ESTRADA JOSE IGNACIO');
document.body.style.textAlign = "center";
document.body.style.fontSize = "40px";
document.body.style.fontFamily = "'Bebas Neue', cursive";

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})