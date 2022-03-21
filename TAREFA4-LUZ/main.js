var checkbox = document.querySelector('#switch');

checkbox.addEventListener('change', function(){
    if(checkbox.checked == true){
        document.getElementById('imagem').src="img/lampada-acesa.png";
        document.getElementById('container').className = 'container on'
    }
    else{
        document.getElementById('imagem').src="img/lampada-apagada.png";
        document.getElementById('container').className = 'container'
    }
})