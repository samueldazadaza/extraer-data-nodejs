function myfunction () {
  const os = require('os'); //llamar paquete OS system operative
  const data_wifi = os.networkInterfaces() //ver wifis en formato objeto
  let buscar = data_wifi.find(data_wifi => data_wifi.family === "IPv4");
  console.log(buscar)
};
myfunction(); //correr funcion ver wifis
