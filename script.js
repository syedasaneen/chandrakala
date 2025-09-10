function toggleForm(form) {
  document.getElementById("signupForm").classList.toggle("hidden", form === "login");
  document.getElementById("loginForm").classList.toggle("hidden", form === "signup");
}

function signUp() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  if (username && password) {
    // Save data to localStorage
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Sign up successful! Please log in.");
    toggleForm("login");
  } else {
    alert("Please fill in all fields.");
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && username === user.username && password === user.password) {
    alert("Login successful!");
    // Redirect or show dashboard
  } else {
    alert("Invalid credentials.");
  }
}
