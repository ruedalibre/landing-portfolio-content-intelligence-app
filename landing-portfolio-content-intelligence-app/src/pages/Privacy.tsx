import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CONTACT_EMAIL = "hello@usecreadora.com";
const WEBSITE = "usecreadora.com";

const Privacy = () => {
  const { t } = useTranslation("privacy");

  useEffect(() => {
    document.title = t("page_title");
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="legal-page">
      {/* Nav */}
      <nav className="legal-nav">
        <div className="legal-nav__inner">
          <Link to="/" className="legal-nav__logo">
            Creadora
          </Link>
          <Link to="/" className="legal-nav__back">
            {t("back_to_site")}
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero__band" aria-hidden="true" />
        <div className="legal-hero__inner">
          <p className="legal-hero__label">{t("hero_label")}</p>
          <h1 className="legal-hero__title">{t("hero_title")}</h1>
          <div className="legal-hero__meta">
            <span>{t("hero_entity")}</span>
            <span aria-hidden="true">·</span>
            <span>{t("hero_effective")}</span>
            <span aria-hidden="true">·</span>
            <span>{t("hero_updated")}</span>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="legal-layout">
        {/* TOC */}
        <aside className="legal-toc" aria-label={t("toc_title")}>
          <p className="legal-toc__title">{t("toc_title")}</p>
          <ul className="legal-toc__list">
            <li className="legal-toc__item">
              <a href="#intro" className="legal-toc__link">
                {t("toc.intro")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#collect" className="legal-toc__link">
                {t("toc.collect")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#use" className="legal-toc__link">
                {t("toc.use")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#sharing" className="legal-toc__link">
                {t("toc.sharing")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#ai-data" className="legal-toc__link">
                {t("toc.ai_data")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#storage" className="legal-toc__link">
                {t("toc.storage")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#cookies" className="legal-toc__link">
                {t("toc.cookies")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#rights" className="legal-toc__link">
                {t("toc.rights")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#children" className="legal-toc__link">
                {t("toc.children")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#international" className="legal-toc__link">
                {t("toc.international")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#changes" className="legal-toc__link">
                {t("toc.changes")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#contact" className="legal-toc__link">
                {t("toc.contact")}
              </a>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <main className="legal-content">
          <div className="legal-highlight">
            <p>
              <strong>{t("summary_label")}:</strong> {t("summary_text")}
            </p>
          </div>

          {/* 01 */}
          <div className="legal-section" id="intro">
            <span className="legal-section__num">01</span>
            <h2>{t("s_intro.title")}</h2>
            <p>
              {t("s_intro.p1_before")}{" "}
              <a href={`https://${WEBSITE}`}>{WEBSITE}</a>
              {t("s_intro.p1_after")}
            </p>
            <p>{t("s_intro.p2")}</p>
          </div>

          {/* 02 */}
          <div className="legal-section" id="collect">
            <span className="legal-section__num">02</span>
            <h2>{t("s_collect.title")}</h2>
            <p>{t("s_collect.p1")}</p>
            <table className="legal-table">
              <thead>
                <tr>
                  {(
                    t("s_collect.table_headers", {
                      returnObjects: true,
                    }) as string[]
                  ).map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(
                  t("s_collect.table_rows", {
                    returnObjects: true,
                  }) as string[][]
                ).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        {j === 0 ? <strong>{cell}</strong> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p>{t("s_collect.p2")}</p>
          </div>

          {/* 03 */}
          <div className="legal-section" id="use">
            <span className="legal-section__num">03</span>
            <h2>{t("s_use.title")}</h2>
            <p>{t("s_use.p1")}</p>
            <ul>
              {(t("s_use.list", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
            <p>{t("s_use.p2")}</p>
          </div>

          {/* 04 */}
          <div className="legal-section" id="sharing">
            <span className="legal-section__num">04</span>
            <h2>{t("s_sharing.title")}</h2>
            <p>
              <strong>{t("s_sharing.no_sell")}</strong> {t("s_sharing.p1")}
            </p>
            <ul>
              {(t("s_sharing.list", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
          </div>

          {/* 05 */}
          <div className="legal-section" id="ai-data">
            <span className="legal-section__num">05</span>
            <h2>{t("s_ai_data.title")}</h2>
            <p>{t("s_ai_data.p1")}</p>
            <ul>
              {(t("s_ai_data.list", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
            <p>{t("s_ai_data.p2")}</p>
          </div>

          {/* 06 */}
          <div className="legal-section" id="storage">
            <span className="legal-section__num">06</span>
            <h2>{t("s_storage.title")}</h2>
            <p>{t("s_storage.p1")}</p>
            <ul>
              {(t("s_storage.list", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
            <p>{t("s_storage.p2")}</p>
            <p>{t("s_storage.p3")}</p>
          </div>

          {/* 07 */}
          <div className="legal-section" id="cookies">
            <span className="legal-section__num">07</span>
            <h2>{t("s_cookies.title")}</h2>
            <p>{t("s_cookies.p1")}</p>
            <ul>
              {(t("s_cookies.list", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
            <p>{t("s_cookies.p2")}</p>
          </div>

          {/* 08 */}
          <div className="legal-section" id="rights">
            <span className="legal-section__num">08</span>
            <h2>{t("s_rights.title")}</h2>
            <p>{t("s_rights.p1")}</p>
            <ul>
              {(t("s_rights.list", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
            <p>
              {t("s_rights.p2_before")}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              {t("s_rights.p2_after")}
            </p>
          </div>

          {/* 09 */}
          <div className="legal-section" id="children">
            <span className="legal-section__num">09</span>
            <h2>{t("s_children.title")}</h2>
            <p>{t("s_children.p1")}</p>
          </div>

          {/* 10 */}
          <div className="legal-section" id="international">
            <span className="legal-section__num">10</span>
            <h2>{t("s_international.title")}</h2>
            <p>{t("s_international.p1")}</p>
            <p>{t("s_international.p2")}</p>
            <p>{t("s_international.p3")}</p>
          </div>

          {/* 11 */}
          <div className="legal-section" id="changes">
            <span className="legal-section__num">11</span>
            <h2>{t("s_changes.title")}</h2>
            <p>{t("s_changes.p1")}</p>
            <p>{t("s_changes.p2")}</p>
          </div>

          {/* 12 */}
          <div className="legal-section" id="contact">
            <span className="legal-section__num">12</span>
            <h2>{t("s_contact.title")}</h2>
            <p>{t("s_contact.p1")}</p>
            <ul>
              <li>
                <strong>{t("s_contact.email_label")}:</strong>{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <strong>{t("s_contact.website_label")}:</strong>{" "}
                <a href={`https://${WEBSITE}`}>{WEBSITE}</a>
              </li>
              <li>
                <strong>{t("s_contact.entity_label")}:</strong> Content
                Intelligence Platform
              </li>
            </ul>
            <p>{t("s_contact.p2")}</p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="legal-footer">
        <div className="legal-footer__inner">
          <p>
            {t("footer_copyright")} ·{" "}
            <Link to="/terms">{t("footer_terms")}</Link> ·{" "}
            <Link to="/privacy">{t("footer_privacy")}</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
