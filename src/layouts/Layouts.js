import React, { Fragment, useEffect } from "react";
// import ScrollTop from "../components/ScrollTop";
import { animation, niceSelect, progressBar, stickyNav } from "../utils";
import Footer from "./footers/Footer";
import HeadersLayouts from "./headers/HeadersLayouts";
import WhatsAppButton from "../components/WhatsAppButton";

const Layouts = ({
  children,
  footer,
  headerTopbar,
  noNewsletters,
  position,
  noheader,
  noFooter,
}) => {
  useEffect(() => {
    animation();
    niceSelect();
    stickyNav();
    progressBar();
  }, []);

  return (
    <Fragment>
      {!noheader && (
        <HeadersLayouts headerTopbar={headerTopbar} position={position} />
      )}
      {children}
      {!noFooter && <Footer footer={footer} noNewsletters={noNewsletters} />}
      {/* <ScrollTop /> */}
      <WhatsAppButton />
    </Fragment>
  );
};
export default Layouts;
