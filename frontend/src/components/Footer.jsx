import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Bharani's Delight Restaurant</div>
          <div className="right">
            <p>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/marker.png"
                alt="Location Icon"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              <a
                href="https://www.google.com/maps/place/Bharani%E2%80%99s+Delight+Restaurant/@10.504282,77.7553279,15z/data=!4m6!3m5!1s0x3ba9fb004fd6263f:0x9f02afa21471381c!8m2!3d10.504282!4d77.7553279!16s%2Fg%2F11w21hynw1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                GQ34+P48, Oddanchatram, Tamil Nadu 624619
              </a>
            </p>
            <p>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/clock.png"
                alt="Clock Icon"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              Open: 07:00 AM - 11:00 PM
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>
              <img
                src="https://w7.pngwing.com/pngs/842/386/png-transparent-email-computer-icons-message-email-miscellaneous-angle-text.png"
                alt="Email Icon"
                style={{ width: "40px", height: "20px", marginRight: "1px" }}
              />
              Email:{" "}
              <a href="mailto:askbharaninow@gmail.com">
                askbharaninow@gmail.com
              </a>
            </p>
          </div>
          <div className="right">
            <p>
              <img
                src="https://png.pngtree.com/png-vector/20220924/ourmid/pngtree-phone-flat-orange-color-icon-speaking-vector-phone-number-vector-png-image_19940278.png"
                alt="Phone Icon"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              Phone: +91 9392550515
            </p>
          </div>
          <div className="center">
            <a
              href="https://www.instagram.com/bharanisdelight/?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt="Instagram Logo"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
