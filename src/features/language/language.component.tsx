import { FC } from 'react';
import Languages from "features/language/language.types";
import { useLanguage } from 'context/useLanguage';


const LanguageComponent: FC = () => {
  const { language, setLanguage, translate } = useLanguage()
  return (
    <div className={'language'}>
      <div
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
        {translate('language.spanish')}
      </div>
      <button
        onClick={() => setLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {translate('language.english')}
      </button>
      <button
        onClick={() => setLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {translate('language.portuguese')}
      </button>
    </div>
  );
};
export default LanguageComponent;
