let items = {
  Fruits: ["Mango", 'Banana', 'Strawberry', 'Grapes'],
  Liquid: ["Water", 'Ice'],
  Holder: ['cup', 'cone', 'stick'],
  Toppings: ["chocolate", 'peanuts']
}

const orders = (fruit, prod) => {
  console.log("Welcome to Aryan's Icecream store!!! \nWhat would you like to have today??\n");

  setTimeout(() => {
    console.log(`
      I'll Have ${items.Fruits[fruit]} icecream.\n
      Great choice! Let's get started!! :)\n
    `);
    
    prod();
  },2000)
}
const toppings = items.Toppings.map(item => item)
const product = () => {
  setTimeout(()=>{
    console.log(`Production has started`);
    
    setTimeout(()=>{
      console.log(`Fruit has been chopped!!`);

      setTimeout(()=>{
        console.log(`${items.Liquid[0]} and ${items.Liquid[1]} is added.`);

        setTimeout(()=>{
          console.log(`The machine has been started.`);

          setTimeout(() => {
            console.log(`Ice cream was placed on ${items.Holder[1]}`);

            setTimeout(()=>{
              console.log(`${toppings} was selected as toppings.`);

              setTimeout(()=>{
                console.log("Your ice cream is ready!!\nEnjoy your ice cream!! :)");
              },3000);
            },2000)
          },2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 500);
}

orders(1, product);
