'use client';
import { useI18n } from '@/hooks/useI18n';

export default function Quote() {
    const { t } = useI18n();
    return (
        <section className="quote-section">
            <div className="container">
                <p className="quote-text reveal">{t('quote.text')}</p>
            </div>
        </section>
    );
}
