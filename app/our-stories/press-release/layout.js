export const metadata = {
  title: "Press Releases | SAYDi",
  description:
    "The hub for latest news and updates on our initiatives, events, and activities related to our thematic areas. Read our press releases to stay informed about our work and to learn about the impact we are making",
  metadataBase: new URL("https://saydi.org/our-stories/press-release"),
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
    title: "Press Releases | SAYDi",
    description:
      "The hub for latest news and updates on our initiatives, events, and activities related to our thematic areas. Read our press releases to stay informed about our work and to learn about the impact we are making",
    url: "https://saydi.org/our-stories/press-release",
    siteName: "SAYDi Press Releases",
    images: [
      {
        url: "../../public/imgs/products/product_img6.png",
        width: 800,
        height: 600,
        alt: "Press Releases | SAYDi",
      },
      {
        url: "../../public/imgs/products/product_img6.png",
        width: 1800,
        height: 1600,
        alt: "Press Releases | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Press Releases | SAYDi",
    description:
      "The hub for latest news and updates on our initiatives, events, and activities related to our thematic areas. Read our press releases to stay informed about our work and to learn about the impact we are making",
    images: {
      url: "../../public/imgs/products/product_img6.png",
      alt: "Press Releases | SAYDi",
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
  bookmarks: ["https://saydi.org/our-stories/press-release"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
