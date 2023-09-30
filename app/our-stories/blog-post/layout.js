export const metadata = {
  title: "Blog Posts | SAYDi",
  description:
    "Our blog provides an opportunity to share our thoughts, opinions, and experiences on critical issues related aimed at stimulatimg dialogue, creating awareness, and promotion positive change in our areas of interest and beyond",
  metadataBase: new URL("https://saydi.org/our-stories/blog-post"),
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
    title: "Blog Posts | SAYDi",
    description:
      "Our blog provides an opportunity to share our thoughts, opinions, and experiences on critical issues related aimed at stimulatimg dialogue, creating awareness, and promotion positive change in our areas of interest and beyond",
    url: "https://saydi.org/our-stories/blog-post",
    siteName: "SAYDi Blog Posts",
    images: [
      {
        url: "../../public/imgs/products/product_img1.png",
        width: 800,
        height: 600,
        alt: "Blog Posts | SAYDi",
      },
      {
        url: "../../public/imgs/products/product_img1.png",
        width: 1800,
        height: 1600,
        alt: "Blog Posts | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Blog Posts | SAYDi",
    description:
      "Our blog provides an opportunity to share our thoughts, opinions, and experiences on critical issues related aimed at stimulatimg dialogue, creating awareness, and promotion positive change in our areas of interest and beyond",
    images: {
      url: "../../public/imgs/products/product_img1.png",
      alt: "Blog Posts | SAYDi",
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
  bookmarks: ["https://saydi.org/our-stories/blog-post"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
