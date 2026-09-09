'use client';

import { useState, useRef } from 'react';

const newsItems = [
  {
    id: 1,
    title: 'جامعة الأزهر وأكاديمية البحث العلمي يطلقان الدورة الثانية لبرنامج «رواق»',
    desc: 'فتح باب التسجيل لاحتضان المشروعات التكنولوجية بتمويل يصل لـ 300 ألف جنيه وتوفير معامل متطورة لدعم الابتكارات.',
    tag: 'برنامج انطلاق',
    date: '10 يناير 2025',
    img: '/images/news_hero.png',
    link: 'https://www.facebook.com/mediaazhar1/posts/1396550345845021/',
  },
  {
    id: 2,
    title: 'رئيس مجلس الوزراء يكرم أ.د. محمد جلال لتميزه في الابتكار',
    desc: 'تكريم عميد كلية الهندسة ومدير مركز الابتكار ورئيس شبكة الحاضنات بجامعة الأزهر لتميزه الإداري وبناء منظومة الريادة.',
    tag: 'تكريم رسمي',
    date: '12 نوفمبر 2024',
    img: '/images/dr_mohamed_galal.jpg',
    link: 'https://www.facebook.com/mediaazhar1/posts/1099980762168649/',
  },
  {
    id: 3,
    title: 'الإمام الأكبر يهنئ أ.د. محمد جلال لتعيينه بالمجلس الوطني للتعليم',
    desc: 'فضيلة الإمام الأكبر يهنئ مستشار رئيس الجامعة للابتكار بصدور القرار الجمهوري لتعيينه بالمجلس الوطني للتعليم والابتكار.',
    tag: 'تهنئة رئاسية',
    date: '5 ديسمبر 2024',
    img: '/images/dr_mohamed_galal.jpg',
    link: 'https://www.facebook.com/mediaazhar1/posts/1128630372637021/',
  },
  {
    id: 4,
    title: 'فوز جامعة الأزهر بجائزة أفضل جامعة حكومية في الابتكار وريادة الأعمال',
    desc: 'تتويج جهود مركز الابتكار وشبكة حاضنات رواق بريادة الجامعات المصرية في دعم الشركات التكنولوجية الناشئة.',
    tag: 'إنجاز تاريخي',
    date: '18 سبتمبر 2024',
    img: '/images/event.png',
    link: 'https://www.facebook.com/mediaazhar1/posts/1057487843084608/',
  },
  {
    id: 5,
    title: 'مصر تفوز بالمركز الأول في مسابقة الإلكسو للابتكار والريادة برعاية رواق',
    desc: 'تتويج الباحثين في ختام المنتدى بالشارقة وتكريم المشروعات المحتضنة في المحافل الدولية المتخصصة.',
    tag: 'جوائز دولية',
    date: '20 ديسمبر 2024',
    img: '/images/news_hero.png',
    link: 'https://www.facebook.com/mediaazhar1/posts/1138595568307168/',
  },
];

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = newsItems.length - 1;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="hero-news-section">
      <div className="hero-news-container">
        <div className="hn-header">
          <div className="hn-title-box">
            <span className="hn-badge">
              <i className="fas fa-bullhorn"></i> أخبار ومستجدات الحاضنة
            </span>
            <h4 className="hn-heading">أحدث الفعاليات والبيانات الرسمية</h4>
          </div>
          <div className="hn-controls">
            <button className="hn-btn" onClick={prevSlide} aria-label="السابق">
              <i className="fas fa-chevron-right"></i>
            </button>
            <button className="hn-btn" onClick={nextSlide} aria-label="التالي">
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
        </div>

        <div className="hn-carousel-wrapper">
          <div
            className="hn-carousel-track"
            style={{
              transform: `translateX(${currentIndex * 34}%)`,
            }}
          >
            {newsItems.map((item) => (
              <div className="hn-card" key={item.id}>
                <div className="hn-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/event.png';
                    }}
                  />
                  <span className="hn-date">
                    <i className="far fa-calendar-alt"></i> {item.date}
                  </span>
                </div>
                <div className="hn-card-body">
                  <span className="hn-tag">{item.tag}</span>
                  <h5 className="hn-card-title">{item.title}</h5>
                  <p className="hn-card-desc">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hn-read-more"
                  >
                    اقرأ الخبر على فيسبوك <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
