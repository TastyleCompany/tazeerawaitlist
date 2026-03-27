import "./mission.css"

function mission() {
  return (
    <>
{/* MISSION STORYTELLING */}
    <section id="mission">
    <div className="container story-grid">
        <div className="section-head">
        <div className="eyebrow">Mission Storytelling</div>
        <h2>We believe <span className="gold-text">style exists in everything</span>.</h2>
        <p>TAZEERA is not just another product marketplace. It is a style-first ecosystem built around identity, taste, and discovery.</p>
        </div>

        <motion.div
            initial={{ x: 100, opacity: 0, rotate: 0, skewX: 0 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0, skewX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
            duration: 1, 
            ease: "easeOut" 
            }}
        >
        <div className="panel mission">
            <strong>We believe style exists in everything.</strong><br />
            From the clothes people wear,<br />
            to the spaces they live in,<br />
            to the technology they use.<br /><br />
            But today's marketplaces only focus on products.<br /><br />
            <strong>TAZEERA focuses on style.</strong>
        </div>
        </motion.div>
    </div>
    </section>

    <section>
    <div className="container">
        <div class="section-head">
            <div class="eyebrow">Founding Member Benefits</div>
            <h2>Join early. Get more than access.</h2>
            <p>The first wave of users shapes community quality, product direction, and the culture of the marketplace.</p>
            </div>
        <FoundingBenefits />
        <BenefitSection />
    </div>
    </section>
    </>
  )
}

export default mission