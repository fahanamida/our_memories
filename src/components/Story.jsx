import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import "./Story.css";

function Story() {
  return (
    <section className="story-section" id="story">
      <div className="story-container">

        <motion.div
          className="story-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="story-label">
            <Sparkles size={14} /> OUR BEGINNING
          </span>

          <h2>
            Where Our <span>Story</span> Began
          </h2>

          <p>
            Some moments look ordinary at first,
            but slowly become the most beautiful memories.
          </p>
        </motion.div>

        <div className="story-content">

          {/* Photo Scrapbook */}
          <motion.div
            className="scrapbook-photo"
            initial={{ opacity: 0, rotate: -8, x: -50 }}
            whileInView={{ opacity: 1, rotate: -3, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="photo-tape"></div>

            <div className="photo-frame">
              <img
                src="/images/couples.png"
                alt="Our favourite memory"
              />

              <div className="photo-caption">
                <span>Our little world ♡</span>
                <big>November 29, 2025</big>
              </div>
            </div>

            <Heart className="photo-heart" size={25} />
          </motion.div>

          {/* Story Text */}
          <motion.div
            className="story-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="story-small-title">
              IT ALL STARTED WITH A SNAP
            </span>

            <h3>
              One day,
              <br />
              two strangers,
              <br />
              <span>one beautiful beginning.</span>
            </h3>

            <p>
              <b className="text-bold text-primary" style={{ fontSize: '2.2rem' }}>
                November 29, 2025    
              </b>

              <br></br>
              A date that became a little more special
              than an ordinary day.
            </p>

            <p>
              We didn't know what the future had planned.
              We were just two people crossing paths,
              unaware that this little moment would
              become a beautiful part of our story.
            </p>

            <div className="story-signature">
              With love, always <Heart size={16} />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="story-timeline"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-dot">
              <Heart size={15} />
            </div>

            <span className="timeline-date">NOVEMBER 29, 2025</span>

            <h4>The Day We Met</h4>

            <p>
              The beginning of a memory we will always cherish.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot">
              <Heart size={15} />
            </div>

            <span className="timeline-date"></span>

            <h4>One Year of Memories</h4>

            <p>
              One beautiful year since our paths crossed.
            </p>
          </div>
        </motion.div>

        <div className="story-ending">
          <span>And this is only the beginning...</span>
          <Heart size={17} />
        </div>

      </div>
    </section>
  );
}

export default Story;