const qrFormEl = document.getElementById("qrForm");
const qrimageEl = document.getElementById("qrimage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");
const generateBtnEl = document.getElementById("generateBtn");

const renderQRCode = (url) => {
  if (!url) return;
  generateBtnEl.innterText = "Generating QR Code...";
  qrimageEl.src = url;
  qrContainerEl.classList.add("show");

  qrimageEl.addEventListener("load", () => {
    generateBtnEl.innterText = "Generate QR Code";
  });
};

qrFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(qrFormEl);
  const text = formData.get("qrText");
  const qrCodeUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}}";

  console.log("text", text);

  renderQRCode(qrCodeUrl);
});

qrInputTextEl.addEventListener("keyup", () => {
  if (!qrInputTextEl.value.trim()) {
    qrContainerEl.classList.remove("show");
  }
});
