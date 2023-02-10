import { useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";
export default function ScrollToTop() {
  useEffect(() => {
    const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    const scrollToTop = () => {
      window.scrollY > 600
        ? scrollToTopBtn.classList.add("active")
        : scrollToTopBtn.classList.remove("active");
    };
    window.addEventListener("scroll", scrollToTop);
  }, []);
  return (
    <div className="scrollToTopBtn">
      <a href="#home">
        <BsChevronUp />
      </a>
    </div>
  );
}
