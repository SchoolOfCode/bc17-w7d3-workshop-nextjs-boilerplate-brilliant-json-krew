import React from 'react'
import styles from './styleFooter.module.css';
// import HeaderComponent from '../Header/HeaderComponent';
export default function FooterComponent() {
  return (
    <div>
      <footer className={styles.footerContainerBg}>
              <section className ={styles.footerContainer}>
                <article className={styles.footerColumn}>
                  <ul className={styles.listDecoration}>
                    <li><p>Find us on:</p></li>
                    <li><a href="https://www.facebook.com" className="social-link">Facebook</a></li>
                    <li><a href="https://www.instagram.com" className="social-link">Instagram</a></li>
                    <li><a href="https://www.tiktok.com" className="social-link">TikTok</a></li> 
                  </ul>           
                </article>
                <article className={styles.footerColumn}>
                <p>Contact us:</p>
                <address><a href="mailto:info@firepalace.co.uk" className={styles.listDecoration}
                >info@firepalace.co.uk</a></address>
                </article>
              </section>
      </footer>
    </div>
  )
}


