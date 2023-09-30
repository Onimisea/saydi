export const metadata = {
  title: "Annual Report | SAYDi",
  description: "Summary of Annual Report",
  metadataBase: new URL("https://saydi.org/our-stories/annual-report"),
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
    title: "Annual Report | SAYDi",
    description: "Summary of Annual Report",
    url: "https://saydi.org/our-stories/annual-report",
    siteName: "SAYDi Annual Report",
    images: [
      {
        url: "../../public/imgs/about/whatwedo_img2.png",
        width: 800,
        height: 600,
        alt: "Annual Report | SAYDi",
      },
      {
        url: "../../public/imgs/about/whatwedo_img2.png",
        width: 1800,
        height: 1600,
        alt: "Annual Report | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Annual Report | SAYDi",
    description: "Summary of Annual Report",
    images: {
      url: "../../public/imgs/about/whatwedo_img2.png",
      alt: "Annual Report | SAYDi",
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
  bookmarks: ["https://saydi.org/our-stories/annual-report"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
