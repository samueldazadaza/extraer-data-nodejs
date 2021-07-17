function extraer () {
  const os = require('os'); //llamar paquete OS system operative
  const osarch = os.arch(); //arquitectura del pc
  console.log(osarch);
};
extraer(); //correr funcion ver wifis
setInterval(extraer, 1000); // actualizar informacion cada 2 seg

// const oscpus = os.cpus()
// const data_wifi = os.networkInterfaces() //ver wifis en formato objeto
// var json_wifi = (JSON.stringify(data_wifi)); //lista wifis en formato json
// console.log(data_wifi)

