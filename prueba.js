const os = require('os');

const data = os.networkInterfaces()

//console.log(os.platform());
//console.log(os.release());


var wifi = require('node-wifi');
 
// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
});
 

function myFunc(arg) {

// List the current wifi connections
wifi.getCurrentConnections((error, currentConnections) => {
    if (error) {
      console.log(error);
    } else {
      console.log(currentConnections([]));
    }
  });

}
  
  setInterval(myFunc, 1500);


