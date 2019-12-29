const $ = id => {
  return document.querySelector(id);
};
const $$ = id => {
  return document.querySelectorAll(id);
};
const wbox = $("#box");
const wli = $$("li");
const wol = $("ol");
const wul = $("ul");
const screen = $("#screen");
const imgWidth = screen.offsetWidth;
const rbtn = $("#right-btn");
const lbtn = $("#left-btn");
const btn = $$("button");

function liClick() {
  for (let i = 0; i < wol.children.length; i++) {
    let li = wol.children[i];
    li.className = "";
  }
  this.className = "current";
  let liIndex = parseInt(this.getAttribute("index"));
  animate(wul, -liIndex * imgWidth);
  index = liIndex;
}

for (let i = 0; i < wli.length; i++) {
  let li = document.createElement("li");
  wol.appendChild(li);
  li.onclick = liClick;
  li.setAttribute("index", i);
}
wol.children[0].className = "current";

const firstLi = wli[0];
const cloneLi = firstLi.cloneNode(true);
wul.appendChild(cloneLi);

let index = 0;

// rbtn.onclick = () => {
//   wol.children[(index + 1) % wli.length].onclick();
// };

// lbtn.onclick = () => {
//   wol.children[(index + wli.length - 1) % wli.length].onclick();
// };

rbtn.onclick = () => {
  if (index === wli.length) {
    wul.style.left = "0px";
    index = 0;
  }
  index++;
  if (index < wli.length) {
    wol.children[index].onclick();
  } else {
    animate(wul, -index * imgWidth);
    for (let i = 0; i < wol.children.length; i++) {
      let li = wol.children[i];
      li.className = "";
    }
    wol.children[0].className = "current";
  }
};

lbtn.onclick = () => {
  if (index === 0) {
    index = wli.length;
    wul.style.left = -index * imgWidth + "px";
  }
  index--;
  wol.children[index].onclick();
};

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    for (let i = 0; i < btn.length; i++) {
      btn[i].className = "";
    }
    this.className = "change";
  };
}
btn[1].className = "change";