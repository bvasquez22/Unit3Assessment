let restaurantArr = document.querySelectorAll('.restaurant')

document.querySelector('#restaurant-btn').addEventListener('click', (e) => {
    alert(restaurantArr[(Math.floor(Math.random() * restaurantArr.length))].textContent)
})