const navLinks = [
  {
    label: "Home",
    url: "/",
    is_active: pathname === "/" ? true : false,
  },
  {
    label: "Products",
    url: "/products",
    is_active: pathname === "/products" ? true : false,
  },
  {
    label: "About",
    url: "/about",
    is_active: pathname === "/about" ? true : false,
  },
  {
    label: "Opportunities",
    url: "/opportunities",
    is_active: pathname === "/opportunities" ? true : false,
  },
  {
    label: "Our Stories",
    url: "/our-stories",
    is_active: pathname === "/our-stories" ? true : false,
  },
  {
    label: "Donate",
    url: "/#donate-section",
    is_active: pathname === "/#donate-section" ? true : false,
  },
  {
    label: "Contact",
    url: "/#contact-section",
    is_active: pathname === "/#contact-section" ? true : false,
  },
];

export default navLinks;
