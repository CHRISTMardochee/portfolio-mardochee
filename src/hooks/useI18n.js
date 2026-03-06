'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fr } from '@/i18n/fr';
import { en } from '@/i18n/en';

const translations = { fr, en };
const I18nContext = createContext();

export function I18nProvider({ children }) {
    const [lang, setLang] = useState('fr');

    useEffect(() => {
        const saved = localStorage.getItem('language');
        if (saved && translations[saved]) setLang(saved);
    }, []);

    const switchLang = useCallback((newLang) => {
        setLang(newLang);
        localStorage.setItem('language', newLang);
    }, []);

    const t = useCallback((key) => {
        return translations[lang]?.[key] || translations.fr[key] || key;
    }, [lang]);

    return (
        <I18nContext.Provider value={{ lang, switchLang, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useI18n must be used within I18nProvider');
    return ctx;
}
