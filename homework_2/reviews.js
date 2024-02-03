"use strict";

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function addReview(text) {
  if (text.length < 50 || text.length > 500) {
    throw new Error("Длина отзыва должна быть от 50 до 500 символов");
  }

  const reviewsContainer = document.getElementById("reviewsContainer");
  const reviewNode = document.createElement("p");
  reviewNode.textContent = `${text} - Пользователь ${getUniqueId()}`;
  reviewsContainer.appendChild(reviewNode);
}

function getUniqueId() {
  return Math.floor(Math.random() * 1000) + 1; // Генерируем случайный id
}

document.getElementById("submitBtn").addEventListener("click", () => {
  const reviewInput = document.getElementById("reviewInput");
  try {
    addReview(reviewInput.value);
    reviewInput.value = ""; // Очистить поле ввода после добавления отзыва
  } catch (error) {
    console.error(error.message);
  }
});

// Загрузка начальных отзывов из initialData
const reviewsContainer = document.getElementById("reviewsContainer");
initialData.forEach((product) => {
  product.reviews.forEach((review) => {
    const reviewNode = document.createElement("p");
    reviewNode.textContent = `Пользователь ${review.id}: ${review.text}`;
    reviewsContainer.appendChild(reviewNode);
  });
});
