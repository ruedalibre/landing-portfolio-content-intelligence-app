import { useTranslation } from 'react-i18next';

const LoopCenter = () => {
  const { t } = useTranslation('solution');

  return (
    <div className="loop-center">
      <span className="loop-center__title">{t('loop_title')}</span>
      <span className="loop-center__sub">{t('loop_subtitle')}</span>
      <span className="loop-center__icon">↺</span>
    </div>
  );
};

export default LoopCenter;
