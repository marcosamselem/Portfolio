import React from "react"

const Footpage = () => {
  return(
  <main id="contact" style={{backgroundColor: "#255067", padding: "30px"}}>
      <h1 className="contact">Contact:</h1>
      <div className="footpage">
        <div className="adjust-logo-text">
          <i className="align-phone-logo" class="fa-solid fa-phone fa-xl"></i>
          <p>+34 690 229 576</p>
        </div>
        <div className="adjust-logo-text">
          <i class="fa-solid fa-envelope fa-xl"></i>
          <p>marcosamselem27@gmail.com</p>
        </div>
        <div className="mobile-logo">
          <a className="linkedin" style={{color: "white"}} href="https://www.linkedin.com/in/marcos-amselem-4a2026198"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
          <a className="github" style={{color: "white", marginRight: "80px"}} href="https://github.com/marcosamselem"><i class="fa-brands fa-github fa-2xl"></i></a>
        </div>
      </div>
  </main>
  );
}

export default Footpage
