const array = {"wifi":[{"address":"fe80::d907:6a96:87a6:9e10","netmask":"ffff:ffff:ffff:ffff::","family":"IPv6","mac":"40:f0:2f:4d:a4:e8","internal":false,"cidr":"fe80::d907:6a96:87a6:9e10/64","scopeid":13},{"address":"192.168.0.31","netmask":"255.255.255.0","family":"IPv4","mac":"40:f0:2f:4d:a4:e8","internal":false,"cidr":"192.168.0.31/24"}],"Loopback Pseudo-Interface 1":[{"address":"::1","netmask":"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff","family":"IPv6","mac":"00:00:00:00:00:00","internal":true,"cidr":"::1/128","scopeid":0},{"address":"127.0.0.1","netmask":"255.0.0.0","family":"IPv4","mac":"00:00:00:00:00:00","internal":true,"cidr":"127.0.0.1/8"}]}

function datos_wifi_json () {
  const os = require('os'); //llamar paquete OS system operative
  const data_wifi = os.networkInterfaces() //ver wifis en formato objeto
  var buscar = data_wifi.find(data_wifi => data_wifi.model === "2023");

  var json_wifi = (JSON.stringify(data_wifi)); //lista wifis en formato json
  console.log(data_wifi)
};
datos_wifi_json(); //correr funcion ver wifis
setInterval(datos_wifi_json, 2000); // actualizar informacion cada 2 seg
