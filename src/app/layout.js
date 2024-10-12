"use client";
import ThemeMaker from "@/components/items/Theme/ThemeMaker";
import "./globals.css";
import Navbar from "@/components/items/Navbar/Nav";
import ThemeChooser from "@/components/items/Theme/theme";
import Footer from "@/components/items/Footer/Footer";
import { store } from "@/components/Features/store";
import { Provider } from "react-redux";


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
