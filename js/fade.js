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
let index = 0;

function liClick() {
  for (let i = 0; i < wol.children.length; i++) {
    let li = wol.children[i];
    li.className = "";
    wli[i].className = "";
  }
  this.className = "current";
  let liIndex = parseInt(this.getAttribute("index"));
  wli[liIndex].className = "wwf";
  index = liIndex;
}

for (let i = 0; i < wli.length; i++) {
  let li = document.createElement("li");
  wol.appendChild(li);
  li.onclick = liClick;
  li.setAttribute("index", i);
}
wol.children[0].className = "current";
wli[0].className = "wwf";

rbtn.onclick = () => {
  wol.children[(index + 1) % wli.length].onclick();
};

lbtn.onclick = () => {
  wol.children[(index + wli.length - 1) % wli.length].onclick();
};

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    for (let i = 0; i < btn.length; i++) {
      btn[i].className = "";
    }
    this.className = "change";
  };
}
btn[2].className = "change";