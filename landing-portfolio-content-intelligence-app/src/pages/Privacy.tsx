import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Privacy() {
  const { t } = useTranslation("privacy");

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

          {/* 1. Who We Are */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s1_title")}</h2>
            <p className="legal-section__p">{t("s1_p1")}</p>
            <p className="legal-section__p">
              {t("s1_contact")}{" "}
              <a
                href="mailto:andres@content-intel.app"
                className="legal-section__link"
              >
                andres@content-intel.app
              </a>
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s2_title")}</h2>

            <h3 className="legal-section__sub">{t("s2_direct_title")}</h3>
            <ul className="legal-section__list">
              <li className="legal-section__item">{t("s2_direct_li1")}</li>
              <li className="legal-section__item">{t("s2_direct_li2")}</li>
              <li className="legal-section__item">{t("s2_direct_li3")}</li>
              <li className="legal-section__item">{t("s2_direct_li4")}</li>
            </ul>

            <h3 className="legal-section__sub">{t("s2_auto_title")}</h3>
            <ul className="legal-section__list">
              <li className="legal-section__item">{t("s2_auto_li1")}</li>
              <li className="legal-section__item">{t("s2_auto_li2")}</li>
            </ul>

            <h3 className="legal-section__sub">{t("s2_not_title")}</h3>
            <ul className="legal-section__list">
              <li className="legal-section__item">{t("s2_not_li1")}</li>
              <li className="legal-section__item">{t("s2_not_li2")}</li>
              <li className="legal-section__item">{t("s2_not_li3")}</li>
              <li className="legal-section__item">{t("s2_not_li4")}</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s3_title")}</h2>
            <p className="legal-section__p">{t("s3_intro")}</p>
            <ul className="legal-section__list">
              <li className="legal-section__item">{t("s3_li1")}</li>
              <li className="legal-section__item">{t("s3_li2")}</li>
              <li className="legal-section__item">{t("s3_li3")}</li>
              <li className="legal-section__item">{t("s3_li4")}</li>
              <li className="legal-section__item">{t("s3_li5")}</li>
            </ul>
            <p className="legal-section__p">{t("s3_not_intro")}</p>
            <ul className="legal-section__list">
              <li className="legal-section__item">{t("s3_not_li1")}</li>
              <li className="legal-section__item">{t("s3_not_li2")}</li>
              <li className="legal-section__item">{t("s3_not_li3")}</li>
            </ul>
          </section>

          {/* 4. Third-Party Services */}
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

          {/* 5. AI Processing */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s5_title")}</h2>
            <p className="legal-section__p">{t("s5_p1")}</p>
          </section>

          {/* 6. Data Storage and Security */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s6_title")}</h2>
            <p className="legal-section__p">{t("s6_p1")}</p>
          </section>

          {/* 7. Data Retention */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s7_title")}</h2>
            <p className="legal-section__p">{t("s7_p1")}</p>
          </section>

          {/* 8. Your Rights */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s8_title")}</h2>
            <p className="legal-section__p">
              {t("s8_p1")}{" "}
              <a
                href="mailto:andres@content-intel.app"
                className="legal-section__link"
              >
                andres@content-intel.app
              </a>{" "}
              {t("s8_p2")}
            </p>
          </section>

          {/* 9. Cookies */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s9_title")}</h2>
            <p className="legal-section__p">{t("s9_p1")}</p>
          </section>

          {/* 10. Children's Privacy */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s10_title")}</h2>
            <p className="legal-section__p">{t("s10_p1")}</p>
          </section>

          {/* 11. Changes to This Policy */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s11_title")}</h2>
            <p className="legal-section__p">{t("s11_p1")}</p>
          </section>

          {/* 12. Contact */}
          <section className="legal-section">
            <h2 className="legal-section__title">{t("s12_title")}</h2>
            <div className="legal-section__contact">
              <span>{t("s12_name")}</span>
              <a
                href="mailto:andres@content-intel.app"
                className="legal-section__link"
              >
                andres@content-intel.app
              </a>
              <span>{t("s12_country")}</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
