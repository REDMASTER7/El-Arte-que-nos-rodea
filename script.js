// Animación del botón principal
document.getElementById("btnDescubrir").addEventListener("click", () => {
  alert("El arte está más cerca de lo que imaginas 🎨✨");
  window.scrollTo({
    top: document.getElementById("influencia").offsetTop,
    behavior: "smooth"
  });
});

// Efecto de aparición al hacer scroll
const secciones = document.querySelectorAll(".seccion");

window.addEventListener("scroll", () => {
  secciones.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
