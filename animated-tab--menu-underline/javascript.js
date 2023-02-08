const tabs = document.querySelectorAll(".tab");
const underline = document.querySelector(".underline");

tabs.forEach(tab => {
  tab.addEventListener("click", function() {
    tabs.forEach(tab => tab.classList.remove("active"));
    this.classList.add("active");
    const width = this.offsetWidth;
    const left = this.offsetLeft;
    underline.style.width = `${width}px`;
    underline.style.transform = `translateX(${left}px)`;
  });
});
