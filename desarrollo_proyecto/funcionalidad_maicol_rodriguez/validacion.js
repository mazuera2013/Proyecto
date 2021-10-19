function operaciones(){

    //alert("Ingreso a la funcion JavaScript");
     
    //console.log("Ingreso a la funcion JavaScript");  #'se visualiza el escrito desde la consola'

    nombre=prompt("Ingrese nombre","");
    direccion=prompt("Ingrese direccion de destino del domicilio","");
    telefono=prompt("Ingrese numero de telefono","");
    informacion = ("nombre: "+ nombre + "<br>"+ "direccion: "+ direccion + "<br>" + "telefono: " + telefono);
    document.write("Confirmacion de pedido " + "<br>" + informacion);
    /*alert(informacion);+/

    return informacion;

    /*arreglos 
    var clientes = ["jose","andrea","maicol","viviana"]
    for(i=0;i<clientes.length;i++){
        alert(clientes[i]);
    }
    i=0;
    concate="";
    while (i<clientes.length){
        concate=concate + " " + clientes[i]
        i++;
    }
    alert(concate);
    */
}