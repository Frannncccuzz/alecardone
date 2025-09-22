// src/assets/img/loghi/manifest.js
const modules = import.meta.glob("./*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  as: "url",
});

export const galleryImages = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url]) => {
    const fileName = path.replace(/\\/g, "/").split("/").pop();
    return {
      src: url,
      alt: fileName
        ? fileName.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")
        : "image",
    };
  });

// utile in dev
if (import.meta.env.DEV) {
  console.log("loghi keys:", Object.keys(modules));
}
