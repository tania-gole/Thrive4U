import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          Thrive4U
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/process">My Process</Link>
          <Link href="/testimonials">Testimonials</Link>
        </nav>
      </div>
    </header>
  );
}
