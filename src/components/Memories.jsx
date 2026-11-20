import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./Memories.css";

const photos = [
  {
    image: "/public/images/mem1.png",
    caption: "My favourite us ♡",
    type: "OUR MOMENT"
  },
  {
    image: "/public/images/mem2.png",
    caption: "My favourite person",
    type: "MY AZHALOOO"
  },
  
];

function Memories() {
  return (
    <section className="memories-section" id="memories">

      {/* <div className="section-heading">
        <p>EVERY PICTURE TELLS A STORY</p>
        <h2>Our Memories <span>♡</span></h2>
        <div className="heading-line"></div>
      </div> */}

      <p className="memories-subtitle">
        A little gallery of our happiest moments...
      </p>

      <div className="memory-gallery">

        {photos.map((photo, index) => (

          <motion.div
            className="memory-polaroid"
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -4 : 4 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >

            <div className="memory-image">
              <img src={photo.image} alt={photo.caption} />
            </div>

            <div className="memory-info">
              <span>{photo.type}</span>
              <p>{photo.caption}</p>
              <Heart size={16} fill="#b31332" color="#b31332" />
            </div>

          </motion.div>

        ))}

      </div>

      <p className="memory-footer">
        "Collecting moments, not just pictures." ♡
      </p>

    </section>
  );
}

export default Memories;