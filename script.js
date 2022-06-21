const details = document.querySelectorAll("summary");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.parentElement.removeAttribute("open");
        detail.firstElementChild.classList.remove("active");
      }

      // Rotate icon
      if (detail == targetDetail) {
        detail.firstElementChild.classList.toggle("active");
      }
    });
  });
});
