import Link from 'next/link';
import styles from 'styles/modules/appbar.module.scss';

const Appbar = () => {
  return (
    <header className={styles.appbar}>
      <Link href="/" className={styles.brand}>
        Stefan Tien
      </Link>
      <nav>
        <Link href="/projects" className={styles.navItem}>
          projects
        </Link>
        <a
          className={styles.navItem}
          href="https://www.linkedin.com/in/stefan-tien-021542125/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </nav>
    </header>
  );
};

export default Appbar;
