import React, { useEffect, useState } from "react";
import client from "./contentfulClient";

const VideoIsotop = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await client.getEntries({
          content_type: "videos", // Contentful content type ID
          select: "fields.title,fields.video,fields.category",
        });

        const items = response.items.map((item) => ({
          title: item.fields.title,
          videoUrl: item.fields.video.fields.file.url, // Ensure the URL is correct
          category: item.fields.category || "Uncategorized",
        }));

        const allCategories = [
          "All",
          ...new Set(items.map((item) => item.category)),
        ];
        setCategories(allCategories);
        setGalleryItems(items);
      } catch (error) {
        console.error("Error fetching gallery items:", error);
      }
    };

    fetchGalleryItems();
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="gallery-section section-gap">
      <div className="container">
        {/* Category Filter Buttons */}
        <div className="category-filter text-center mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row gallery-loop gallery-filter-item">
          {filteredItems.map((item) => (
            <div key={item.title} className="col-lg-4 col-sm-6 single-gallery">
              <div className="gallery-item-two mt-30">
                <video
                  src={item.videoUrl}
                  controls
                  preload="metadata"
                  muted={false}
                  autoPlay={false}
                  width="100%"
                  onCanPlay={(e) => e.target.play()}
                >
                  Your browser does not support the video tag.
                </video>

                {/*  */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoIsotop;
