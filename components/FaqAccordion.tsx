'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'من يحق له التقديم والانضمام لحاضنة رواق؟',
    answer:
      'التقديم متاح لكافة طلاب وباحثي وخريجي جامعة الأزهر، بالإضافة إلى الفرق المبتكرة من مختلف الجامعات المصرية بشرط وجود فكرة مبتكرة قائمة على التكنولوجيا وتملك نموذج عمل واعد.',
  },
  {
    question: 'هل تشترط الحاضنة الحصول على نسبة ملكية في الشركة؟',
    answer:
      'تعتمد الحاضنة على تقديم دعم غير استثماري (منح ومساحات عمل وتوجيه) بدعم من أكاديمية البحث العلمي والتكنولوجيا والجهات الراعية بدون الحصول على ملكية مباشرة في بداية الاحتضان.',
  },
  {
    question: 'ما هي مدة برنامج الاحتضان بمركز الابتكار؟',
    answer:
      'تتراوح فترة الاحتضان الكاملة بين 6 أشهر إلى 12 شهراً تتخللها مراحل التوجيه والتطوير وإعداد النموذج الأول واختبار السوق حتى يوم التخرج Demo Day.',
  },
  {
    question: 'ما هو التمويل والدعم الذي توفره الحاضنة؟',
    answer:
      'توفر الحاضنة تمويلاً أولياً وبذور استثمار للمشروعات الفائزة، بالإضافة لمعامل التصنيع الرقمي، معامل النانو، الاستشارات القانونية والمالية، والتشبيك مع المستثمرين وصناديق الاستثمار الجريء.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-grid">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-item ${isOpen ? 'active' : ''}`} key={index}>
            <div
              className="faq-question"
              onClick={() => toggleFaq(index)}
              style={{ cursor: 'pointer' }}
            >
              <span>{faq.question}</span>
              <i
                className="fas fa-chevron-down"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              ></i>
            </div>
            {isOpen && <div className="faq-answer">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
