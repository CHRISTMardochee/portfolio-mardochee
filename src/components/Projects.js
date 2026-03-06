'use client';
import { useI18n } from '@/hooks/useI18n';
import { useState } from 'react';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const proProjects = [
    { id: 'happypro', name: 'HappyPro', img: 'project-happypro.png', tags: ['Python', 'Django', 'REST API', 'Stripe Connect', 'Docker', 'PostgreSQL'] },
    { id: 'controlfer', name: 'Control Fer', img: 'project-controlfer.png', tags: ['Python', 'Django', 'REST API', 'Mobile', 'Docker'] },
    { id: 'excelsis', name: 'Excelsis', img: 'project-excelsis.png', tags: ['Python', 'Django', 'REST API', 'PostgreSQL'] },
    { id: 'taf', name: 'TAF Africa Global', img: 'project-taf.png', tags: ['Python', 'Django', 'SEO', 'WordPress Migration'] },
    { id: 'defaru', name: 'Defaru', img: 'project-defaru.png', tags: ['Python', 'Django', 'REST API', 'Mobile', 'E-learning'] },
    { id: 'niafey', name: 'Niafey', img: 'project-niafey.png', tags: ['Python', 'Django', 'REST API', 'Mobile', 'Géolocalisation'] },
    { id: 'easymarket', name: 'EasyMarket', img: 'project-easymarket.png', tags: ['Python', 'Django', 'REST API', 'Docker', 'Stripe', 'PostgreSQL'] },
];

const featuredProjects = [
    {
        id: 'afimeystore', name: 'Afimey Store', img: 'project-afimeystore.png', accent: '#ef4444',
        tags: [
            { label: 'React 19', accent: false }, { label: 'Vite', accent: false },
            { label: 'Django REST', accent: true }, { label: 'TanStack Router', accent: false },
            { label: 'PayDunya', accent: true }, { label: 'PWA', accent: false }, { label: 'Docker', accent: false },
        ],
        link: 'https://afimeystore.com/',
    },
    {
        id: 'ylopkon', name: 'Ylɔ̌ Kpɔ́n', img: 'project-ylopkon.png', accent: '#7c3aed',
        tags: [
            { label: 'FastAPI', accent: false }, { label: 'Next.js', accent: false },
            { label: 'AWS ECS Fargate', accent: true }, { label: 'RDS PostgreSQL', accent: true },
            { label: 'S3', accent: true }, { label: 'Docker', accent: false },
            { label: 'CI/CD', accent: false }, { label: 'PWA', accent: false },
        ],
        link: 'https://www.ylopkon.com/',
    },
    {
        id: 'bonnesemence', name: 'Bonne Semence', img: 'project-bonnesemence.png', accent: '#f59e0b',
        tags: [
            { label: 'Next.js', accent: false }, { label: 'React', accent: false },
            { label: 'Firebase', accent: true }, { label: 'PWA', accent: false },
            { label: 'Vercel', accent: false }, { label: 'RBAC', accent: false },
        ],
        link: 'https://bonne-semence-eed.vercel.app/',
    },
];

function ProCard({ project }) {
    const { t } = useI18n();
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="pro-card reveal">
            <div className="pro-card-img">
                <img src={`${prefix}/assets/${project.img}`} alt={project.name} loading="lazy" />
                <div className="pro-card-overlay">
                    <span className="pro-card-overlay-text">{t(`projects.${project.id}.category`)}</span>
                </div>
            </div>
            <div className="pro-card-body">
                <h4 className="pro-card-name">{project.name}</h4>
                <p className={`pro-card-desc ${expanded ? 'expanded' : ''}`}>
                    {t(`projects.${project.id}.description`)}
                </p>
                <button className="show-more-btn" onClick={() => setExpanded(!expanded)}>
                    {expanded ? t('btn.less') : t('btn.more')}
                </button>
                <div className="pro-card-tags">
                    {project.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
            </div>
        </div>
    );
}

function FeaturedCard({ project }) {
    const { t } = useI18n();

    return (
        <div className="featured-card reveal" style={{ '--accent': project.accent }}>
            <div className="featured-visual">
                <img src={`${prefix}/assets/${project.img}`} alt={project.name} className="featured-img" loading="lazy" />
                <div className="featured-gradient"></div>
                <span className="featured-status">
                    <span className="status-dot-live"></span>
                    <span>{t('projects.live')}</span>
                </span>
            </div>
            <div className="featured-content">
                <span className="featured-eyebrow">{t(`projects.${project.id}.category`)}</span>
                <h3 className="featured-name">{project.name}</h3>
                <p className="featured-description">{t(`projects.${project.id}.description`)}</p>
                <div className="featured-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i} className={`featured-tag ${tag.accent ? 'accent' : ''}`}>{tag.label}</span>
                    ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="featured-cta">
                    {t('projects.viewProject')}
                </a>
            </div>
        </div>
    );
}

export default function Projects() {
    const { t } = useI18n();

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="projects-header reveal">
                    <h2 className="section-title"><span>{t('projects.title')}</span> <span className="emoji">🚀</span></h2>
                    <p className="projects-subtitle">{t('projects.subtitle')}</p>
                </div>

                <h3 className="projects-grid-title reveal">{t('projects.proTitle')}</h3>
                <div className="pro-grid">
                    {proProjects.map((p) => <ProCard key={p.id} project={p} />)}
                </div>

                <h3 className="featured-title reveal">Spotlight</h3>
                <div className="featured-projects">
                    {featuredProjects.map((p) => <FeaturedCard key={p.id} project={p} />)}
                </div>
            </div>
        </section>
    );
}
