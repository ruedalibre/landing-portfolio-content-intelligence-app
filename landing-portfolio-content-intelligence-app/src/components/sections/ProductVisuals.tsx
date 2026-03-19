import dashboardImg from "../../assets/images/dashboard.png";
import insightsImg from "../../assets/images/insights.png";
import ideasImg from "../../assets/images/ideas-system.png";

const ProductVisuals = () => {
  return (
    <section className="product-visuals">
      <div className="container product-visuals__content">
        <h2 className="product-visuals__title">See how it works in practice</h2>

        <div className="product-visuals__list">
          {/* BLOCK 1 */}
          <div className="product-visuals__item">
            <div className="product-visuals__text">
              <h3>Understand your content at a glance</h3>
              <p>Track patterns, growth and performance in a single view.</p>
            </div>

            <div className="product-visuals__image">
              <img src={dashboardImg} alt="Dashboard" />
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="product-visuals__item reverse">
            <div className="product-visuals__text">
              <h3>Turn data into clear insights</h3>
              <p>Know what works and why — without guessing.</p>
            </div>

            <div className="product-visuals__image">
              <img src={insightsImg} alt="Insights" />
            </div>
          </div>

          {/* BLOCK 3 */}
          <div className="product-visuals__item">
            <div className="product-visuals__text">
              <h3>Build reusable content systems</h3>
              <p>Transform ideas into scalable content structures.</p>
            </div>

            <div className="product-visuals__image">
              <img src={ideasImg} alt="Ideas System" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVisuals;
