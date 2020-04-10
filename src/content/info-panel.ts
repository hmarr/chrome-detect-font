export default class InfoPanel {
  el: HTMLDivElement;

  constructor() {
    this.el = document.createElement("div");
    this.el.className = "_ext-element-info-panel";
    this.el.style.background = "rgb(51, 103, 214)";
    this.el.style.border = "5px solid rgb(51, 103, 214)";
    this.el.style.borderRadius = "5px";
    this.el.style.boxShadow = [
      "0 0 0 5px #ffffff",
      "0 0 5px 5px rgb(0, 0, 0, 0.2)",
    ].join(", ");
    this.el.style.boxSizing = "border-box";
    this.el.style.color = "#ffffff";
    this.el.style.cursor = "crosshair";
    this.el.style.fontFamily = "system-ui, sans-serif";
    this.el.style.fontSize = "15px";
    this.el.style.fontWeight = "400";
    this.el.style.padding = "10px";
    this.el.style.pointerEvents = "none";
    this.el.style.textAlign = "center";

    this.el.style.position = "fixed";
    this.el.style.left = "50%";
    this.el.style.top = "50px";
    this.el.style.width = "50%";
    this.el.style.transform = "translateX(-50%)";
    this.el.style.zIndex = "2147483647";
  }

  setChildNodes(children: Node[]) {
    this.el.textContent = "";
    this.el.append(...children);
  }

  setText(text: string) {
    this.el.innerText = text;
  }

  addToDOM() {
    if (!document.body.contains(this.el)) {
      document.body.appendChild(this.el);
    }
  }

  removeFromDOM() {
    this.el.remove();
  }
}
