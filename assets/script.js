document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector("nav.primary");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.querySelector("form.contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var phone = form.querySelector("#phone").value.trim();
      var email = form.querySelector("#email").value.trim();
      var property = form.querySelector("#property") ? form.querySelector("#property").value : "";
      var message = form.querySelector("#message").value.trim();

      var subject = "Enquiry from website" + (property ? " – " + property : "");
      var bodyLines = [
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + email,
        property ? "Property of interest: " + property : null,
        "",
        "Message:",
        message
      ].filter(Boolean);

      var mailto =
        "mailto:tech@pkaccommodation.in" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });
  }
});
