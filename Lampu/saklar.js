function saklar() {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let toggle4 = document.getElementById("default-toggle4");

  if (toggle1.checked) {
    lampu1.src = "asset/on.gif";
  } else {
    lampu1.src = "asset/off.gif";
  }
  if (toggle2.checked) {
    lampu2.src = "asset/on.gif";
  } else {
    lampu2.src = "asset/off.gif";
  }
  if (toggle3.checked) {
    lampu3.src = "asset/on.gif";
  } else {
    lampu3.src = "asset/off.gif";
  }
  if (toggle4.checked) {
    lampu4.src = "asset/on.gif";
  } else {
    lampu4.src = "asset/off.gif";
  }
}

function cetrekan() {
  let toggle = document.getElementById("default-toggle");
  if (toggle.checked) {
    lampu1.src = "asset/on.gif";
    lampu2.src = "asset/on.gif";
    lampu3.src = "asset/on.gif";
    lampu4.src = "asset/on.gif";
  } else {
    lampu1.src = "asset/off.gif";
    lampu2.src = "asset/off.gif";
    lampu3.src = "asset/off.gif";
    lampu4.src = "asset/off.gif";
  }
}

function sideNavbar() {
  const sidebar = document.querySelector(".side");
  sidebar.style.display = "flex";
}

function hide() {
  const sidebar = document.querySelector(".side");
  sidebar.style.display = "none";
}
