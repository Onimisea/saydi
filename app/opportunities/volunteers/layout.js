export const metadata = {
  title: "Become a Volunteer | SAYDi",
  description:
    "Join the train of youths who are making a great impact in their communities and state through our volunteering program",
  metadataBase: new URL("https://saydi.org/opportunities/volunteers"),
  applicationName: "SAYDi",
  authors: [{ name: "Onimisea", url: "https://onimisea.com" }],
  colorScheme: "light",
  creator: "Onimisea",
  publisher: "SAYDi",
  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    title: "Become a Volunteer | SAYDi",
    description:
      "Join the train of youths who are making a great impact in their communities and state through our volunteering program",
    url: "https://saydi.org/opportunities/volunteers",
    siteName: "Become a Volunteer at SAYDi",
    images: [
      {
        url: "../../public/imgs/saydi_careers.png",
        width: 800,
        height: 600,
        alt: "Become a Volunteer | SAYDi",
      },
      {
        url: "../../public/imgs/saydi_careers.png",
        width: 1800,
        height: 1600,
        alt: "Become a Volunteer | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Become a Volunteer | SAYDi",
    description:
      "Join the train of youths who are making a great impact in their communities and state through our volunteering program",
    images: {
      url: "../../public/imgs/saydi_careers.png",
      alt: "Become a Volunteer | SAYDi",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    bing: "bing",
  },

  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  bookmarks: ["https://saydi.org/opportunities/volunteers"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
