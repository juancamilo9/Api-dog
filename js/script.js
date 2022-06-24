// con el async le decimos al navegador que es una funcion asincrona y queremos que vaya despacio
async function buscarPerrito(){
    // solicitamos que traiga u obtenga el resultado de una url, y la guardamos en la variable response
    // El await, dice: espera hasta que la respuesta este lista y luego se guarde
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var responseJson = await response.json();
    // url de la imagen
    var img = responseJson.message; 
    var contenedor_perrito = document.querySelector(".contenedor-perrito");
    contenedor_perrito.innerHTML = "<img src='"+img+"' alt='imgagen perrito'>"


}