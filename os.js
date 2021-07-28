function extraer () {
  const os = require('os'); //llamar paquete OS system operative
  const osarch = os.cpus(); //arquitectura del pc
  var json_osarch = (JSON.stringify(osarch)); //lista wifis en formato json
  console.log(osarch);
};
extraer(); //correr funcion ver wifis
setInterval(extraer, 2000); // actualizar informacion cada 2 seg


