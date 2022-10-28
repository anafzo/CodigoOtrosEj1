const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const elementoName = document.querySelector('.name'); //Cambio nombre de variable y especificacion del selector
const elementoBlog = document.querySelector('.blog'); //Cambio nombre de variable y especificacion del selector
const elementoLocation = document.querySelector('.location'); //Cambio nombre de variable (hasta el momento esta variable no se usa)

async function displayUser(username) { //Se agregó async a función que usa await
  elementoName.textContent = 'cargando...'; //Se cambió nombre de variable
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response); //Se cambió la variable a mostrar en consola
  elementoName.textContent = '${response.name}'; //Se cambió nombre de variable
  elementoBlog.textContent = '${data.blog}'; //Se cambió nombre de variable
  elementoLocation.textContent = '${data.location}'; //Se cambió nombre de variable
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);