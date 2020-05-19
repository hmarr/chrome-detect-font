# Detect fonts in Chrome

[![Chrome Store](https://img.shields.io/chrome-web-store/v/mpljfgaicpdodihppfoolcididbkalce?color=blue&logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore/detail/mpljfgaicpdodihppfoolcididbkalce)

Click the icon in the browser toolbar to activate font detection mode, and hover over parts of the page to reveal which font is being used. The primary font will be shown in bold, followed by the fallback fonts. It just looks at the font-family CSS property, so it's not guaranteed to be correct.

## Why does this exist?
You can already discover fonts with the Chrome web inspector, but this extension makes doing so just one click away.

While there are similar extensions in the Chrome Store, they generally ask for permission to "read and change all data on the websites that you visit", whereas this extension only activates when you click the button, so doesn't require elevated permissions.

![Demo gif](https://user-images.githubusercontent.com/110275/79029506-9396e880-7b8c-11ea-8f7a-5a9a4f042507.gif)

## Installation options

1. Install via the [Chrome Store](https://chrome.google.com/webstore/detail/mpljfgaicpdodihppfoolcididbkalce)
2. Build by running `npm run prod:build`, then navigate to `chrome://extensions`, enable developer mode, and add the `dist/` directory as an unpacked extension.
