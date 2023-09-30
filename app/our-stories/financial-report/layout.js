export const metadata = {
  title: "Financial Report | SAYDi",
  description: "Summary of Financial Report",
  metadataBase: new URL("https://saydi.org/our-stories/financial-report"),
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
    title: "Financial Report | SAYDi",
    description: "Summary of Financial Report",
    url: "https://saydi.org/our-stories/financial-report",
    siteName: "SAYDi Financial Report",
    images: [
      {
        url: "../../public/imgs/about/whatwedo_img2.png",
        width: 800,
        height: 600,
        alt: "Financial Report | SAYDi",
      },
      {
        url: "../../public/imgs/about/whatwedo_img2.png",
        width: 1800,
        height: 1600,
        alt: "Financial Report | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Financial Report | SAYDi",
    description: "Summary of Financial Report",
    images: {
      url: "../../public/imgs/about/whatwedo_img2.png",
      alt: "Financial Report | SAYDi",
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
  bookmarks: ["https://saydi.org/our-stories/financial-report"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
