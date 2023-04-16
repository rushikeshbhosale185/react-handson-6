import React from "react";
import Nav from "./Nav";
import cirt from "./cirtificate.webp";

const ContactUs = () => {
  return (
    <div>
      <Nav />
      <h1>Contact Us</h1>
      <img src={cirt} className="cirt" alt="logo" />
      <h2>PREPBYTES TECHNOLOGIES PRIVATE LIMITED</h2>
      <h4>
        Prepbytes Technologies Private Limited is a private limited company
        based in Gurgaon, India and it was incorporated officially on
        19/02/2019. The corporate identification number (CIN) of this company as
        per the official records is U80903HR2019PTC078628 and the company
        registration number is 078628. Its email address is aditya@prepbytes.com
        and its registered office address is House No. 766, Sector-21, Pocket E,
        Gurugram GURUGRAM ,Gurgaon,Haryana,India,122016. Prepbytes Technologies
        Private Limited is a mca provider company with the industrial and NIC /
        SIC code of 80903 as per the official records. The company was
        registered in the year 2019 and its authorized share capital is INR
        100,000 and paid up capital is INR 100,000. The company's business is
        based in the city of Gurgaon. The company is duly registered at
        Registrar of Companies, Delhi (RoC-Delhi) and is classified as the
        Non-govt company. The major activities of this company as per the listed
        official records are #Activities of the individuals providing
        tuition#,Educational service by way of individual imparting
        tuitions,Imparting of tuitions by individual, educational service.
      </h4>
    </div>
  );
};

export default ContactUs;
