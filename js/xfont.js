
slider_weight.addEventListener("input", function () {
    var axisValue = slider_weight.value;
    testarea.style.fontWeight = axisValue;
    value_weight.innerText = axisValue;
  });

  slider_width.addEventListener("input", function () {
    var axisValue2 = slider_width.value;
    testarea.style.fontStretch = axisValue2+'%';
    value_width.innerText = axisValue2;
  });