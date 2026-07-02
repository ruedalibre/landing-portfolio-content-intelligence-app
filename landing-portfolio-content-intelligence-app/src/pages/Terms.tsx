import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CONTACT_EMAIL = "andres@content-intel.app";
const WEBSITE = "content-intel.app";

const Terms = () => {
  const { t } = useTranslation("terms");

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
              <a href="#acceptance" className="legal-toc__link">
                {t("toc.acceptance")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#description" className="legal-toc__link">
                {t("toc.description")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#accounts" className="legal-toc__link">
                {t("toc.accounts")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#early-access" className="legal-toc__link">
                {t("toc.early_access")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#content" className="legal-toc__link">
                {t("toc.content")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#ai" className="legal-toc__link">
                {t("toc.ai")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#payments" className="legal-toc__link">
                {t("toc.payments")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#prohibited" className="legal-toc__link">
                {t("toc.prohibited")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#ip" className="legal-toc__link">
                {t("toc.ip")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#disclaimer" className="legal-toc__link">
                {t("toc.disclaimer")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#limitation" className="legal-toc__link">
                {t("toc.limitation")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#termination" className="legal-toc__link">
                {t("toc.termination")}
              </a>
            </li>
            <li className="legal-toc__item">
              <a href="#governing" className="legal-toc__link">
                {t("toc.governing")}
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
          <div className="legal-section" id="acceptance">
            <span className="legal-section__num">01</span>
            <h2>{t("s_acceptance.title")}</h2>
            <p>{t("s_acceptance.p1")}</p>
            <p>{t("s_acceptance.p2")}</p>
          </div>

          {/* 02 */}
          <div className="legal-section" id="description">
            <span className="legal-section__num">02</span>
            <h2>{t("s_description.title")}</h2>
            <p>{t("s_description.p1")}</p>
            <p>{t("s_description.includes")}</p>
            <ul>
              {(
                t("s_description.list", { returnObjects: true }) as string[]
              ).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t("s_description.p2")}</p>
          </div>

          {/* 03 */}
          <div className="legal-section" id="accounts">
            <span className="legal-section__num">03</span>
            <h2>{t("s_accounts.title")}</h2>
            <p>{t("s_accounts.p1")}</p>
            <p>
              {t("s_accounts.p2_before")}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
              {t("s_accounts.p2_after")}
            </p>
            <p>{t("s_accounts.p3")}</p>
          </div>

          {/* 04 */}
          <div className="legal-section" id="early-access">
            <span className="legal-section__num">04</span>
            <h2>{t("s_early_access.title")}</h2>
            <p>{t("s_early_access.p1")}</p>
            <ul>
              {(
                t("s_early_access.list", { returnObjects: true }) as string[]
              ).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t("s_early_access.p2")}</p>
          </div>

          {/* 05 */}
          <div className="legal-section" id="content">
            <span className="legal-section__num">05</span>
            <h2>{t("s_content.title")}</h2>
            <p>{t("s_content.p1")}</p>
            <p>{t("s_content.p2")}</p>
            <p>{t("s_content.p3")}</p>
          </div>

          {/* 06 */}
          <div className="legal-section" id="ai">
            <span className="legal-section__num">06</span>
            <h2>{t("s_ai.title")}</h2>
            <p>{t("s_ai.p1")}</p>
            <ul>
              {(t("s_ai.list", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
            <p>{t("s_ai.p2")}</p>
          </div>

          {/* 07 */}
          <div className="legal-section" id="payments">
            <span className="legal-section__num">07</span>
            <h2>{t("s_payments.title")}</h2>
            <p>{t("s_payments.p1")}</p>
            <ul>
              {(t("s_payments.list", { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                ),
              )}
            </ul>
            <p>{t("s_payments.p2")}</p>
          </div>

          {/* 08 */}
          <div className="legal-section" id="prohibited">
            <span className="legal-section__num">08</span>
            <h2>{t("s_prohibited.title")}</h2>
            <p>{t("s_prohibited.p1")}</p>
            <ul>
              {(
                t("s_prohibited.list", { returnObjects: true }) as string[]
              ).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 09 */}
          <div className="legal-section" id="ip">
            <span className="legal-section__num">09</span>
            <h2>{t("s_ip.title")}</h2>
            <p>{t("s_ip.p1")}</p>
            <p>{t("s_ip.p2")}</p>
          </div>

          {/* 10 */}
          <div className="legal-section" id="disclaimer">
            <span className="legal-section__num">10</span>
            <h2>{t("s_disclaimer.title")}</h2>
            <p>{t("s_disclaimer.p1")}</p>
            <p>{t("s_disclaimer.p2")}</p>
          </div>

          {/* 11 */}
          <div className="legal-section" id="limitation">
            <span className="legal-section__num">11</span>
            <h2>{t("s_limitation.title")}</h2>
            <p>{t("s_limitation.p1")}</p>
            <p>{t("s_limitation.p2")}</p>
          </div>

          {/* 12 */}
          <div className="legal-section" id="termination">
            <span className="legal-section__num">12</span>
            <h2>{t("s_termination.title")}</h2>
            <p>
              {t("s_termination.p1_before")}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p>{t("s_termination.p2")}</p>
          </div>

          {/* 13 */}
          <div className="legal-section" id="governing">
            <span className="legal-section__num">13</span>
            <h2>{t("s_governing.title")}</h2>
            <p>{t("s_governing.p1")}</p>
            <p>{t("s_governing.p2")}</p>
          </div>

          {/* 14 */}
          <div className="legal-section" id="changes">
            <span className="legal-section__num">14</span>
            <h2>{t("s_changes.title")}</h2>
            <p>{t("s_changes.p1")}</p>
            <p>{t("s_changes.p2")}</p>
          </div>

          {/* 15 */}
          <div className="legal-section" id="contact">
            <span className="legal-section__num">15</span>
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

export default Terms;
