// Add interactive functionality if needed
document.querySelectorAll(".crop-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Selected crop tab: ${button.textContent}`);
  });
});
