import React from "react";

const ScrollToTopButton = ({ data }) => {
  const scrollToTop = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const linkStyle = {
    cursor: "pointer",
  };
  return (
    <a
      className="nav-link"
      onClick={scrollToTop}
      aria-current="page"
      style={linkStyle}>
      {data}
    </a>
  );
};

ScrollToTopButton.defaultProps = {
  data: "Home",
};
export default ScrollToTopButton;
