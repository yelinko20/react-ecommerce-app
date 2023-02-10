import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="container footer">
      <p>
        &#169; Copyright 2023 Minim. Website Thoughtfully designed by{" "}
        <a href="">Ye Lin Ko</a>
      </p>
      <div className="footer_socials">
        <BsInstagram />
        <BsFacebook />
        <BsTwitter />
      </div>
    </div>
  );
}
