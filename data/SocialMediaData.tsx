import {
  BsEnvelope,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

export const SocialMediaData = [
  {
    href: "https://www.instagram.com/tomimacia",
    title: "Instagram",
    MediaIcon: BsInstagram,
  },
  {
    href: "https://github.com/tomimacia/",
    title: "Github",
    MediaIcon: BsGithub,
  },
  {
    href: "https://www.twitter.com/tomimacia",
    title: "Twitter",
    MediaIcon: BsTwitter,
  },
  {
    href: "https://wa.me/541161685995",
    title: "WhatsApp",
    MediaIcon: BsWhatsapp,
  },
  {
    href: "https://www.linkedin.com/in/tomas-eduardo-macia/",
    title: "LinkedIn",
    MediaIcon: BsLinkedin,
  },
];

export const MailData = {
  href: "mailto: tomasemacia@gmail.com",
  title: "Mail",
  MediaIcon: BsEnvelope,
  text: { English: "Get in touch!", Español: "Contáctame!" },
};
