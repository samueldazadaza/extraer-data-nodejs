const os = require('os');



function myFunc(arg) {
  
  const data = os.networkInterfaces()
  console.log(data)


}
  
  setInterval(myFunc, 1500); // actualizar informacion cada cirto tiempo


