// import dashboardImg from "../../assets/images/dashboard.png";
// import insightsImg from "../../assets/images/insights.png";
// import ideasImg from "../../assets/images/ideas-system.png";

const ProductVisuals = () => {
  return (
    <section className="product-visuals">
      <div className="container">
        <h2 className="product-visuals__title">See how it works</h2>

        <div className="product-visuals__list">
          {/* DASHBOARD */}
          <div className="product-visuals__item">
            <div className="product-visuals__text">
              <h3>Understand your content at a glance</h3>
              <p>Track patterns, growth and performance in a single view.</p>
            </div>

            <div className="product-visuals__image">
              <div className="mock">Dashboard Preview</div>
            </div>
          </div>

          {/* INSIGHTS */}
          <div className="product-visuals__item reverse">
            <div className="product-visuals__text">
              <h3>Turn data into clear insights</h3>
              <p>Know what works and why — without guessing.</p>
            </div>

            <div className="product-visuals__image">
              <div className="mock">Insights Preview</div>
            </div>
          </div>

          {/* IDEAS SYSTEM */}
          <div className="product-visuals__item">
            <div className="product-visuals__text">
              <h3>Build reusable content systems</h3>
              <p>Transform ideas into scalable content structures.</p>
            </div>

            <div className="product-visuals__image">
              <div className="mock">Ideas System Preview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVisuals;
