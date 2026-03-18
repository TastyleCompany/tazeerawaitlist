import './fiture.css'

function fiture() {
  return (
    <section className="vision">
    <div className="vision-container">
        <div className="vision-content">
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-description">
                Pair text with an image to focus on your chosen product, collection, or blog post. 
                Add details on availability, style, or even provide a review.
            </p>
            <div className="vision-btn-wrapper">
                <button className="vision-btn">Learn More</button>
            </div>
        </div>

        <div className="vision-media">
            <img src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80" 
                 alt="Vision Thumbnail" 
                 className="img-fluid" />
        </div>
    </div>
</section>
  )
}

export default fiture