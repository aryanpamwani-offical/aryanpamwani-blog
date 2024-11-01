"use client";
import ThemeMaker from "@/components/items/Theme/ThemeMaker";
import "./globals.css";
import Navbar from "@/components/items/Navbar/Nav";
import ThemeChooser from "@/components/items/Theme/theme";
import Footer from "@/components/items/Footer/Footer";

import { Provider } from "react-redux";
import { store } from "@/components/Features/store/store";
import { Toaster } from "@/components/ui/toaster";


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      
      <html lang="en">
        <body>
          <ThemeMaker>
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
        </body>
      </html>
    </Provider>

  );
}
