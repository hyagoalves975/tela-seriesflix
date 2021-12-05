function abrirDet(){
    var video = document.getElementById('popup')
    video.style.cssText = 'display:inline-flex;' + 'width:500px;' + 'height:250px;';
    /*video.style.display = 'inline-flex';*/
}

function fecharDet(){
    var video = document.getElementById('popup')
    video.style.display = 'none';
}

function exibirInfo(info){
    info.style.display = 'block';    
}

function ocultaInfo(info){
    info.style.display = 'none';   
}