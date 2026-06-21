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
      { threshold: 0.2 },
    );

    observer.observe(section);
  }

  const track = document.querySelector(".track");

  function moveCarousel() {
    const firstSlide = track.firstElementChild;

    track.style.transition = "transform 0.6s ease";
    track.style.transform = "translateX(-320px)";

    setTimeout(() => {
      track.style.transition = "none";
      track.appendChild(firstSlide);
      track.style.transform = "translateX(0)";
    }, 600);
  }

  setInterval(moveCarousel, 2500);

  // PROJECT OPENEN

  const cover01 = document.getElementById("brandguideCover");
  const brandguideProject = document.getElementById("brandguideProject");
  const sluitProject = document.getElementById("sluitProject");

  cover01.addEventListener("click", () => {
    brandguideProject.classList.add("open");
  });

  sluitProject.addEventListener("click", () => {
    brandguideProject.classList.remove("open");
  });
});
