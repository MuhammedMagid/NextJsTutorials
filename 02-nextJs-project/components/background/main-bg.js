import style from "./main-bg.module.css"

const MainBg = () => {
  return (
    <svg className={style.background}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#663300" />
            <stop offset="100%" stop-color="#996633" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" />
    </svg>
  );
};

export default MainBg;