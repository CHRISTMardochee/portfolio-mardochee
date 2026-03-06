'use client';

const techs = [
    { icon: '🐍', name: 'Python' },
    { icon: '🎯', name: 'Django' },
    { icon: '⚡', name: 'FastAPI' },
    { icon: '🗄️', name: 'PostgreSQL' },
    { icon: '⚛️', name: 'React' },
    { icon: '▲', name: 'Next.js' },
    { icon: '📘', name: 'TypeScript' },
    { icon: '🐳', name: 'Docker' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🔄', name: 'CI/CD' },
    { icon: '🐙', name: 'GitHub' },
    { icon: '🐧', name: 'Linux' },
    { icon: '🔥', name: 'Firebase' },
    { icon: '💳', name: 'Stripe' },
    { icon: '📱', name: 'PWA' },
    { icon: '🔐', name: 'JWT/RBAC' },
];

export default function TechMarquee() {
    const items = [...techs, ...techs];
    return (
        <section className="tech-section">
            <div className="marquee-container">
                <div className="marquee-track">
                    {items.map((tech, i) => (
                        <div key={i} className="tech-item">
                            <span className="tech-icon">{tech.icon}</span>
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
