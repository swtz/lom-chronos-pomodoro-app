import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro/'>
        Entendo como funciona a técnica pomodoro 🍅
      </Link>
      <a
        href='https://github.com/swtz/lom-chronos-pomodoro-app'
        target='_blank'
      >
        Chronos Pomodoro &copy; {new Date().getFullYear()} — Feito com ❤️
      </a>
    </footer>
  );
}
