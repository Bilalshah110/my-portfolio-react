import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import SocialLink from "./SocialLink";

function MyFooter() {
  const allSocialLinks = [
    { url: "https://www.linkedin.com/in/bilalshah110", icon: <FaLinkedinIn /> },
    { url: "https://github.com/Bilalshah110/", icon: <BsGithub /> },
    {
      url: "https://www.instagram.com/bilal_shah_photography/",
      icon: <GrInstagram />,
    },
    { url: "https://facebook.com/bscb12", icon: <FaFacebookF /> },
    { url: "https://twitter.com/bilalimperor", icon: <FaTwitter /> },
    { url: "https://www.youtube.com/bilalshahvlogs", icon: <FaYoutube /> },
  ];
  return (
    <footer className="upper-footer">
      <div className="py-5 container">
        <h6 className="pb-2">Social links</h6>
        {allSocialLinks.map((socialLink, i) => (
          <SocialLink key={i} socialLink={socialLink} />
        ))}
      </div>
      <div className="lower-footer py-3">Copyright @ Bilal Hassan</div>
    </footer>
  );
}

export default MyFooter;
