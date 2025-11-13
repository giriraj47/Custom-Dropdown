const input = document.getElementById("dropdownInput");
const container = document.querySelector(".container");

input.addEventListener("click", () => {
  container.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(e.target)) {
    document.querySelector(".container").classList.remove("show");
  }
});

document.querySelectorAll(".container li").forEach((item) => {
  item.addEventListener("click", function () {
    const input = document.getElementById("dropdownInput");
    input.value = this.textContent;
    document.querySelector(".container").classList.remove("show");
  });
});
