import AppProvider from "@/context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import localFont from "next/font/local";

const montserrat = localFont({
  src: "../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-montserrat",
});

const montserrat_italic = localFont({
  src: "../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-montserrat-italic",
});

const gillsans_bold = localFont({
  src: "../public/fonts/GillSansBold.otf",
  display: "swap",
  variable: "--font-gillsans-bold",
});

const gillsans_heavy = localFont({
  src: "../public/fonts/GillSansHeavy.otf",
  display: "swap",
  variable: "--font-gillsans-heavy",
});

export const metadata = {
  title: "SAYDi | Empowering African Youths",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${montserrat_italic.variable} ${gillsans_bold.variable} ${gillsans_heavy.variable}`}
    >
      <AppProvider>
        <ToastContainer />
        <body className="">{children}</body>
      </AppProvider>
    </html>
  );
}
