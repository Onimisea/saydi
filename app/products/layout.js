export const metadata = {
  title: "Our Products | SAYDi",
  description:
    "We engage critical stakeholders in the areas of Education, Gender, Governance and Accountability",
  metadataBase: new URL("https://saydi.org/products"),
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
    title: "Our Products | SAYDi",
    description:
      "We engage critical stakeholders in the areas of Education, Gender, Governance and Accountability",
    url: "https://saydi.org/products",
    siteName: "SAYDi Products",
    images: [
      {
        url: "../../public/imgs/products/product_img1.png",
        width: 800,
        height: 600,
        alt: "Our Products | SAYDi",
      },
      {
        url: "../../public/imgs/products/product_img1.png",
        width: 1800,
        height: 1600,
        alt: "Our Products | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Our Products | SAYDi",
    description:
      "We engage critical stakeholders in the areas of Education, Gender, Governance and Accountability",
    images: {
      url: "../../public/imgs/products/product_img1.png",
      alt: "Our Products | SAYDi",
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
  bookmarks: ["https://saydi.org/products"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
