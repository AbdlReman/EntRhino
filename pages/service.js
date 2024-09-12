// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import PageBanner from "../src/components/PageBanner";
// import Layouts from "../src/layouts/Layouts";

// const Service = () => {
//   const [services, setServices] = useState([]);

//   // Fetch services data from API
//   useEffect(() => {
//     fetch("api/servicesData") // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((data) => setServices(data));
//   }, []);

//   return (
//     <Layouts footer={2}>
//       <PageBanner title={"Our Services"} pageName="Services" />
//       <section className="services-area section-gap-top-less bg-color-grey">
//         <div className="container">
//           <div className="row justify-content-center service-loop">
//             {services.map((service, index) => (
//               <>
//                 <div key={index} className="col-lg-4 col-md-6 col-sm-8">
//                   <div className="fancy-content-box-two no-shadow mt-30">
//                     <div className="thumbnail">
//                       <img src={service.image} alt={service.title} />
//                     </div>
//                     <div className="box-content">
//                       {/* <div className="icon">
//                         <img src={service.image} alt={service.title} />
//                       </div> */}
//                       <div className="content">
//                         <h4 className="title">
//                           <Link href={`${service.slug}`}>
//                             <a>{service.title}</a>
//                           </Link>
//                         </h4>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layouts>
//   );
// };

// export default Service;
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Service = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;

  useEffect(() => {
    fetch("api/servicesData") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  // Calculate the indices of the services to display on the current page
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(services.length / servicesPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layouts footer={2}>
      <PageBanner title={"Our Services"} pageName="Services" />
      <section className="services-area section-gap-top-less bg-color-grey">
        <div className="container">
          <div className="row justify-content-center service-loop">
            {currentServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-8">
                <div className="fancy-content-box-two no-shadow mt-30">
                  <div className="thumbnail">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="box-content">
                    <div className="content">
                      <h4 className="title">
                        <Link href={`/${service.slug}`}>
                          <a>{service.title}</a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`page-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Service;
