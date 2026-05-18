import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Terms() {
  const { t } = useTranslation("terms");

  return (
    <div className="legal-page">
      <div className="legal-page__band" aria-hidden="true" />

      <div className="legal-page__inner">
        <Link to="/" className="legal-page__back">{t("back")}</Link>

        <header className="legal-page__header">
          <h1 className="legal-page__title">{t("page_title")}</h1>
          <p className="legal-page__updated">{t("last_updated")}</p>
        </header>

        <div className="legal-page__body">

          {/* 1. Acceptance of Terms */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s1_title")}</h2>
            <p className="legal-section__p">{t("s1_p1")}</p>
            <p className="legal-section__p">{t("s1_p2")}</p>
          </section>

          {/* 2. Eligibility */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s2_title")}</h2>
            <p className="legal-section__p">{t("s2_p1")}</p>
          </section>

          {/* 3. Early Access */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s3_title")}</h2>
            <p className="legal-section__p">{t("s3_p1")}</p>
          </section>

          {/* 4. Your Account */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s4_title")}</h2>
            <p className="legal-section__p">{t("s4_intro")}</p>
            <ul className="legal-section__list">
              <li className="legal-section__item">{t("s4_li1")}</li>
              <li className="legal-section__item">{t("s4_li2")}</li>
              <li className="legal-section__item">{t("s4_li3")}</li>
            </ul>
            <p className="legal-section__p">{t("s4_note")}</p>
          </section>

          {/* 5. Use of the Service */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s5_title")}</h2>
            <p className="legal-section__p">{t("s5_intro")}</p>
            <ul className="legal-section__list">
              <li className="legal-section__item">{t("s5_li1")}</li>
              <li className="legal-section__item">{t("s5_li2")}</li>
              <li className="legal-section__item">{t("s5_li3")}</li>
              <li className="legal-section__item">{t("s5_li4")}</li>
            </ul>
          </section>

          {/* 6. Content You Create */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s6_title")}</h2>
            <p className="legal-section__p">
              <span className="legal-section__label">{t("s6_p1_label")}</span>{" "}
              {t("s6_p1")}
            </p>
            <p className="legal-section__p">
              <span className="legal-section__label">{t("s6_p2_label")}</span>{" "}
              {t("s6_p2")}
            </p>
            <p className="legal-section__p">
              <span className="legal-section__label">{t("s6_p3_label")}</span>{" "}
              {t("s6_p3")}
            </p>
            <p className="legal-section__p">{t("s6_p4")}</p>
          </section>

          {/* 7. Data and AI Training */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s7_title")}</h2>
            <p className="legal-section__p">{t("s7_p1")}</p>
            <p className="legal-section__p">{t("s7_p2")}</p>
          </section>

          {/* 8. Intellectual Property of the Service */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s8_title")}</h2>
            <p className="legal-section__p">{t("s8_p1")}</p>
          </section>

          {/* 9. Availability and Changes */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s9_title")}</h2>
            <p className="legal-section__p">{t("s9_p1")}</p>
          </section>

          {/* 10. Disclaimer of Warranties */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s10_title")}</h2>
            <p className="legal-section__p">{t("s10_p1")}</p>
          </section>

          {/* 11. Limitation of Liability */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s11_title")}</h2>
            <p className="legal-section__p">{t("s11_p1")}</p>
          </section>

          {/* 12. Termination */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s12_title")}</h2>
            <p className="legal-section__p">{t("s12_p1")}</p>
          </section>

          {/* 13. Governing Law */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s13_title")}</h2>
            <p className="legal-section__p">{t("s13_p1")}</p>
          </section>

          {/* 14. Contact */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s14_title")}</h2>
            <p className="legal-section__p">
              {t("s14_p1")}{" "}
              <a
                href="mailto:andres@content-intel.app"
                className="legal-section__link"
              >
                andres@content-intel.app
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
