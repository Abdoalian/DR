'use client';

import { useState, useEffect } from 'react';

interface ApplyModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ApplyModal({ isOpen: externalIsOpen, onClose: externalOnClose }: ApplyModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    startupName: '',
    sector: '',
    summary: '',
  });

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  useEffect(() => {
    const handleOpenEvent = () => setInternalIsOpen(true);
    window.addEventListener('open-apply-modal', handleOpenEvent);
    return () => window.removeEventListener('open-apply-modal', handleOpenEvent);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      handleClose();
      setToastMessage('تم استلام طلبك بنجاح! سيتواصل معك فريق حاضنة رواق قريباً.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        startupName: '',
        sector: '',
        summary: '',
      });

      setTimeout(() => {
        setToastMessage(null);
      }, 5000);
    }, 800);
  };

  return (
    <>
      <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleClose}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={handleClose} aria-label="إغلاق">
            <i className="fas fa-times"></i>
          </button>
          <div className="modal-header">
            <h3>طلب الانضمام لحاضنة رواق RWAQ</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              املأ البيانات التالية لتقييم فكرة مشروعك من قبل لجنة الخبراء
            </p>
          </div>

          <form id="incubationForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">الاسم بالكامل *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="أدخل اسمك الثلاثي"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">البريد الإلكتروني *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="example@domain.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">رقم الهاتف / الواتساب *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="01012345678"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">الكلية / الجامعة / الجهة *</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="مثل: هندسة الأزهر"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">اسم المشروع الناشئ *</label>
              <input
                type="text"
                name="startupName"
                value={formData.startupName}
                onChange={handleChange}
                className="form-input"
                placeholder="أدخل اسم المشروع أو الفكرة"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">مجال المشروع *</label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">اختر المجال المناسب</option>
                <option value="ai">الذكاء الاصطناعي والبرمجيات</option>
                <option value="health">التكنولوجيا الطبية والصحية</option>
                <option value="agri">الزراعة والتكنولوجيا البيئية</option>
                <option value="fintech">التكنولوجيا المالية والتجارة الإلكترونية</option>
                <option value="nano">تكنولوجيا النانو والمواد المتقدمة</option>
                <option value="greentech">التكنولوجيا الخضراء وتغير المناخ</option>
                <option value="other">مجالات تكنولوجية أخرى</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">ملخص الفكرة والمشكلة التي تحلها *</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                className="form-textarea"
                rows={4}
                placeholder="اشرح فكرتك في أسطر قليلة والميزة التنافسية لها"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> جاري الإرسال...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> إرسال الطلب الآن
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {toastMessage && (
        <div className="toast show">
          <i className="fas fa-check-circle" style={{ color: 'var(--google-green)' }}></i>
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
