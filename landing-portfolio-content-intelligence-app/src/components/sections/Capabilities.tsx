import { Brain, Layers, Fingerprint, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const capabilities = [
  { icon: Brain },
  { icon: Layers },
  { icon: Fingerprint },
  { icon: Sparkles },
];

const Capabilities = () => {
  const { t } = useTranslation("capabilities");

  const items = t("items", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section id="capabilities" className="capabilities reveal">
      <div className="container capabilities__content">
        <h2 className="capabilities__title">{t("title")}</h2>

        <div className="capabilities__grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="capabilities__card">
                <div className="capabilities__icon">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <h3>{items[index].title}</h3>
                <p>{items[index].description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
