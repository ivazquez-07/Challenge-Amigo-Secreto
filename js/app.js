/*
########################################################################################################################################
Creado por: Alura
Modificado por: Ignacio Vázquez
Ultima modificación: 2025-02-07
Contenido: Este archivo contiene 
todo el código de JavaScript 
que se utilizará en la página web 
para el Challenge: Amigo Secreto.

Comentario de Alura: El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.

########################################################################################################################################
*/

// 2025-02-07_IV: El formato de mis comentarios será utilizando la fecha, guión bajo y mis iniciales.

// 2025-02-19_IV: Definición de Variables
let amigos = [];
let amigosSorteados = [];


// 2025-02-07_IV: Definición de Funciones
function agregarAmigo() {
  // 2025-03-01_IV: Esta función será la encargada de tomar los datos del formulario y guardarlos en un array de nombres.
  console.log("Se hizo click en el botón Agregar Amigo");

  /* El uso de expresiones regulares me ayuda a validar nombres en español o castellano donde tenemos 
  caracteres especiales y evitar a su vez que ingresen nombres de forma extrañana o con errores */
  // const regExpNombre = /([\sA-Za-zñÑáÁéÉíÍóÓöÖúÚüÜ]+)/g;

  let nombre;
  try {
    //nombre = regExpNombre.exec(document.getElementById('amigo').value)[1].toString().trim();
    nombre = document.getElementById('amigo').value.toString().trim();
    // console.log(document.getElementById('amigo') + " --> getElementbyId");
    // console.log(document.getElementById('amigo').value + " --> value");
    // console.log(document.getElementById('amigo').value.toString() + " --> toString");
    // console.log(document.getElementById('amigo').value.toString().trim() + " --> trim");
    // console.log(regExpNombre.exec(document.getElementById('amigo').value)[1] + " --> regularExp");
    // console.log(typeof nombre + " --> typeOf");
  } catch (excep) {
    console.log("La excepción de este error es: " + excep);
  }

  if ((typeof nombre === 'string') && (nombre !== null && nombre !== '')) {

    nombre = convertir(nombre);
    if (!amigos.includes(nombre)) {
      amigos.push(nombre);
      console.log(`El amigo agregado se llama ${nombre} y ocupa la posición ${amigos.length}`);
    } else {
      alert(`El amigo de nombre ${nombre} ya existe en la lista y ocupa la posición ${amigos.indexOf(nombre) + 1}`);
    }
    document.getElementById('amigo').value = '';
    mostrarLista();
  } else {
    alert("¡Por favor, ingrese un nombre!");
  }

  return;
}

function mostrarLista() {
  // 2025-03-01_IV: Esta función será la encargada de ir agregando a un array los amigos que se ingresen en el input text.
  var listElement;
  var textElement;

  asignarTextoElemento('resultado', '');
  document.getElementById('listaAmigos').removeAttribute('disabled');
  console.log("Se habilita la lista de Amigos");
  document.getElementById('resultado').setAttribute('disabled', 'true');
  console.log("Se deshabilita el resultado del sorteo");
  asignarTextoElemento('listaAmigos', 'Lista de Amigos:');

  for (let i = 0; i < amigos.length; i++) {
    console.log(`Amigo ${i + 1} es ${amigos[i]}`);
    listElement = document.createElement('li');
    textElement = document.createTextNode(amigos[i]);
    listElement.appendChild(textElement);
    document.getElementById('listaAmigos').appendChild(listElement);
  }

  return;
}

function sortearAmigo() {
  // 2025-03-01_IV: Esta función será la encargada de generar en forma aleatoria la asociación del amigo secreto.
  // var listElement;
  // var textElement;

  console.log("Se hizo click en el botón sortear amigo");
  document.getElementById('resultado').removeAttribute('disabled');
  console.log("Se habilita el resultado del sorteo");
  document.getElementById('listaAmigos').setAttribute('disabled', 'true');
  console.log("Se deshabilita la Lista de Amigos");
  if (amigos.length > 0) {
    asignarTextoElemento('listaAmigos', '');
    console.log(`En el Array amigos tenemos estos elementos: ${amigos}`);
    ////2025-03-03_IV: Para el sorteo utilizamos la función Math.random
    let posicionAmigo = Math.floor(Math.random() * amigos.length);

    console.log(`El Amigo sorteado es el de la posición ${posicionAmigo} y su nombre es ${amigos[posicionAmigo]}`);

    asignarTextoElemento('resultado', 'El Amigo asignado por el sorteo es:');
    //2025-03-11_IV: Se agrega el amigo elegido a una nueva lista para mostrar los que fueron ya sorteados
    amigosSorteados.push(amigos[posicionAmigo]);
    //2025-03-11_IV: Se quita el amigo ya elegido de la lista original, de esta forma se puede sortear de nuevo
    amigos.splice(posicionAmigo, 1);

    //2025-03-11_IV: Se coloca esta variante para mostrar la lista de los amigos sorteados (en caso que se presionen n veces el botón sortear)
    for (let i = 0; i < amigosSorteados.length; i++) {
      console.log(`El Amigo sorteado ${i + 1} es ${amigosSorteados[i]}`);
      listElement = document.createElement('li');
      textElement = document.createTextNode(amigosSorteados[i]);
      listElement.appendChild(textElement);
      document.getElementById('resultado').appendChild(listElement);
    }
  } else {
    alert("¡Debe agregar amigos a su lista para ser sorteados!");
  }

  return;
}

/* 2025-03-06_IV: Reutilización de funciones de otros ejercicios */
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

/* 2025-03-06_IV: Esta función me la recomendó un amigo (aún la estoy estudiando para entender, pero funciona bien) */
function convertir(nombre) {
  // Pasamos el texto recibido y conviertes todos los caracteres a minúscula
  var cadena = nombre.toLowerCase().split(' ');
  // console.log("Imprimimos la cadena spliteada: " + cadena);
  for (var i = 0; i < cadena.length; i++) {
    cadena[i] = cadena[i].charAt(0).toUpperCase() + cadena[i].substring(1);
  }
  nombre = cadena.join(' ');
  // console.log("Imprimimos el nombre luego de hacer join a la cadena: " + nombre);
  return nombre;
}

// 2025-02-07_IV: EOF (Fin de Archivo)