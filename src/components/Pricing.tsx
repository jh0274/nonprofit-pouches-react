import './Pricing.css'

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Transparent Pricing</h2>
        <div className="pricing-content">
          <div className="pricing-box">
            <h3>Our Commitment to Transparency</h3>
            <p>We believe in complete openness about how your money is used.</p>
            <div className="pricing-breakdown">
              <div className="price-item">
                <span className="label">Supplier Cost:</span>
                <span className="amount">~$3.00 per pouch</span>
              </div>
              <p className="cost-note">Supplier cost varies based on order quantity</p>
              <div className="price-item">
                <span className="label">Rental Fee:</span>
                <span className="amount">£5.00 - £10.00</span>
              </div>
              <div className="price-item highlight">
                <span className="label">Difference Goes To:</span>
                <span className="amount">Tech Education</span>
              </div>
            </div>
            <div className="note">
              <strong>You have a say:</strong> As a co-op member, you can participate in discussions
              and votes about rental pricing levels, ensuring we balance accessibility with maximizing
              educational impact.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
