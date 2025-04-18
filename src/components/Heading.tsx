import styles from './Heading.module.css';

export function Heading({ children, color }) {
  return <h1 style={{ background: color }}>{children}</h1>;
}
