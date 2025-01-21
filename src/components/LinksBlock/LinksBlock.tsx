import styles from './LinksBlock.module.css';


// Определяем тип для элементов socialLinks
interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

// Данные с массивом ссылок
const socialLinks: SocialLink[] = [
  { src: '/Group 196.png', alt: 'X', href: 'https://x.com' },
  { src: '/Group 195.png', alt: 'Telegram', href: 'https://t.me' },
  { src: '/Group 193.png', alt: 'Discord', href: 'https://discord.com' },
  { src: '/Group 194.png', alt: 'Instagram', href: 'https://instagram.com' },
  { src: '/Group 192.png', alt: 'CoinMarketCap', href: 'https://coinmarketcap.com' },
  { src: '/Group 191.png', alt: 'Twitter', href: 'https://twitter.com' },
  { src: '/Group 190.png', alt: 'CoinGecko', href: 'https://coingecko.com' },
  { src: '/Group 189.png', alt: 'YouTube', href: 'https://youtube.com' },
  

  
];

// Компонент LinksBlock
const LinksBlock = () => {
  return (
    <div className={styles.container}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src={link.src} alt={link.alt} className={styles.image} />
        </a>
      ))}
    </div>
  );
};

export default LinksBlock;

