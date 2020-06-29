function verificar(filename){
    //var data = $.csv.toObjects(csv);
    var ae = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    if (ae == "csv"){
        alert("Archivo Valido!");
    } else {
        alert("Archivo Invalido!");
    }
}