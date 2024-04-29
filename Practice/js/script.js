window.addEventListener("scroll", function () {
  var header = document.getElementById("myHeader");
  var scrollPosition = window.scrollY;

  // Условие для определения, когда добавлять класс с фоном
  if (scrollPosition > 60) {
    // Пример: добавить фон после прокрутки на 60 пикселей
    header.classList.add("header-background");
  } else {
    header.classList.remove("header-background");
  }
});

/*-------------бугущая строка----------------*/
document
  .querySelector(".ticker__body")
  .addEventListener("mouseover", function () {
    this.style.animationPlayState = "paused";
  });

document
  .querySelector(".ticker__body")
  .addEventListener("mouseout", function () {
    this.style.animationPlayState = "running";
  });
