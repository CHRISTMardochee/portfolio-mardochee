'use client';
import { useI18n } from '@/hooks/useI18n';

export default function Footer() {
    const { t } = useI18n();

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">{t('footer.text')}</p>
            </div>
        </footer>
    );
}
