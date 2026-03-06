'use client';
import { useI18n } from '@/hooks/useI18n';

export default function Teaching() {
    const { t } = useI18n();

    return (
        <section className="teaching-section" id="teaching">
            <div className="container">
                <h2 className="section-title reveal"><span>{t('teaching.title')}</span> <span className="emoji">🎓</span></h2>
                <div className="teaching-card reveal">
                    <div className="teaching-icon">🧑‍🏫</div>
                    <div className="teaching-content">
                        <h3 className="teaching-role">{t('teaching.role')}</h3>
                        <p className="teaching-company">{t('teaching.company')}</p>
                        <p className="teaching-desc">{t('teaching.description')}</p>
                        <div className="teaching-tags">
                            <span>Python</span>
                            <span>SQL</span>
                            <span>Data Analyst</span>
                            <span>Bootcamp</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
