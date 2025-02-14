import { Children } from "react";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>copyright by khushboo</footer>
      </body>
    </html>
  );
}
