document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử cần hover
  var btnNo = document.getElementById("btn-no");
  var btnYes = document.getElementById("btn-yes");
  var imgQR = document.getElementById("qr");
  // audio.play();

  // bắt sự kiện click
  btnYes.addEventListener("click", function () {
    btnNo.style.display = "none";
    btnYes.style.display = "none";
    imgQR.style.display = "flex";
  });

  // Bắt sự kiện hover bắt đầu
  btnNo.addEventListener("mouseover", function () {
    moveButtonRandomly(btnNo);
    changeSize(btnYes);
  });

  function moveButtonRandomly(button) {
    const newX = Math.floor(Math.random() * 500);
    const newY = Math.floor(Math.random() * 500);

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }

  // Đặt kích thước cho nút
  function changeSize(button) {
    button.style.width =
      button.offsetWidth + (button.offsetWidth * 40) / 100 + "px";
    button.style.height =
      button.offsetHeight + (button.offsetHeight * 40) / 100 + "px";
    button.style.fontSize =
      button.style.fontSize + button.style.fontSize + 30 + "px";
  }
});
