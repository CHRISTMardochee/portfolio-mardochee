'use client';
import { useI18n } from '@/hooks/useI18n';

const experiences = [
    { id: 'fullstack', icon: '🚀' },
    { id: 'lead', icon: '👨‍💼' },
    { id: 'backend', icon: '⚙️' },
];

export default function Experience() {
    const { t } = useI18n();

    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <h2 className="section-title reveal"><span>{t('experience.title')}</span> <span className="emoji">💼</span></h2>
                <div className="experience-grid">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card reveal">
                            <p className="experience-date">{t(`experience.${exp.id}.date`)}</p>
                            <h3 className="experience-role">{exp.icon} {t(`experience.${exp.id}.title`)}</h3>
                            <p className="experience-company">{t(`experience.${exp.id}.company`)}</p>
                            <div className="experience-desc" dangerouslySetInnerHTML={{ __html: t(`experience.${exp.id}.description`) }} />
                        </div>
                    ))}
                    <div className="experience-card reveal">
                        <div className="experience-cta-wrapper">
                            <p className="experience-cta-text">{t('experience.cta')}</p>
                            <p className="experience-cta-sub">{t('experience.ctaSub')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
