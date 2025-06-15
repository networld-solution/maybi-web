var acc = document.getElementsByClassName("accordion-item");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        const parentEl = acc[j].parentElement;
        parentEl.classList.remove("active");
        let otherItems = parentEl.children[1];
        otherItems.style.height = 0;
      }
    }

    this.parentElement.classList.toggle("active");
    let subItem = this.parentElement.children[1];
    if (this.parentElement.classList.contains("active")) {
      subItem.style.height = subItem.scrollHeight + "px";
    } else {
      subItem.style.height = 0;
    }
  });
}