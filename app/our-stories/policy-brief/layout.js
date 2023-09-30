export const metadata = {
  title: "Policy Briefs | SAYDi",
  description:
    "Stay up-to-date with our research and analysis on critical policy issues related to Education for all; Accountability in Governance; Gender equity and social inclusion; and monitoring and evaluation of SDGs",
  metadataBase: new URL("https://saydi.org/our-stories/policy-brief"),
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
    title: "Policy Briefs | SAYDi",
    description:
      "Stay up-to-date with our research and analysis on critical policy issues related to Education for all; Accountability in Governance; Gender equity and social inclusion; and monitoring and evaluation of SDGs",
    url: "https://saydi.org/our-stories/policy-brief",
    siteName: "SAYDi Policy Briefs",
    images: [
      {
        url: "../../public/imgs/products/product_img9.png",
        width: 800,
        height: 600,
        alt: "Policy Briefs | SAYDi",
      },
      {
        url: "../../public/imgs/products/product_img9.png",
        width: 1800,
        height: 1600,
        alt: "Policy Briefs | SAYDi",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Policy Briefs | SAYDi",
    description:
      "Stay up-to-date with our research and analysis on critical policy issues related to Education for all; Accountability in Governance; Gender equity and social inclusion; and monitoring and evaluation of SDGs",
    images: {
      url: "../../public/imgs/products/product_img9.png",
      alt: "Policy Briefs | SAYDi",
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
  bookmarks: ["https://saydi.org/our-stories/policy-brief"],
  category: "ngo",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="">{children}</body>
    </html>
  );
}
