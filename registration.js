 
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const password = document.querySelector('input[name="password"]').value;
    const email = document.querySelector('input[name="email"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const gender = document.querySelector('input[name="sex"]:checked');
    const selects = document.querySelectorAll("select");
    const languages = document.querySelectorAll('input[type="checkbox"]:checked');
    const address = document.querySelector("textarea").value.trim();

    // Name validation
    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Invalid Name! Only letters are allowed.");
        return;
    }

    // Password validation
    if (password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[^A-Za-z0-9]/.test(password)) {
        alert("Invalid Password! Use 8+ characters, uppercase, lowercase, number and special character.");
        return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Invalid Email! Enter a valid email address.");
        return;
    }

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
        alert("Invalid Phone Number! Enter a valid 10-digit mobile number.");
        return;
    }

    // Gender validation
    if (!gender) {
        alert("Please select Male or Female.");
        return;
    }

    // Date of Birth validation
    if (selects[0].selectedIndex === 0 ||
        selects[1].selectedIndex === 0 ||
        selects[2].selectedIndex === 0) {
        alert("Please select your Date of Birth.");
        return;
    }

    // Language validation
    if (languages.length === 0) {
        alert("Please select at least one language.");
        return;
    }

    // Address validation
    if (address.length < 10) {
        alert("Address must contain at least 10 characters.");
        return;
    }

    alert("Registration Successful!");
    this.reset();
});
