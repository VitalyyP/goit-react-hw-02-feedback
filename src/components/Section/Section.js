import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={s.container}>
      {title && <h3 className={s.title}>{title}</h3>}
      {children}
    </div>
  );
}
