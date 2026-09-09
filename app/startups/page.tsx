'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Startup {
  id: number;
  name: string;
  category: string;
  categoryLabel: string;
  cycle: string;
  cycleLabel: string;
  desc: string;
  year: string;
  status: string;
  icon: string;
  color: string;
}

const allStartups: Startup[] = [
  {
    id: 1,
    name: 'ال برو للتكنولوجيا الحيوية - AlProtein',
    category: 'ai',
    categoryLabel: 'الذكاء الاصطناعي والبيوتكنولوجي',
    cycle: 'cycle-2',
    cycleLabel: 'دورة الاحتضان الثانية',
    desc: 'إنتاج مسحوق بروتين ذو مذاق محايد وقيمة غذائية عالية وبأسعار معقولة وصديقة للبيئة باستخدام مصادر عضوية ومنصة إنتاج متكاملة محسنة بالذكاء الاصطناعي.',
    year: '2023',
    status: 'تحت الاحتضان',
    icon: 'fas fa-dna',
    color: 'var(--google-blue)',
  },
  {
    id: 2,
    name: 'ام ايه دابليو جى للتجارة - MAWJ',
    category: 'greentech',
    categoryLabel: 'التكنولوجيا الخضراء والتدوير',
    cycle: 'cycle-2',
    cycleLabel: 'دورة الاحتضان الثانية',
    desc: 'مشروع بيئي وصناعي مبتكر لتحويل جريد ومخلفات النخيل إلى مناديل ومنتجات ورقية صديقة للبيئة وبديلة للمنتجات الورقية التقليدية.',
    year: '2023',
    status: 'تحت الاحتضان',
    icon: 'fas fa-tree',
    color: 'var(--google-green)',
  },
  {
    id: 3,
    name: 'فيرمي كينج - Vermi King',
    category: 'agri',
    categoryLabel: 'الأسمدة والتدوير الحيوي',
    cycle: 'cycle-2',
    cycleLabel: 'دورة الاحتضان الثانية',
    desc: 'إنتاج منتجات أسمدة عضوية حيوية (الفيرميكومبوست) وبروتينات أعلاف من تدوير المخلفات العضوية بطرق بيولوجية آمنة بيئياً.',
    year: '2023',
    status: 'تحت الاحتضان',
    icon: 'fas fa-seedling',
    color: 'var(--google-green)',
  },
  {
    id: 4,
    name: 'إيكوشيل - Eco-Shell',
    category: 'greentech',
    categoryLabel: 'الكيمياء الخضراء والتدوير',
    cycle: 'cycle-2',
    cycleLabel: 'دورة الاحتضان الثانية',
    desc: 'شركة ناشئة مبتكرة تعمل من خلال إعادة تدوير مخلفات قشر البيض وتعظيم الاستفادة من الثروة المهدرة وإنتاج منتجات كيميائية وصناعية منها.',
    year: '2023',
    status: 'تحت الاحتضان',
    icon: 'fas fa-recycle',
    color: 'var(--google-yellow)',
  },
  {
    id: 5,
    name: 'إينتومو أجرو - ENTOMO AGRO',
    category: 'agri',
    categoryLabel: 'التكنولوجيا الحيوية الزراعية',
    cycle: 'cycle-2',
    cycleLabel: 'دورة الاحتضان الثانية',
    desc: 'تدوير المخلفات باستخدام الحشرات واستغلالها في إنتاج مخصبات حيوية ولقاحات ميكروبية للحد من استخدام الأسمدة الكيماوية.',
    year: '2023',
    status: 'تحت الاحتضان',
    icon: 'fas fa-bug',
    color: 'var(--google-green)',
  },
  {
    id: 6,
    name: 'أبونشيا - Opuntia',
    category: 'health',
    categoryLabel: 'المستحضرات الطبية التجميلية',
    cycle: 'cycle-1',
    cycleLabel: 'دورة الاحتضان الأولى',
    desc: 'إنتاج مستحضرات تجميل طبية من المخلفات النباتية لنبات صبار التين الشوكي بمستخلصات غنية بمضادات أورام الجلد ومضادات الالتهابات.',
    year: '2022',
    status: 'خريج متميز',
    icon: 'fas fa-spa',
    color: 'var(--google-red)',
  },
  {
    id: 7,
    name: 'سي تي إم للآلات الزراعية - CTM',
    category: 'agri',
    categoryLabel: 'الآلات والميكنة الزراعية',
    cycle: 'cycle-1',
    cycleLabel: 'دورة الاحتضان الأولى',
    desc: 'تصميم وتصنيع ماكينات زراعية محلية لحصاد ودراس وتعبئة المحاصيل لتقليل الفاقد وتوفير تكاليف التشغيل لصغار المزارعين.',
    year: '2022',
    status: 'خريج متميز',
    icon: 'fas fa-tractor',
    color: 'var(--google-blue)',
  },
  {
    id: 8,
    name: 'أكوا فارم - AquaFarm',
    category: 'agri',
    categoryLabel: 'الاستزراع السمكي الذكي',
    cycle: 'cycle-1',
    cycleLabel: 'دورة الاحتضان الأولى',
    desc: 'أنظمة استزراع مائي متكاملة تدار بحساسات إنترنت الأشياء IoT وتوفر 85% من استهلاك المياه ومخصبة للري الزراعي العضوي.',
    year: '2022',
    status: 'خريج متميز',
    icon: 'fas fa-fish',
    color: 'var(--google-green)',
  },
  {
    id: 9,
    name: 'دراية AI - Deraya',
    category: 'ai',
    categoryLabel: 'الذكاء الاصطناعي الطبي',
    cycle: 'cycle-2',
    cycleLabel: 'دورة الاحتضان الثانية',
    desc: 'منصة ذكاء اصطناعي لمعالجة وتحليل السجلات الطبية وأشعة الرنين لمساعدة الأطباء في اتخاذ قرارات سريرية دقيقة وسريعة.',
    year: '2023',
    status: 'تحت الاحتضان',
    icon: 'fas fa-brain',
    color: 'var(--google-blue)',
  },
  {
    id: 10,
    name: 'نانوتك فارما - NanoTech Pharma',
    category: 'health',
    categoryLabel: 'تكنولوجيا النانو الطبية',
    cycle: 'cycle-prev',
    cycleLabel: 'دفعات سابقة',
    desc: 'تطوير ناقلات دوائية نانوية لزيادة كفاءة امتصاص الأدوية في الجسم وتقليل الآثار الجانبية للأدوية التقليدية.',
    year: '2021',
    status: 'شركة مسجلة',
    icon: 'fas fa-atom',
    color: 'var(--google-red)',
  },
];

export default function StartupsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredStartups = useMemo(() => {
    return allStartups.filter((item) => {
      const matchesFilter =
        selectedFilter === 'all' ||
        item.category === selectedFilter ||
        item.cycle === selectedFilter;

      const matchesSearch =
        searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [searchTerm, selectedFilter]);

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-container">
          <div className="page-banner-content">
            <h1 className="page-title">الشركات المحتضنة والخريجون</h1>
            <p className="page-subtitle">دليل الشركات الناشئة المبتكرة التي تلقت الدعم والاحتضان بمركز الابتكار جامعة الأزهر</p>
            <div className="breadcrumbs">
              <Link href="/">الرئيسية</Link> <span>/</span> <span>الشركات المحتضنة</span>
            </div>
          </div>
          <div className="page-banner-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero.png" alt="الشركات المحتضنة" style={{ maxHeight: '200px' }} />
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <section className="section">
        <div style={{ maxWidth: '640px', margin: '0 auto 2.5rem' }}>
          <input
            type="text"
            className="form-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 ابحث عن اسم شركة، تخصص، أو تقنية..."
            style={{
              padding: '0.9rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border)',
            }}
          />
        </div>

        <div className="startup-filters">
          <button
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            <i className="fas fa-border-all"></i> الكل ({allStartups.length})
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'cycle-2' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('cycle-2')}
          >
            <i className="fas fa-rocket"></i> الدورة الثانية (2023)
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'cycle-1' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('cycle-1')}
          >
            <i className="fas fa-award"></i> الدورة الأولى (2022)
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('ai')}
          >
            <i className="fas fa-brain"></i> الذكاء الاصطناعي
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'agri' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('agri')}
          >
            <i className="fas fa-seedling"></i> الزراعة والبيئة
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'greentech' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('greentech')}
          >
            <i className="fas fa-recycle"></i> التكنولوجيا الخضراء
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'health' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('health')}
          >
            <i className="fas fa-heart-pulse"></i> التكنولوجيا الطبية
          </button>
        </div>

        {/* Startups Grid */}
        <div className="startups-grid">
          {filteredStartups.map((startup) => (
            <div className="startup-card" key={startup.id}>
              <div className="startup-header">
                <div className="startup-logo" style={{ color: startup.color }}>
                  <i className={startup.icon}></i>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                  <span className="hn-tag" style={{ margin: 0, fontSize: '0.72rem' }}>{startup.categoryLabel}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{startup.cycleLabel}</span>
                </div>
              </div>
              <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  {startup.name}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                  {startup.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-light)', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                  <span><i className="fas fa-calendar-alt"></i> سنة: {startup.year}</span>
                  <span style={{ color: startup.status === 'خريج متميز' ? 'var(--google-green)' : 'var(--google-blue)', fontWeight: 700 }}>
                    {startup.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStartups.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
            <i className="fas fa-search" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--border-hover)' }}></i>
            <h3>لم يتم العثور على شركات مطابقة لبحثك</h3>
            <p>جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.</p>
          </div>
        )}
      </section>
    </>
  );
}
