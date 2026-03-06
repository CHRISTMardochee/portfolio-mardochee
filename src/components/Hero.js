'use client';
import { useI18n } from '@/hooks/useI18n';

export default function Hero() {
    const { t } = useI18n();
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-text reveal">
                        <p className="hero-greeting">{t('hero.greeting')}</p>
                        <h1 className="hero-name">Mardochée KIKIGBAGBAN</h1>
                        <p className="hero-title">{t('hero.title')}</p>
                        <p className="hero-description">{t('hero.description')}</p>
                        <div className="hero-actions">
                            <a href="#contact" className="hero-cv-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                {t('hero.cv')}
                            </a>
                            <span className="hero-status">
                                <span className="status-dot"></span>
                                {t('hero.available')}
                            </span>
                        </div>
                    </div>
                    <div className="hero-visual reveal">
                        <div className="hero-avatar-wrapper">
                            <div className="hero-avatar-glow"></div>
                            <img
                                src={`${prefix}/assets/profile.png`}
                                alt="Mardochée KIKIGBAGBAN"
                                className="hero-avatar"
                            />
                            <span className="floating-badge">🐍 Python</span>
                            <span className="floating-badge">⚡ Django</span>
                            <span className="floating-badge">🐳 Docker</span>
                            <span className="floating-badge">☁️ AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
