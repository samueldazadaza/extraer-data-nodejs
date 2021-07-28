function extraer () {
    var wifi = require('node-wifi');
    var nombre_wifi = "TITO"
     
    // Initialize wifi module
    // Absolutely necessary even to set interface to null
    wifi.init({
      iface: null // network interface, choose a random wifi interface if set to null
    });
     
    // Scan networks
    wifi.scan((error, networks) => {
      if (error) {
        console.log(error);
      } else {
    
        console.log(networks.find(networks => networks.ssid === nombre_wifi));
      }
    });
};
  extraer(); //correr funcion ver wifis
  setInterval(extraer, 2000); // actualizar informacion cada 2 seg
  