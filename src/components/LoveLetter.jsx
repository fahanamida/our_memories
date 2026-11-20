import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, X } from "lucide-react";
import "./LoveLetter.css";

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="letter-section" id="letter">

      <div className="letter-heading">
        <span>A LITTLE SOMETHING FOR YOU</span>
        <h2>This Letter is <i> for you</i></h2>
        <p>Some feelings are too special to be left unspoken.</p>
      </div>

      <AnimatePresence mode="wait">

        {!isOpen ? (
          <motion.div
            key="cover"
            className="letter-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(true)}
          >
            <div className="envelope">
              <div className="envelope-paper">
                <Mail size={30} />
                {/* <span>A LETTER FOR YOU</span> */}
                {/* <h3>To My Azhaloooiii</h3> */}
                {/* <p>With all my love, Fanooiii ♡</p> */}
              </div>

              <div className="envelope-flap"></div>

              <div className="envelope-seal">
                <Heart size={23} fill="currentColor" />
              </div>
            </div>
            
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="opened-letter"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <button
              className="letter-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close letter"
            >
              <X size={20} />
            </button>

            <div className="paper-content">
              <span className="paper-top">A LITTLE PIECE OF MY HEART</span>

              <Heart className="paper-heart" size={25} />

              <h2>My Dearest Azhaloooiii,</h2>

              <div className="letter-body">
                <p className="black-text">
                    Innu nammal parichayappettittu oru year aakunnu. <b>November 29</b> enna divasam nammade jeevithathil oru special day maathramalla,
                     ellaathinteyum oru thudakkam koodiyaanu.Oru time-il nammal
                   randuperum orumich jeevikkanam, marriage kazhikkanam ennoru aagraham 
                   undayirunnu. Pinneed eppozho aa aagraham venda ennu vechathaanu. 
                   Pakshe ippo veendum namukku randuperkkum orumich jeevikkanulla aagraham
                   undu. Athu orikkalum nadakkatha oru swapnam aakaruth, athu sadhikkanam
                   ennathaanu ente ettavum valiya aagraham
                </p>

                <p>
                  Enthokke adi undayalum, ethra valiya prashnangal vannalum nammal randuperum parasparam piriyathe,
                   kai vittupokathe orumich thanne nilkkanam. Karanam prashnangal ethra valuthayalum orikklaum piriyaruth.....
                </p>

                <p>
                 Orikkalum pratheekshikkatha oru parichayathil ninnum innu ithrayum aduth ethiyath thanne oru 
                 valiya kaaryamaanu. Athinu thanne aanu ettavum valiya thanks.
                </p>

                <p>
                 Enikku kittiya ettavum valiya, grateful gift aanu nee ennu venamenkil 
                 enikku parayan kazhiyum. ❤️
                </p>

                <p>
                 <b>November 29</b> nammade thudakkamaayirunnu. Iniyulla ella 
                 November 29-um nammal orumich aghoshikkan kayyanm............ ❤️
                </p>
              </div>

              <div className="letter-ending">
                <span>Forever yours,</span>
                <h3>Fanooiii ♡</h3>
              </div>

              <div className="paper-bottom">
                MADE WITH LOVE · NOVEMBER 29, 2026
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}

export default LoveLetter;
