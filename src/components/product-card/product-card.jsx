import './product-card.css'

const ProductCard = ({ image, category, name, price }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} className="product-image" />
        <div className="image-overlay"></div>
      </div>

      <div className="product-details">
        <span className="product-category">{category}</span>
        
        <div className="product-main-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">{price}</p>
        </div>

        <button className="discover-btn">
          Discover Piece
        </button>
      </div>
    </div>
  );
};

export default ProductCard;