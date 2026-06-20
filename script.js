document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".OverMijSectie");

  if (section) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);
  }
  const track = document.querySelector(".track");

  function moveCarousel() {
    const firstSlide = track.firstElementChild;

    track.style.transition = "transform 0.6s ease";
    track.style.transform = "translateX(-320px)"; // 300 + 20 gap

    setTimeout(() => {
      track.style.transition = "none";
      track.appendChild(firstSlide);
      track.style.transform = "translateX(0)";
    }, 600);
  }

  setInterval(moveCarousel, 2500);
});
