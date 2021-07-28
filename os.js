function extraer () {
  const os = require('os'); //llamar paquete OS system operative
  const osarch = os.cpus(); //arquitectura del pc
  var json_osarch = (JSON.stringify(osarch)); //lista wifis en formato json
  console.log(osarch);
};
extraer(); //correr funcion ver wifis
setInterval(extraer, 2000); // actualizar informacion cada 2 seg


myarray = [
  {
    model: 'Intel(R) Core(TM) i3-3217U CPU @ 1.80GHz',
    speed: 1796,
    times: {
      user: 1675656,
      nice: 0,
      sys: 1522781,
      idle: 12330468,
      irq: 187984
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-3217U CPU @ 1.80GHz',
    speed: 1796,
    times: {
      user: 1624671,
      nice: 0,
      sys: 1028687,
      idle: 12875187,
      irq: 17125
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-3217U CPU @ 1.80GHz',
    speed: 1796,
    times: {
      user: 1861328,
      nice: 0,
      sys: 1237921,
      idle: 12429296,
      irq: 14406
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-3217U CPU @ 1.80GHz',
    speed: 1796,
    times: { user: 1885890, nice: 0, sys: 1058187, idle: 12584468, irq: 9875 }
  }
]
 console.log(myarray[0])