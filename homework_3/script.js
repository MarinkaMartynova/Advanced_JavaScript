"use strict";

let reviews = [];

// Функция для отображения страницы добавления отзыва.
function showAddReviewPage() {
  document.getElementById("addReviewPage").style.display = "block";
  document.getElementById("viewReviewsPage").style.display = "none";
}

// Функция для отображения страницы просмотра отзывов.
function showViewReviewsPage() {
  document.getElementById("addReviewPage").style.display = "none";
  document.getElementById("viewReviewsPage").style.display = "block";
  updateProductsList();
}

// Функция для добавления отзыва.
function addReview() {
  const productName = document.getElementById("productSelect").value;
  const reviewText = document.getElementById("reviewText").value;

  reviews.push({ productName, reviewText });
  localStorage.setItem("reviews", JSON.stringify(reviews));
  document.getElementById("reviewText").value = "";
  showViewReviewsPage();
}

// Функция для обновления списка отзывов на странице просмотра отзывов.
function updateProductsList() {
  const productsList = document.getElementById("productsList");
  productsList.innerHTML = "";

  reviews.forEach((review, index) => {
    const productItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    deleteButton.addEventListener("click", () => deleteReview(index));
    productItem.innerText = `${review.productName}: ${review.reviewText}`;
    productItem.appendChild(deleteButton);
    productsList.appendChild(productItem);
  });
}

// Функция для отображения отзывов о конкретном продукте (видимо, не используется в текущем контексте).
function showProductReviews(reviews) {
  const reviewsList = document.getElementById("productsList");
  reviewsList.innerHTML = "";

  reviews.forEach((review) => {
    const reviewItem = document.createElement("li");
    reviewItem.innerText = review.text;
    reviewsList.appendChild(reviewItem);
  });
}

// Функция для удаления отзыва.
function deleteReview(index) {
  reviews.splice(index, 1);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  updateProductsList();
}

document.getElementById("addReviewBtn").addEventListener("click", addReview);
document
  .getElementById("reviewsBtn")
  .addEventListener("click", showViewReviewsPage);

if (localStorage.getItem("reviews")) {
  reviews = JSON.parse(localStorage.getItem("reviews"));
}

showAddReviewPage();
