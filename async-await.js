let items = {
  Fruits: ["Mango", 'Banana', 'Strawberry', 'Grapes'],
  Liquid: ["Water", 'Ice'],
  Holder: ['cup', 'cone', 'stick'],
  Toppings: ["chocolate", 'peanuts']
}

let shop = true;

function time(ms){
  return new Promise((resolve,reject)=>{
    if(shop){
      setTimeout(resolve, ms)
    } else{
      reject(console.log("shop is closed."))
    }
  })
}

async function kitchen(){
  try{
    await time(2000);
    console.log(`${items.Fruits[0]} was selected.`)
    
    await time(0000);
    console.log("Production has started");
    
    await time(1000);
    console.log(`${items.Liquid[0]} and ${items.Liquid[1]} was added`)
    
    await time(1000);
    console.log('machine has started')
    
    await time(2000);
    console.log(`ice cream was placed on ${items.Holder[1]}`)
    
    await time(3000);
    console.log(`${items.Toppings[0]} was selected as toppings.`)
    
    await time(2000);
    console.log('Icecream was served. Enjoy your day :)')
  }
  catch(error){
    console.log("customer left!", error)
  }
  finally{
    console.log("day ended, shop closed")
  }
}

kitchen();
