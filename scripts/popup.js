document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  if (btn) {
    btn.addEventListener("click", () => {
      console.log("hello button");
    });
  }
});

console.log("Started...", document);
