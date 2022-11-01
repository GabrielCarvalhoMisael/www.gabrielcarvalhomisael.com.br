import { useState } from "react";
import { BaseBoard } from "../../components/BaseBoard";
import { BaseOption } from "../../components/BaseOption";
import { ButtonWhatsApp } from "../../components/ButtonWhatsApp";
import { Header } from "../../components/Header";
import { HeaderApresentation } from "../../components/HeaderApresentation";
import { Menu } from "../../components/Menu";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Carreira } from "../Carreira";
import { Diploma } from "../Diplomas";
import { Home } from "../Home";
import { Idiomas } from "../Idiomas";
import { Projetos } from "../Projetos";

export function Index() {
  const [option, setOption] = useState("home");
  const isSreen900 = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Header />
      {isSreen900 && <HeaderApresentation />}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu />
      </div>
      {option == "idiomas" ? (
        <div id="idiomas">
          <Idiomas />
        </div>
      ) : (
        ""
      )}
      {/* <Home />
      {/* <Projetos /> */}
      {/* <hr style={{ width: "85%", border: "solid 2px #000" }} />  */}
      {/* <div id="carreira">
        <Carreira />
      </div> */}
      {/* <hr style={{ width: "85%", border: "solid 2px #000" }} />
      <div id="diplomas" style={{ paddingTop: '30px' }}>
        <Diploma />
      </div>
      <hr style={{ width: "85%", border: "solid 2px #000" }} />
      <div id="idiomas">
        <Idiomas />
      </div>
      <hr style={{ width: "35%", border: "solid 2px #191970" }} />  */}
      <ButtonWhatsApp />
      <BaseOption />
      <BaseBoard />
    </>
  );
}
