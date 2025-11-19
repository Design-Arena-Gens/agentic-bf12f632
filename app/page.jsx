import styles from "./page.module.css";

const loreItems = [
  {
    title: "Kabut Berbisik",
    description:
      "Angin menyusup di antara pepohonan raksasa, membawa bisikan yang terdengar seperti peringatan dari penjaga hutan purba."
  },
  {
    title: "Gerbang Ular",
    description:
      "Simbol ular menyala samar di reruntuhan gerbang batu tua, seolah merespons cahaya obor yang memotong kepekatan malam."
  },
  {
    title: "Langkah Waspada",
    description:
      "Ransel yang sarat perlengkapan menekan pundaknya, setiap langkah menyingkap akar besar dan rerumputan setinggi pinggang."
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.scene} aria-label="Ilustrasi petualang di hutan berkabut">
        <div className={styles.forestBackdrop} />
        <div className={styles.treeLine} />
        <div className={styles.treeSilhouette} />
        <div className={styles.fogLayer} />
        <div className={styles.fogLayer} />
        <div className={styles.grass} />
        <div className={styles.roots} />

        <div className={styles.torchLight} />

        <div className={styles.adventurer}>
          <div className={styles.figure}>
            <div className={styles.figureHood} />
            <div className={styles.figureHead} />
            <div className={styles.figureTorso} />
            <div className={styles.backpack} />
            <div className={styles.figureArmLeft} />
            <div className={styles.figureArmRight} />
            <div className={styles.figureLegLeft} />
            <div className={styles.figureLegRight} />
            <div className={styles.torch} />
          </div>
        </div>

        <div className={styles.gate}>
          <div className={styles.gateSymbol}>
            <span className={styles.symbolSnake} aria-hidden />
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <h1>Langkah ke Gerbang Ular</h1>
        <p>
          Di tengah kabut pekat dan hutan purba, seorang petualang menyalakan obor untuk
          menemukan jalan. Setiap helaan napas bercampur aroma lumut basah, tanah yang
          teraduk, dan ketegangan yang tak kunjung reda kala gerbang batu kuno semakin
          dekat.
        </p>
        <ul>
          {loreItems.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
