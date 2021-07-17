var array = {"wifi":[{"address":"fe80::d907:6a96:87a6:9e10","netmask":"ffff:ffff:ffff:ffff::","family":"IPv6","mac":"40:f0:2f:4d:a4:e8","internal":false,"cidr":"fe80::d907:6a96:87a6:9e10/64","scopeid":13},{"address":"192.168.0.31","netmask":"255.255.255.0","family":"IPv4","mac":"40:f0:2f:4d:a4:e8","internal":false,"cidr":"192.168.0.31/24"}],"Loopback Pseudo-Interface 1":[{"address":"::1","netmask":"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff","family":"IPv6","mac":"00:00:00:00:00:00","internal":true,"cidr":"::1/128","scopeid":0},{"address":"127.0.0.1","netmask":"255.0.0.0","family":"IPv4","mac":"00:00:00:00:00:00","internal":true,"cidr":"127.0.0.1/8"}]}
const { writeFile } = require('fs');
const os = require('os');



const osdata = os.arch()
const oscpus = os.cpus()
const data = os.networkInterfaces()

function convertirajson () {
  var texto1 = 0
  var texto1 = (JSON.stringify(data));
  return texto1
};

function resultado () {
  //texto1.wifi[1].mac
  console.log(texto1)
  var res1 = texto1 

}

//correr funciones
convertirajson();

setTimeout(resultado, 2000); // actualizar informacion cada cirto tiempo 'Wi-Fi':



