import React from "react";

const Location = () => {
  return (
    <section className="location">
      <h2 className="heading">HOURS & LOCATION</h2>
      <div className="location-info">
        <p>Bharani's Delight Restaurant</p>
        <p>GQ34+P48, Oddanchatram, Tamil Nadu 624619</p>
        <p>+91 9392550515 📞 </p>
        <p>Open Daily: 7am - 11:00pm</p>
        <p>
          <a
            href="https://www.google.com/maps/place/Bharani%E2%80%99s+Delight+Restaurant/@10.504282,77.7553279,15z/data=!4m6!3m5!1s0x3ba9fb004fd6263f:0x9f02afa21471381c!8m2!3d10.504282!4d77.7553279!16s%2Fg%2F11w21hynw1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </p>
      </div>

      <style jsx>{`
        .location {
          padding: 40px;
          background-color: #f8f8f8;
          text-align: center;
          margin-top: 40px;
          border-radius: 10px;
        }

        .location-heading {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #334155;
        }

        .location-info {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }

        .location-info p {
          margin: 5px 0;
        }

        .location-info a {
          color: #007bff;
          text-decoration: none;
        }

        .location-info a:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default Location;
