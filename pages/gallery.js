import dynamic from "next/dynamic";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { getMetadata } from "./api/getMetadata";
import Head from "next/head";

const GalleryIsotop = dynamic(() => import("../src/components/GalleryIsotop"), {
  ssr: false,
});

const Gallery = () => {
  const page = "gallery"; // Set the page name here
  const { title, description } = getMetadata(page);
  return (
    <Layouts footer={2}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <PageBanner title={"Our Gallery"} bgnone pageName={"Gallery"} />
      <GalleryIsotop />
    </Layouts>
  );
};
export default Gallery;
