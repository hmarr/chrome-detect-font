import { ElementPicker } from "pick-dom-element";
import InfoPanel from "./info-panel";
import { splitByCommas } from "css-list-helpers";

const main = () => {
  const shadowContainer = document.createElement("div");
  shadowContainer.style.position = "absolute";
  shadowContainer.style.top = "0px";
  shadowContainer.style.left = "0px";
  document.body.appendChild(shadowContainer);

  const shadowRoot = shadowContainer.attachShadow({ mode: "open" });

  const styleReset = document.createElement("div");
  styleReset.style.all = "initial";
  shadowRoot.appendChild(styleReset);

  const picker = new ElementPicker();
  const infoPanel = new InfoPanel();

  let active = false;
  const activate = () => {
    if (active) {
      return;
    }
    active = true;

    picker.start({
      parentElement: styleReset,
      useShadowDOM: false,
      onClick: () => {
        picker.stop();
        infoPanel.removeFromDOM();
        active = false;
      },
      onHover: (el) => {
        const fonts = splitByCommas(getComputedStyle(el).fontFamily);

        const mainFont = document.createElement("span");
        mainFont.style.fontWeight = "700";
        mainFont.innerText = fonts[0] || "No font specified";

        const fallbackFonts = document.createElement("span");
        fallbackFonts.innerText = fonts
          .slice(1)
          .map((f) => `, ${f}`)
          .join("");

        infoPanel.setChildNodes([mainFont, fallbackFonts]);
      },
    });

    infoPanel.addToDOM(styleReset);
    infoPanel.setText("Hover over an element to see its font");
  };

  chrome.runtime.onMessage.addListener((_request, _sender, _sendResponse) => {
    activate();
  });
};

declare global {
  interface Window {
    __detectFontExtensionInitialized?: boolean;
  }
}

if (!window.__detectFontExtensionInitialized) {
  main();
  window.__detectFontExtensionInitialized = true;
}
