'use client';
import { useI18n } from '@/hooks/useI18n';

export default function About() {
    const { t } = useI18n();
    return (
        <section className="about-section" id="about">
            <div className="container">
                <h2 className="section-title reveal"><span>{t('about.title')}</span> <span className="emoji">👨‍💻</span></h2>
                <div className="about-content reveal">
                    <p className="about-text" dangerouslySetInnerHTML={{ __html: t('about.text') }} />
                </div>
            </div>
        </section>
    );
}
