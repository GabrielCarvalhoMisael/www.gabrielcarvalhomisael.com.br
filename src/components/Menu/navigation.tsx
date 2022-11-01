import { useState } from "react";
import { NavLinks } from "./navLinks";
import { Nav } from "./styles";

export function Navigation(props: any) {
  return (
    <Nav>
      <NavLinks />
    </Nav>
  );
}
