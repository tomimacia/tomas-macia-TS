import {
  BsEnvelope,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';
export const SocialMediaData = [
  {
    href: 'https://www.instagram.com/tomimacia',
    title: 'Instagram',
    iconColor: ['#5851DB', '#C13584'],
    MediaIcon: BsInstagram,
  },
  {
    href: 'https://github.com/tomimacia/',
    title: 'Github',
    iconColor: ['#171515', '#dddddd'],
    MediaIcon: BsGithub,
  },
  {
    href: 'https://www.x.com/tomimacia',
    title: 'X',
    iconColor: ['#171515', '#00acee'],
    MediaIcon: RiTwitterXLine,
  },
  {
    href: 'https://www.linkedin.com/in/tomas-eduardo-macia/',
    title: 'LinkedIn',
    iconColor: ['#0072b1', '#0072b1'],
    MediaIcon: BsLinkedin,
  },
];

export const ContactData = [
  {
    href: 'https://wa.me/541161685995',
    iconColor: ['#075E54', '#25D366'],
    title: 'WhatsApp',
    MediaIcon: BsWhatsapp,
  },
  {
    href: 'mailto: tomasemacia@gmail.com',
    iconColor: ['#808080', '#e3e3e3'],
    title: 'Mail',
    MediaIcon: BsEnvelope,
  },
];

export const ContactText = { English: 'Get in touch!', Español: 'Contáctame!' };
