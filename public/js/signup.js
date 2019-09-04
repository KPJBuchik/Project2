$(document).ready(function () {

  // Getting references to our form and input
  var signUpForm = $(".signup");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");
  var roleInput = $("#role-input");



  // $(".signup").on("click", function() {
  //   event.preventDefault()
  //   console.log(passwordInput.val().trim())
  //   console.log(emailInput.val().trim())
  // })
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function (event) {
    event.preventDefault();
    console.log(passwordInput.val().trim())
    console.log(emailInput.val().trim())
    console.log(roleInput.val().trim())
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      role: roleInput.val().trim()
    };
    console.log(userData)

    if (!userData.email || !userData.password) {
      return;
    }
    console.log(userData)
    // If we have an email and password, run the signUpUser function

    signUpUser(userData.email, userData.password, userData.role);
    emailInput.val("");
    passwordInput.val("");
    roleInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, role) {
    $.post("/api/signup", {
      email: email,
      password: password,
      role: role
    })
      .then(function (data) {
        window.location.replace("/menu.html");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});


