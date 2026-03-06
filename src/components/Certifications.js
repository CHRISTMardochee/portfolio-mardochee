'use client';
import { useI18n } from '@/hooks/useI18n';

const certs = [
    { id: '1', icon: '🤖' },
    { id: '2', icon: '⚙️' },
    { id: '3', icon: '☁️' },
    { id: '4', icon: '🔄' },
    { id: '5', icon: '🟢' },
    { id: '6', icon: '🏗️' },
    { id: '7', icon: '🐧' },
    { id: '8', icon: '🐙' },
];

export default function Certifications() {
    const { t } = useI18n();

    return (
        <section className="certifications-section" id="certifications">
            <div className="container">
                <h2 className="section-title reveal"><span>{t('certifications.title')}</span> <span className="emoji">🏆</span></h2>
                <div className="cert-grid">
                    {certs.map((cert) => (
                        <div key={cert.id} className="cert-card reveal">
                            <div className="cert-icon">{cert.icon}</div>
                            <p className="cert-name">{t(`certifications.${cert.id}.name`)}</p>
                            <p className="cert-issuer">IBM — Coursera</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
