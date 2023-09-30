export const metadata = {
  title: "What We Do | SAYDi",
  description:
    "We enhance effective and efficient education, promote democratic governance, gender inclusion, and social justice, SAYDi creates an interface between citizens and the government",
  metadataBase: new URL("https://saydi.org/about/what-we-do"),
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
    title: "What We Do | SAYDi",
    description:
      "We enhance effective and efficient education, promote democratic governance, gender inclusion, and social justice, SAYDi creates an interface between citizens and the government",
    url: "https://saydi.org/about/what-we-do",
    siteName: "What We Do at SAYDi",
    images: [
      {
        url: "../../public/imgs/about/saydi_whatwedo.png",
        width: 800,
        height: 600,
        alt: "What We Do | SAYDi",
      },
      {
        url: "../../public/imgs/about/saydi_whatwedo.png",
        width: 1800,
        height: 1600,
        alt: "What We Do | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "What We Do | SAYDi",
    description:
      "We enhance effective and efficient education, promote democratic governance, gender inclusion, and social justice, SAYDi creates an interface between citizens and the government",
    images: {
      url: "../../public/imgs/about/saydi_whatwedo.png",
      alt: "What We Do | SAYDi",
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
  bookmarks: ["https://saydi.org/about/what-we-do"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
