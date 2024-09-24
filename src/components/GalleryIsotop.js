import React, { useEffect, useState } from "react";
import client from "./contentfulClient";

const GalleryIsotop = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await client.getEntries({
          content_type: "gallery", // Replace with your Contentful content type ID
          select: "fields.title,fields.image", // Fetch only title and image fields
        });

        const items = response.items.map((item) => ({
          title: item.fields.title, // Use title as the key
          imageUrl: item.fields.image.fields.file.url,
        }));

        setGalleryItems(items);
      } catch (error) {
        console.error("Error fetching gallery items:", error);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <section className="gallery-section section-gap">
      <div className="container">
        <div className="row gallery-loop gallery-filter-item">
          {galleryItems.map((item) => (
            <div key={item.title} className="col-lg-4 col-sm-6 single-gallery">
              <div className="gallery-item-two mt-30">
                <div className="gallery-thumbnail">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="gallery-caption">
                  <div>
                    <h3 className="title">
                      {/* <a href="#">{item.title}</a> */}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="read-more text-center mt-60">
          <a href="#" className="template-btn">
            View More Gallery <i className="far fa-plus"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default GalleryIsotop;
