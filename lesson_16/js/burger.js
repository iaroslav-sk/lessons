document.addEventListener("click", function (e) {
  const targetElement = e.target;
  if (targetElement.closest(".logo__burger")) {
    document.documentElement.classList.toggle("open");
  }
});
