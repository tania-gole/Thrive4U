export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div>&copy; {year} Thrive4U Coaching &amp; Consulting</div>
        <div>
          <a href="mailto:hello@thrive4u.com">hello@thrive4u.com</a>
        </div>
      </div>
    </footer>
  );
}
