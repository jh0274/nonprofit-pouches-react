import './Product.css'

const Product = () => {
  return (
    <section id="product" className="product">
      <div className="container">
        <h2>The Product</h2>
        <p className="section-subtitle">
          High-quality lockable pouches that create distraction-free environments
        </p>
        <div className="product-showcase">
          <div className="product-item">
            <div className="product-image">
              <img src="/pouch.png" alt="Non-Profit Pouches lockable phone pouch" />
            </div>
            <h3>Secure Storage</h3>
            <p>
              Durable, lockable pouches keep phones secure and inaccessible during learning time
            </p>
          </div>
          <div className="product-item">
            <div className="product-image">
              <img src="/lock.png" alt="Magnetic locking mechanism" />
            </div>
            <h3>Simple Locking System</h3>
            <p>
              Easy-to-use magnetic locking mechanism - secure when needed, accessible when appropriate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
