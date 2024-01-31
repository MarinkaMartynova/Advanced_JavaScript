"use strict";

const chefSpecialization = {
  Виктор: "Пицца",
  Ольга: "Суши",
  Дмитрий: "Десерты",
};

// Создаем объекты заказов клиентов
const orders = new Map();

const client1 = { name: "Алексей" };
const client2 = { name: "Мария" };
const client3 = { name: "Ирина" };

orders.set(client1, [
  { dish: "Пицца Пепперони", chef: "Виктор" },
  { dish: "Тирамису", chef: "Дмитрий" },
]);

orders.set(client2, [
  { dish: "Суши Калифорния", chef: "Ольга" },
  { dish: "Пицца Маргарита", chef: "Виктор" },
]);

orders.set(client3, [{ dish: "Чизкейк", chef: "Дмитрий" }]);

// Вывод заказов на консоль
for (const [client, order] of orders) {
  console.log(`${client.name} заказал:`);
  order.forEach((dish) => {
    console.log(
      `- ${dish.dish} (повар: ${dish.chef}, специализация: ${
        chefSpecialization[dish.chef]
      })`
    );
  });
}
