import dashboardImg from "../../assets/images/dashboard.png";
import ideasImg from "../../assets/images/ideas-system.png";

const ProductVisuals = () => {
  return (
    <section id="product" className="product-visuals reveal">
      <div className="container product-visuals__content">
        <h2 className="product-visuals__title">See how it works in practice</h2>

        <div className="product-visuals__list">
          {/* BLOCK 1 */}
          <div className="product-visuals__item">
            <div className="product-visuals__text">
              <h3>Capture and structure your content</h3>
              <p>Bring all your content into one place and organize it around ideas and topics.</p>
            </div>

            <div className="product-visuals__image">
              <img src={dashboardImg} alt="Dashboard" />
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="product-visuals__item reverse">
            <div className="product-visuals__text">
              <h3>Understand what works</h3>
              <p>Detect patterns, track performance and understand what drives results.</p>
            </div>

            <div className="product-visuals__image">
              <img src={dashboardImg} alt="Insights" />
            </div>
          </div>

          {/* BLOCK 3 */}
          <div className="product-visuals__item">
            <div className="product-visuals__text">
              <h3>Turn ideas into scalable systems</h3>
              <p>Identify reusable ideas and turn them into repeatable content systems.</p>
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
