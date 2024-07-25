const tabsBtnsParent = document.querySelector(".tabs__nav");

const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItem = document.querySelectorAll(".tabs__item");

function hideTabContent() {
  tabsItem.forEach((item) => {
    item.classList.add("hide");
  });

  tabsBtns.forEach((item) => {
    item.classList.remove("active");
  });
}

function showTabContent(i = 0) {
    tabsItem[i].classList.remove("hide");
    tabsBtns[i].classList.add("active");
}

hideTabContent();
showTabContent();

tabsBtns.forEach((btn,i) => {
  btn.addEventListener('click', ()=>{
    hideTabContent();
    showTabContent(i);
  })
}); 

// tabsBtnsParent.addEventListener("click", (event) => {
//   const target = event.target;
//   if (target.classList.contains("tab_btn")) {
//     tabsBtns.forEach((item, i) => {
//       if (target == item) {
//         hideTabContent();
//         showTabContent(i);
//       }
//     });
//   }
// });

