// import React, { useEffect, useState } from "react";
// import client from "./contentfulClient";

// const GalleryIsotop = () => {
//   const [galleryItems, setGalleryItems] = useState([]);

//   useEffect(() => {
//     const fetchGalleryItems = async () => {
//       try {
//         const response = await client.getEntries({
//           content_type: "gallery", // Replace with your Contentful content type ID
//           select: "fields.title,fields.image", // Fetch only title and image fields
//         });

//         const items = response.items.map((item) => ({
//           title: item.fields.title, // Use title as the key
//           imageUrl: item.fields.image.fields.file.url,
//         }));

//         setGalleryItems(items);
//       } catch (error) {
//         console.error("Error fetching gallery items:", error);
//       }
//     };

//     fetchGalleryItems();
//   }, []);

//   return (
//     <section className="gallery-section section-gap">
//       <div className="container">
//         <div className="row gallery-loop gallery-filter-item">
//           {galleryItems.map((item) => (
//             <div key={item.title} className="col-lg-4 col-sm-6 single-gallery">
//               <div className="gallery-item-two mt-30">
//                 <div className="gallery-thumbnail">
//                   <img src={item.imageUrl} alt={item.title} />
//                 </div>
//                 <div className="gallery-caption">
//                   <div>
//                     <h3 className="title">
//                       {/* <a href="#">{item.title}</a> */}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default GalleryIsotop;
import React, { useEffect, useState } from "react";
import client from "./contentfulClient";

const GalleryIsotop = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to show all items

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await client.getEntries({
          content_type: "gallery", // Replace with your Contentful content type ID
          select: "fields.title,fields.image,fields.category", // Fetch title, image, and category
        });

        const items = response.items.map((item) => ({
          title: item.fields.title,
          imageUrl: item.fields.image.fields.file.url,
          category: item.fields.category || "Uncategorized", // Handle category field
        }));

        // Extract unique categories
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

  // Filter gallery items based on the selected category
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
      </div>
    </section>
  );
};

export default GalleryIsotop;
