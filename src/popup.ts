import { EyeDropperReturnType } from "./types/eye-dropper";
import util from "./utils";

let pickerBtn;

ready(init);

function ready(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  console.log("Started...", document);
}

function init() {
  getButton();
  if (pickerBtn) {
    pickerBtn.addEventListener("click", openPicker);
  }
}

function getButton() {
  pickerBtn = document.querySelector("button");
}

function openPicker() {
  new window.EyeDropper()
    .open()
    .then((result: EyeDropperReturnType) => pickColor(result.sRGBHex));
}

function pickColor(sRGBHex: EyeDropperReturnType["sRGBHex"]) {
  copyToClipboard(sRGBHex);

  // selected color is appended to list
  const colorCodes = document.getElementById("selected-color-code");
  const code = document.createElement("div");
  code.innerText = `${sRGBHex} (hsl : ${util.RGBToHSL(sRGBHex)})`;
  code.style.color = sRGBHex;
  colorCodes?.appendChild(code);
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
