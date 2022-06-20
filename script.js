const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

// Rotate icon
const accordionBtns = document.querySelectorAll("summary");

const closeAccordionItems = () => {
  accordionBtns.forEach((btn) => {
    btn.firstElementChild.classList.remove("active");
  });
};

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // closeAccordionItems();
    e.target.firstElementChild.classList.toggle("active");
  });
});
