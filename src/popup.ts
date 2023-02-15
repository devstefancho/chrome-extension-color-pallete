import util from "./utils";

export {};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  if (btn) {
    btn.addEventListener("click", () => {
      console.log("hello button");
      new window.EyeDropper()
        .open()
        .then(({ sRGBHex }: { sRGBHex: string }) => {
          console.log("print result...");
          console.log(sRGBHex);
          navigator.clipboard.writeText(sRGBHex);
          const colorCodes = document.getElementById("selected-color-code");
          const code = document.createElement("div");
          code.innerText = `${sRGBHex} (hsl : ${util.RGBToHSL(sRGBHex)})`;
          code.style.color = sRGBHex;
          colorCodes?.appendChild(code);
        });
    });
  }
});

console.log("Started...", document);
