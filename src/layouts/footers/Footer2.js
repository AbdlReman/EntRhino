// import React from "react";
// import Newlatter from "../../components/Newlatter";
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlineEmail } from "react-icons/md";
// import { LuPhone } from "react-icons/lu";
// import Link from "next/link";

// const Footer2 = ({ noNewsletters }) => {
//   return (
//     <footer
//       className={`template-footer template-footer-white ${
//         noNewsletters ? "" : "have-cta-boxes-two"
//       }`}
//     >
//       {!noNewsletters && (
//         <div className="cta-boxes-wrapper">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-4 col-md-6">
//                 <div
//                   className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
//                   style={{
//                     backgroundImage:
//                       "url(assets/img/cta-img/cta-boxed-2-1.png)",
//                   }}
//                 >
//                   <h2 className="cta-title">We're Ready To Help You</h2>
//                   <Link
//                     href="/contact"
//                     className="template-btn template-btn-bordered"
//                   >
//                     <span>
//                       Contact us <i className="far fa-plus" />
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <div
//                   className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
//                   style={{
//                     backgroundImage:
//                       "url(assets/img/cta-img/cta-boxed-2-2.png)",
//                   }}
//                 >
//                   <h2 className="cta-title">Make Appointment Online (24/7)</h2>
//                   <Link
//                     href="/contact"
//                     className="template-btn template-btn-bordered"
//                   >
//                     <span>
//                       Appointment <i className="far fa-plus" />
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-8">
//                 <div
//                   className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
//                   style={{
//                     backgroundImage:
//                       "url(assets/img/cta-img/cta-boxed-2-3.png)",
//                   }}
//                 >
//                   <h2 className="cta-title">
//                     Looking for Doctors For Treatment
//                   </h2>
//                   <Link
//                     href="/contact"
//                     className="template-btn template-btn-bordered"
//                   >
//                     <span>
//                       Find Doctor <i className="far fa-plus" />
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="footer-inner bg-color-primary">
//         <div className="container">
//           <div className="footer-widgets">
//             <div className="row">
//               <div className="col-lg-3 col-md-8">
//                 <div className="widget text-widget">
//                   <div className="footer-logo">
//                     <img src="assets/img/logo-white.png" alt="Medibo" />
//                   </div>
//                   <p>
//                     Our expert team specializes in diagnosing and treating ear,
//                     nose, and throat conditions
//                   </p>
//                   <ul className="contact-list">
//                     <ul className="contact-list">
//                       <li>
//                         <Link href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
//                           <span>
//                             <CiLocationOn id="footer2icon" />
//                             ENT &amp; Rhinoplasty Hub, Saidpur Road
//                           </span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="mailto:support@gmail.com">
//                           <span>
//                             <MdOutlineEmail id="footer2icon" />
//                             support@entrhinoplasty.com
//                           </span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="tel:03005843974">
//                           <span>
//                             <LuPhone id="footer2icon" />
//                             0300 584 3974
//                           </span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="row justify-content-center">
//                   <div className="col-xl-5 col-sm-6">
//                     <div className="d-flex justify-content-lg-center">
//                       <div className="widget nav-widget">
//                         <h4 className="widget-title">Popular Services</h4>
//                         <ul className="nav-links">
//                           <li>
//                             <Link href="/rhinoplasty">
//                               <span>Rhinoplasty</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/tonsillectomy">
//                               <span>Tonsillectomy</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/adenoidectomy">
//                               <span>Adenoidectomy</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/septoplasty">
//                               <span>Septoplasty</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/turbinoplasty">
//                               <span>Turbinoplasty</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/biopsy/">
//                               <span>Biopsy</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-xl-5 col-sm-6">
//                     <div className="d-flex justify-content-lg-center">
//                       <div className="widget nav-widget">
//                         <h4 className="widget-title">Pages</h4>
//                         <ul className="nav-links">
//                           <li>
//                             <Link href="/">
//                               <span>Home</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/service">
//                               <span>Services</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/about">
//                               <span>About</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/gallery">
//                               <span>Gallery</span>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link href="/contact">
//                               <span>Contact</span>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <Newlatter />
//             </div>
//           </div>
//           <div className="copyright-area">
//             <p>
//               © 2024 <a href="#">EntRhinoplasty</a>. All Rights Reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer2;
import React from "react";

const Footer2 = () => {
  return <div>Footer2</div>;
};

export default Footer2;
