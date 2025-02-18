Photo Extension I created for Iris in Summer 2024
=======
# Iris Photo Extension

Used Chrome Extension Boilerplate by Jonghakseo: https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite

## How to Run This on Your Device

1. Clone this repository.

2. Install pnpm globally: `npm install -g pnpm` (check your node version >= 18.12.0)

3. Run `pnpm install`

## Next Steps (Based on Your Browser)

### For Chrome

1. Run:
    - Dev: `pnpm dev`
      - When you run on Windows, you should run as administrator [(Issue#456)](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/issues/456)
    - Prod: `pnpm build`

2. Open in browser - `chrome://extensions`

3. Check - `Developer mode`

4. Find and Click - `Load unpacked extension`

5. Select - `dist` folder at root

### For Firefox

1. Run:
    - Dev: `pnpm dev:firefox`
    - Prod: `pnpm build:firefox`

2. Open in browser - `about:debugging#/runtime/this-firefox`

3. Find and Click - `Load Temporary Add-on...`

4. Select - `manifest.json` from `dist` folder at root

> *Remember in Firefox you add the plugin in temporary mode, which means it will disappear after closing the browser. You must repeat this process on the next launch.*

For more info, look at the official boilerplate repo linked above.

## About This Extension

This extension is a photo extension that allows you to display photos whenever you open a new tab. The extension randomly chooses from the photos in your collection for each new tab opened, and there is also a change photo button that will change to another random photo each time it is pressed.

### Managing Your Photo Collection

To control your photo collection, you can go to the options page of the extension. Here, you can add and delete photos easily from your own computer's file system. 

Please note that this extension uses Chrome local storage which has a maximum storage of 10MB. For this reason, it's highly recommended that you optimize your photos with something like ImageOptim before adding them so you can maximize the number of photos added. As an estimate, this storage limit should allow around 30-50 photos to be added to the collection, depending on how large the photos are.

### Future Plans
In the future, I plan to potentially migrate this to Firebase cloud storage which would allow a much greater number of photos to be added to the collection.
