let items = {
  Fruits: ["Mango", 'Banana', 'Strawberry', 'Grapes'],
  Liquid: ["Water", 'Ice'],
  Holder: ['cup', 'cone', 'stick'],
  Toppings: ["chocolate", 'peanuts']
}

let shop = false;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if(shop){
      setTimeout(()=>{
        resolve(work());
      }, time)
    } else {
      reject(console.log("The shop is closed. Please come back later"));
    }
  })
}

order(1000, () => {
  console.log(`${items.Fruits[3]} was selected`);
})
  .then(()=>{
    return order(1000, ()=>{
      console.log('Production has started')
    })
  })
  .then(()=>{
    return order(2000, ()=>{
      console.log('The fruit was chopped')
    })
  })
  .then(()=>{
    return order(1000, ()=>{
      console.log(`${items.Liquid[0]} and ${items.Liquid[1]} was added`)
    })
  })
  .then(()=>{
    return order(1000, ()=>{
      console.log('Machine has started')
    })
  })
  .then(()=>{
    return order(2000, ()=>{
      console.log(`ice cream was placed on ${items.Holder[1]}`);
    })
  })
  .then(()=>{
    return order(3000, ()=>{
      console.log(`${items.Toppings[0]} was selected as toppings.`);
    })
  })
  .then(()=>{
    return order(1000, ()=>{
      console.log(`Your Icecream is ready to serve.`);
    })
  })
  .catch(()=>{
    console.log("Customer left.");
  })
  .finally(()=>{
    console.log("thank you for visiting!!")
  })
