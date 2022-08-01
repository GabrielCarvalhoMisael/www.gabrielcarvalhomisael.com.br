import { BaseBoard } from "./components/BaseBoard"
import { BaseOption } from "./components/BaseOption"
import { ButtonWhatsApp } from "./components/ButtonWhatsApp"
import { Header } from "./components/Header"
import { HeaderApresentation } from "./components/HeaderApresentation"
import { Menu } from "./components/Menu"
import useMediaQuery from "./hooks/useMediaQuery"
import { Diploma } from "./screen/Diplomas"
import { Home } from "./screen/Home"
import { Idiomas } from "./screen/Idiomas"
import { useState } from 'react';
import { Carreira } from "./screen/Carreira"

function App() {


  const isSreen900 = useMediaQuery('(max-width: 900px)');

  return (
    <>
      <Header />
      {isSreen900 && <HeaderApresentation />}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Menu />
      </div>
      <Home />
      <hr style={{ width: "85%", border: "solid 2px #000" }} />
      <div>
        <Carreira />
      </div>
      <hr style={{ width: "85%", border: "solid 2px #000" }} />
      <div style={{ paddingTop: '30px' }}>
        <Diploma />
      </div>
      <hr style={{ width: "85%", border: "solid 2px #000" }} />
      <div>
        <Idiomas />
      </div>
      <hr style={{ width: "35%", border: "solid 2px #191970" }} />
      <ButtonWhatsApp />
      {/* <BaseOption /> */}
      <BaseBoard />
    </>
  )
}

export default App
