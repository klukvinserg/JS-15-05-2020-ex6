let myWidth = document.documentElement.clientWidth;
let myHeight = document.documentElement.clientHeight;

function clickMouse(event) {
  let pointTop = event.pageY;
  let pointLeft = event.pageX;

  let tmp = myHeight - pointTop;
  let temp = myWidth - pointLeft;

  if (pointTop < 50) {
    main.style.top = 0 + "px";
  } else if (tmp < 50) {
    main.style.top = myHeight - 52 + "px";
  } else {
    main.style.top = pointTop - 25 + "px";
  }

  if (pointLeft < 100) {
    main.style.left = 0 + "px";
  } else if (temp < 100) {
    main.style.left = myWidth - 101 + "px";
  } else {
    main.style.left = pointLeft - 50 + "px";
  }
}

function myMouseenter() {
  let pointTop = event.pageY;

  if (pointTop < 65) {
    myTooltipButtom.style.top = 40 + 10 + "px";
  } else {
    myTooltip.style.top = -40 + "px";
  }
}

function myMouseleave() {
  myTooltip.style.top = 0 + "px";
  myTooltipButtom.style.top = 0 + "px";
}
