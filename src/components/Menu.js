import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import './assets/styles.css'

const Menu = () => {
    const { t } = useTranslation();
    const items = [
        { label: t('menu.home') },
        { label: t('menu.contact') },
        { label: t('menu.information') }
    ];
    const getMenu = items.map((item, index) =>
        <li key={index}>
            <a href="/" className={index === 0 ? 'active' : null}>{item.label}</a>
        </li>
    );

    /**
     * Change language
     * @param {String} language 
     */
    const toggleLanguage = (language) => {
        i18next.changeLanguage(language)
    }

    return (
        <ul>
            {getMenu}
            <li className="language-toggle">
                <button onClick={() => toggleLanguage('en')}>En</button> - <button onClick={() => toggleLanguage('es')}>Es</button>
            </li>
        </ul>
    )
}

export default Menu;