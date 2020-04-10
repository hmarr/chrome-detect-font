# Chrome extension for quickly showing which fonts are in use

Click the icon in the browser toolbar to activate font detection mode, and
hover over parts of the page to reveal which font is being used.

Yes you can do this with the Chrome web inspector, but this is just one click
away.

## Installation options

1. Install via the [Chrome Store](https://chrome.google.com/webstore/detail/mpljfgaicpdodihppfoolcididbkalce)
2. Build by running `npm run prod:build`, then navigate to `chrome://extensions`, enable developer mode, and add the `dist/` directory as an unpacked extension.
