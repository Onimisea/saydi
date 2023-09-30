export const metadata = {
  title: "About Us | SAYDi",
  description:
    "Saving African Youths Dream Initiative (SAYDi) is a non-governmental organization in West Africa, Nigeria with the mandate to promote equitable quality education; campaign against gender disparity and civic engagement apathy; and advocacy for the achievement of Sustainable Development Goals (SDGs) in immediate communities and beyond",
  metadataBase: new URL("https://saydi.org/about/about-us"),
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
    title: "About Us | SAYDi",
    description:
      "Saving African Youths Dream Initiative (SAYDi) is a non-governmental organization in West Africa, Nigeria with the mandate to promote equitable quality education; campaign against gender disparity and civic engagement apathy; and advocacy for the achievement of Sustainable Development Goals (SDGs) in immediate communities and beyond",
    url: "https://saydi.org/about/about-us",
    siteName: "About SAYDi",
    images: [
      {
        url: "../../public/imgs/about/saydi_about.png",
        width: 800,
        height: 600,
        alt: "About Us | SAYDi",
      },
      {
        url: "../../public/imgs/about/saydi_about.png",
        width: 1800,
        height: 1600,
        alt: "About Us | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "About Us | SAYDi",
    description:
      "Saving African Youths Dream Initiative (SAYDi) is a non-governmental organization in West Africa, Nigeria with the mandate to promote equitable quality education; campaign against gender disparity and civic engagement apathy; and advocacy for the achievement of Sustainable Development Goals (SDGs) in immediate communities and beyond",
    images: {
      url: "../../public/imgs/about/saydi_about.png",
      alt: "About Us | SAYDi",
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
  bookmarks: ["https://saydi.org/about/about-us"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
