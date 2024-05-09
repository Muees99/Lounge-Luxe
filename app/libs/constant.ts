import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "new-arrivals", label: "New Arrivals" },
  { id: 2, link: "best-sellers", label: "Best Sellers" },
  { id: 3, link: "sales", label: "Sales" },
  { id: 4, link: "showroom", label: "Showroom" },
  // { id: 5, link: "cart", label: "cart" },
  { id: 6, link: "contact-us", label: "Contact Us" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  Connect: [
    {
      id: 1,
      link: "mailto:mueesalabi294@gmail.com",
      label: "Email: mueesalabi294@gmail.com",
    },
    {
      id: 2,
      link: "sms:muees99@icloud.com",
      label: "iMessage: muees99@icloud.com",
    },
    { id: 3, link: "tel:+2348101097866", label: "Mobile" },
  ],
  followmywork: [
    { id: 1, link: "https://github.com/Muees99", label: "GitHub" },
    { id: 2, link: "https://twitter.com/Muees__99", label: "Twitter" },
    {
      id: 3,
      link: "https://www.linkedin.com/in/muees-alabi-77b14b239/",
      label: "LinkedIn",
    },
  ],
  link: "",
  label: "",
};
