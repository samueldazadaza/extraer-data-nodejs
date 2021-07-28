var myarray = [
    {
      model: '2020',
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
      model: '2022',
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
      model: '2023',
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
      model: '2024',
      speed: 1796,
      times: { user: 1885890, nice: 0, sys: 1058187, idle: 12584468, irq: 9875 }
    }
  ]

  let carro = myarray.find(myarray => myarray.model === "2023");

   console.log(carro)