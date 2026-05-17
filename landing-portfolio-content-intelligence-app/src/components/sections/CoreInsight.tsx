import { useTranslation } from 'react-i18next';

const CoreInsight = () => {
  const { t } = useTranslation('core_insight');

  // quote_line2 = "sistematizan sus ideas," / "systematize their ideas,"
  // quote_highlight = "ideas," — extraemos el prefijo dinámicamente
  const line2Full      = t('quote_line2');
  const line2Highlight = t('quote_highlight');
  const line2Before    = line2Full.replace(line2Highlight, '');

  return (
    <section id="core-insight" className="core-insight">
      <div className="core-insight__bg" aria-hidden="true" />
      <div className="container core-insight__inner">

        <p className="core-insight__pre">
          {t('pre')}
        </p>

        <h2 className="core-insight__quote">
          {t('quote_line1')}<br />
          {line2Before}<span className="core-insight__highlight">{line2Highlight}</span><br />
          {t('quote_line3')}
        </h2>

        <div className="core-insight__divider" aria-hidden="true" />

        <p className="core-insight__sub">
          {t('sub_line1')}<br />
          <strong>{t('sub_line2')}</strong>
        </p>

      </div>
    </section>
  );
};

export default CoreInsight;
