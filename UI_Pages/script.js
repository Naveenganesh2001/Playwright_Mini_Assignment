document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    let isValid = true;

    // Validate email
    if (!username.value.endsWith("@gmail.com")) {
        username.classList.add("is-invalid");
        isValid = false;
    } else {
        username.classList.remove("is-invalid");
    }

    // Validate password length
    if (password.value.length <= 8) {
        password.classList.add("is-invalid");
        isValid = false;
    } else {
        password.classList.remove("is-invalid");
    }

    if (isValid) {
        window.location.href = "./HomePage.html";
    }
});

    // Function to toggle "Add to Cart" and "Remove from Cart" button


function toggleCartButton(button, title, description, price) {
    const imgSrc = button.closest('.product-card').querySelector('img').src;  // Get the image source

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (button.textContent === "Add to Cart") {
        button.textContent = "Remove from Cart";
        button.classList.remove('btn-success');
        button.classList.add('btn-danger');

        // Add product to cartItems array
        cartItems.push({ title, description, price, imgSrc });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
        button.textContent = "Add to Cart";
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');

        // Remove product from cartItems array
        cartItems = cartItems.filter(item => item.title !== title);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
}
    



    
    
       
   


    




  


