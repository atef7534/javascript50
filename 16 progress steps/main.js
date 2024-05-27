let levels = document.getElementsByClassName("lvl");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let progress = document.querySelector(".progress");

let widthOfProgress = 100 / levels.length;

prev.addEventListener("click", function () {
  for (let i = levels.length - 1; i > 0; i--)
    {
      if (levels[i].classList.contains("active"))
        {
          levels[i].classList.remove("active");
          let w = Number.parseFloat(progress.style.width.substr(0, progress.style.width.indexOf("%")));
          if (Number.parseInt(w) === 16)
            progress.style.width = "0";
          else
          {
            progress.style.width = `${w - widthOfProgress}%`;
          }

          break;
        }
      }
    });
next.addEventListener("click", function () {
  for (let i = 0; i < levels.length; i++)
    {
      if (!levels[i].classList.contains("active"))
        {
          levels[i].classList.add("active");
          let w = progress.style.width;
          if (w === "" || w === "0px")
            progress.style.width = `${widthOfProgress}%`;
          else
          {
            w = w.substr(0, w.indexOf("%"));
            progress.style.width = `${Number.parseFloat(w) + widthOfProgress}%`;
          }
          break;
        }
    }
});