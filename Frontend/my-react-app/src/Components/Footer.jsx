import React from "react";

function Footer() {
  return (
    <div>
      <section
        style={{
          backgroundColor: "#2d221b",
          color: "white",
          padding: "40px 0",
        }}
      >
        <div className="container text-center">
          <h5>
            🍽 <strong>Canteen Manager</strong>
          </h5>
          <p className="small mb-0">
            © {new Date().getFullYear()} Canteen Manager. Making campus dining
            smarter and more efficient.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
