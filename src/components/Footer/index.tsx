import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entendo como funciona a técnica pomodoro 🍅
      </RouterLink>
      <a
        href='https://github.com/swtz/lom-chronos-pomodoro-app'
        target='_blank'
      >
        Chronos Pomodoro &copy; {new Date().getFullYear()} — Feito com ❤️
      </a>
    </footer>
  );
}
