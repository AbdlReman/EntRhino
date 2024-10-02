import dynamic from "next/dynamic";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { getMetadata } from "./api/getMetadata";
import Head from "next/head";
import VideoIsotop from "../src/components/VideoIsotop";

// const GalleryIsotop = dynamic(() => import("../src/components/GalleryIsotop"), {
//   ssr: false,
// });

const Video = () => {
  const page = "gallery"; // Set the page name here
  const { title, description, keywords } = getMetadata(page);
  return (
    <Layouts footer={2}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="entrhinoplasty.com/gallery" />
        <meta
          property="og:image"
          content="assets/img/ENT. & Rhinoplasty Hub.jpeg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="ENT & Rhinoplasty Hub" />
      </Head>
      <PageBanner title={"Videos"} />
      <VideoIsotop />
    </Layouts>
  );
};
export default Video;
