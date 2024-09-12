import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layouts from "../src/layouts/Layouts";
import PageBanner from "../src/components/PageBanner";
import Link from "next/link";

const ServiceDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`/api/servicesData`)
        .then((response) => response.json())
        .then((data) => {
          const foundService = data.find((item) => item.slug === slug);
          setService(foundService);
        });
    }
  }, [slug]);

  if (!service) return <p>Loading...</p>;

  return (
    <Layouts footer={2}>
      <PageBanner title={service.title} />
      <>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 order-lg-last">
                <div className="service-details-wrapper">
                  <div className="service-thumbnail mb-50">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <h2 className="service-title">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-10 order-lg-first">
                <div className="service-sidebar">
                  <div className="widget departments-list">
                    <h3 className="widget-title">Other services</h3>
                    <ul>
                      <li>
                        <Link href="/rhinoplasty">
                          <a>
                            <span>
                              <i className="far fa-angle-right" />
                              Rhinoplasty
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tonsillectomy">
                          <a>
                            <span>
                              <i className="far fa-angle-right" />
                              Tonsillectomy
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/adenoidectomy">
                          <a>
                            <span>
                              <i className="far fa-angle-right" />
                              Adenoidectomy
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/septoplasty">
                          <a>
                            <span>
                              <i className="far fa-angle-right" />
                              Septoplasty
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/turbinoplasty">
                          <a>
                            <span>
                              <i className="far fa-angle-right" />
                              Turbinoplasty
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/biopsy">
                          <a>
                            <span>
                              <i className="far fa-angle-right" />
                              Biopsy
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/neck-dissection">
                          <a>
                            <span>
                              <i className="far fa-angle-right" />
                              Neck Dissection
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tympanoplasty">
                          <a>
                            <span>
                              <i className="far fa-angle-right" />
                              Tympanoplasty
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Area End ======*/}
        {/*====== Related Services Start ======*/}
      </>
    </Layouts>
    // <Layouts>
    //   <PageBanner title={service.title} pageName="Service Details" />
    //   <section className="service-details-area section-gap">
    //     <div className="container">
    //       <h2>{service.title}</h2>
    //       <img src={service.image} alt={service.title} />
    //       <p>{service.description}</p>
    //     </div>
    //   </section>
    // </Layouts>
  );
};

export default ServiceDetails;
