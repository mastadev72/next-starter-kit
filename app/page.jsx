import styles from './page.module.css'
import '@radix-ui/themes/styles.css';

export default function Home() {
  return (
    <section className="py-24 px-24">
      <div className='container'>
        <h1 className={styles.title}>MastADEV Studio</h1>
      </div>
    </section>
  );
}
