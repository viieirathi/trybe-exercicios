const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
 return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, R.${order.address['street']}, N° ${order.address['number']}, AP: ${order.address['apartment']}.`
}


customerInfo(order);

order.name = 'Luiz Silva'
order.payment['total'] = 50.00;

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
return `Olá ${order.name} o total do seu pedido de ${Object.keys(order.order['pizza'])[0]}, ${Object.keys(order.order['pizza'])[1]} e ${order.order.drinks.coke['type']} é R$ ${order.payment['total']}`
}
orderModifier(order); 



const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turnOut = (manga,abacaxi,goiaba) => {
  manga[abacaxi]= goiaba;
}
turnOut(lesson2, 'turno', 'manhã')
console.log(lesson2);

