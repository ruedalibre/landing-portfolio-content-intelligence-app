import { Brain, Layers, Fingerprint, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const capabilities = [
  { key: "idea_intelligence", icon: Brain },
  { key: "content_evolution", icon: Layers },
  { key: "creative_dna", icon: Fingerprint },
  { key: "pattern_recognition", icon: Sparkles },
];

const Capabilities = () => {
  const { t } = useTranslation("capabilities");

  return (
    <section id="capabilities" className="capabilities reveal">
      <div className="container capabilities__content">
        <h2 className="capabilities__title">{t("title")}</h2>

        <div className="capabilities__grid">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.key} className="capabilities__card">
                <div className="capabilities__icon">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <h3>{t(`items.${item.key}.title`)}</h3>

                <p>{t(`items.${item.key}.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
