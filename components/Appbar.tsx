import Link from 'next/link';

const Appbar = () => {
  return (
    <header className="appbar">
      <div className="appbar__name">Stefan Tien</div>
      <div className="appbar__list">
        <Link href="/projects">
          <a className="appbar__listitem">projects</a>
        </Link>
        <a
          className="appbar__listitem"
          href="https://www.linkedin.com/in/stefan-tian-021542125/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </div>
    </header>
  );
};

export default Appbar;
