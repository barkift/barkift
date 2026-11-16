document.addEventListener("DOMContentLoaded", () => {
  const blobs = document.querySelectorAll(".lava span");

  blobs.forEach((blob) => {
    const random = (min, max) =>
      Math.random() * (max - min) + min;

    blob.style.animationDelay = `${random(-20, 0)}s`;
    blob.style.animationDuration = `${random(10, 25)}s`;

    blob.style.transform = `
      translate(${random(-50, 50)}%, ${random(-40, 40)}%)
      rotate(${random(0, 360)}deg)
      scale(${random(0.8, 1.5)})
    `;

    blob.style.borderRadius = `
      ${random(30, 70)}% ${random(30, 70)}%
      ${random(30, 70)}% ${random(30, 70)}%
    `;
  });
});