import React from "react";
import Timestamp from "./timestamp";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {<Timestamp />}
      </body>
    </html>
  );
}

export default RootLayout;
