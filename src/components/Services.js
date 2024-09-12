import React, { useEffect, useState } from "react";
import Link from "next/link";
const Services = () => {
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
    <>
      <section className="service-section bg-color-grey section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-heading text-center mb-40">
                <span className="tagline">Popular Services</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center service-loop">
            {currentServices.slice(0, 6).map((service, index) => (
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
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center mb-40">
            <div className="col-lg-5 col-md-6">
              <div className="section-heading">
                <span className="tagline"></span>
                <h2 className="title">
                  Visit and explore our range of services
                </h2>
              </div>
            </div>
            <div className="col-auto">
              <Link href="/service">
                <a
                  className="template-btn template-btn-primary mt-sm-30 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  See More services <i className="far fa-plus" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="doctors-section section-gap"></section>
    </>
  );
};

export default Services;
