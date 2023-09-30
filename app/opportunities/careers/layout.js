export const metadata = {
  title: "Careers | SAYDi",
  description:
    "Advancing the crusades of Education, Gender, Human Capital Development, Civic Training, and Inclusive ecosystem where everyone achieves their dreams",
  metadataBase: new URL("https://saydi.org/opportunities/careers"),
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
    title: "Careers | SAYDi",
    description:
      "Advancing the crusades of Education, Gender, Human Capital Development, Civic Training, and Inclusive ecosystem where everyone achieves their dreams",
    url: "https://saydi.org/opportunities/careers",
    siteName: "Careers at SAYDi",
    images: [
      {
        url: "../../public/imgs/about/whatwedo_img5.png",
        width: 800,
        height: 600,
        alt: "Careers | SAYDi",
      },
      {
        url: "../../public/imgs/about/whatwedo_img5.png",
        width: 1800,
        height: 1600,
        alt: "Careers | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Careers | SAYDi",
    description:
      "Advancing the crusades of Education, Gender, Human Capital Development, Civic Training, and Inclusive ecosystem where everyone achieves their dreams",
    images: {
      url: "../../public/imgs/about/whatwedo_img5.png",
      alt: "Careers | SAYDi",
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
  bookmarks: ["https://saydi.org/opportunities/careers"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
