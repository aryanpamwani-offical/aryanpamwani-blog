"use client";
import ThemeMaker from "@/components/items/Theme/ThemeMaker";
import "./globals.css";
import Navbar from "@/components/items/Navbar/Nav";
import ThemeChooser from "@/components/items/Theme/theme";
import Footer from "@/components/items/Footer/Footer";

import { Provider } from "react-redux";
import { store } from "@/components/Features/store/store";
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalyticsTag from "@/components/items/GoogleAnalytics/GoogleAnalytics";


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      
      <html lang="en">
      <meta name="msvalidate.01" content="718C0BDAE2F6792C99AEDECD101D8077" />
        <body>
          <ThemeMaker>
          <GoogleAnalyticsTag
containerId={"GTM-M66VDKVZ"}
/>
            <Navbar />
            <div className="relative top-36 overflow-hidden">
              <div className="flex justify-center flex-col w-full m-auto items-center">
                {children}
                <Toaster/>
              </div>
              <ThemeChooser />
              <Footer />
            </div>
          </ThemeMaker>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M66VDKVZ"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

        </body>
      </html>
    </Provider>

  );
}
