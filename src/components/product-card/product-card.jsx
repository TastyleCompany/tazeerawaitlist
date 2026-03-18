import './product-card.css'

function ProductCard() {
  return (
        <div className="container">
        <h2 className="section-header">SHOP THE LEGACY CAPSULE</h2>
        <div className="product-grid">
            <div className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1588850561427-d88855324c86?q=80&w=500&auto=format&fit=crop" alt="Hat" />
                </div>
                <div className="product-info">
                    <h4>Steed Cap Vintage White</h4>
                    <p>$49.95 AUD</p>
                </div>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop" alt="Shirt" />
                </div>
                <div className="product-info">
                    <h4>Steed Raglan Tee White/Black</h4>
                    <p>$79.95 AUD</p>
                </div>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop" alt="Shirt" />
                </div>
                <div className="product-info">
                    <h4>Boxy SS Overshirt Blue Stripe</h4>
                    <p>$119.95 AUD</p>
                </div>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1473966968600-fa804b86905b?q=80&w=500&auto=format&fit=crop" alt="Pant" />
                </div>
                <div className="product-info">
                    <h4>Legacy Work Pant Sand</h4>
                    <p>$159.95 AUD</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard