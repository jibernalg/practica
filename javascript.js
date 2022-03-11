function getVal(){
    let valor=parseFloat(document.getElementById("entrada").value);
    document.getElementById("resultado").innerHTML=(valor*3800).toFixed(0);
    
}