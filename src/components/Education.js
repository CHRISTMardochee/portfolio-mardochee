'use client';
import { useI18n } from '@/hooks/useI18n';

export default function Education() {
    const { t } = useI18n();

    return (
        <section className="education-section" id="education">
            <div className="container">
                <h2 className="section-title reveal"><span>{t('education.title')}</span> <span className="emoji">🎓</span></h2>
                <div className="education-grid">
                    <div className="education-card reveal">
                        <div className="education-icon">🎓</div>
                        <div>
                            <p className="education-degree">{t('education.master.degree')}</p>
                            <p className="education-school">{t('education.master.school')}</p>
                            <p className="education-date">2019 — 2020</p>
                        </div>
                    </div>
                    <div className="education-card reveal">
                        <div className="education-icon">📜</div>
                        <div>
                            <p className="education-degree">{t('education.license.degree')}</p>
                            <p className="education-school">{t('education.license.school')}</p>
                            <p className="education-date">2015 — 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
