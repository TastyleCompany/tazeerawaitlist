import "./footer.css";
import { motion } from "framer-motion";

function Footer() {
  // Kita simpan transisi standar kamu agar kode lebih bersih
  const smoothTransition = { duration: 0.8, ease: [0.4, 0, 0.2, 1] };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }} // margin agar animasi mulai sebelum benar-benar di ujung bawah
      transition={smoothTransition}
    >
      <div className="container footer-wrap">
        <motion.div
          className="footer-left"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: 0.2 }}
        >
          <div className="footer-brand">TAZEERA</div>
          <div className="footer-tagline">The Marketplace for Everything Style.</div>
        </motion.div>

        <motion.div
          className="footer-right"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: 0.4 }}
        >
          Waitlist experience concept • Premium dark startup landing page
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;