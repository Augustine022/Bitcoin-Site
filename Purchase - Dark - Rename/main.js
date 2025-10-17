// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Get both popups and their triggers
  const popup1 = document.getElementById("popup1");
  const popup2 = document.getElementById("popup2");
  const popup1Trigger = document.querySelector('a[href="#popup1"]');
  const popup2Trigger = document.querySelector('a[href="#popup2"]');

  // Function to open and close popups
  function openPopup(popup) {
    popup.style.opacity = "1";
    popup.style.pointerEvents = "all";
  }

  function closePopup(popup) {
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
  }

  // Open popup when buttons are clicked
  popup1Trigger.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup(popup1);
  });

  popup2Trigger.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup(popup2);
  });

  // Close when clicking outside popup-inner
  document.addEventListener("click", (e) => {
    if (
      popup1.style.opacity === "1" &&
      !popup1.querySelector(".popup-inner").contains(e.target) &&
      e.target !== popup1Trigger
    ) {
      closePopup(popup1);
    }

    if (
      popup2.style.opacity === "1" &&
      !popup2.querySelector(".popup-inner-2").contains(e.target) &&
      e.target !== popup2Trigger
    ) {
      closePopup(popup2);
    }
  });

  // Close popup when clicking any link inside it
  document.querySelectorAll(".popup a, .popup2 a").forEach((link) => {
    link.addEventListener("click", () => {
      closePopup(popup1);
      closePopup(popup2);
    });
  });
});
