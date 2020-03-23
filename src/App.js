import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <img
            src="https://image.flaticon.com/icons/svg/2490/2490412.svg"
            alt="workplace"
          />
          <small>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
            >
              Smashicons
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </small>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
