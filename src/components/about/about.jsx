import './about.css'

function About() {
  return (
<section class="mission">
        <div class="mission-container">
            <div class="mission-content">
                <h2 class="mission-title">Our Mission</h2>
                <p class="mission-description">
                    Pair text with an image to focus on your chosen product, collection, or blog post. 
                    Add details on availability, style, or even provide a review.
                </p>
                <button class="mission-btn">Learn More</button>
            </div>

            <div class="mission-media">
                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80" 
                     alt="Mission Thumbnail" 
                     class="img-fluid" />
            </div>
        </div>
    </section>
  )
}

export default About