import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <h2>حاضنة رواق RWAQ</h2>
          <p>
            حاضنة الأعمال التكنولوجية بمركز الابتكار وريادة الأعمال جامعة الأزهر. نعمل على تمكين الشباب والباحثين
            لتحويل أفكارهم الابتكارية إلى شركات ناشئة ذات قيمة مضافة وقابلة للنمو والمنافسة محلياً ودولياً.
          </p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn fb-btn"
              aria-label="فيسبوك"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn ln-btn"
              aria-label="لينكد إن"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://spark.azhar.edu.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn spark-btn"
              title="مركز الابتكار وريادة الأعمال - جامعة الأزهر"
              aria-label="سبارك"
            >
              <span className="spark-s-logo">S</span>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>روابط سريعة</h4>
          <ul className="footer-links">
            <li>
              <Link href="/">الرئيسية</Link>
            </li>
            <li>
              <Link href="/about">عن الحاضنة</Link>
            </li>
            <li>
              <Link href="/programs">برامج الاحتضان</Link>
            </li>
            <li>
              <Link href="/startups">الشركات المحتضنة</Link>
            </li>
            <li>
              <Link href="/mentors">شبكة الموجهين</Link>
            </li>
            <li>
              <Link href="/news">الأخبار والفعاليات</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>الحاضنات والوحدات</h4>
          <ul className="footer-links">
            <li>
              <Link href="/programs#incubator-cairo">حاضنة رواق القاهرة</Link>
            </li>
            <li>
              <Link href="/programs#incubator-assiut">حاضنة رواق أسيوط</Link>
            </li>
            <li>
              <Link href="/programs#incubator-qena">حاضنة رواق قنا</Link>
            </li>
            <li>
              <Link href="/programs#incubator-nano">رواق تكنولوجيا النانو</Link>
            </li>
            <li>
              <Link href="/programs#incubator-medical">رواق الطبية</Link>
            </li>
            <li>
              <Link href="/programs#incubator-greentech">مركز التكنولوجيا الخضراء</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>تواصل معنا</h4>
          <ul className="footer-links">
            <li>
              <i className="fas fa-map-marker-alt"></i> مبنى مركز الابتكار، جامعة الأزهر، مدينة نصر، القاهرة
            </li>
            <li>
              <i className="fas fa-envelope"></i> rwaq@azhar.edu.eg
            </li>
            <li>
              <i className="fas fa-phone"></i> +20 2 22611404
            </li>
            <li>
              <i className="fas fa-clock"></i> الأحد - الخميس: 9:00 ص - 4:00 م
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} حاضنة الأعمال التكنولوجية رواق - مركز الابتكار وريادة الأعمال جامعة الأزهر. جميع الحقوق محفوظة.</p>
        <p>تصميم Google Material Design 3</p>
      </div>
    </footer>
  );
}
