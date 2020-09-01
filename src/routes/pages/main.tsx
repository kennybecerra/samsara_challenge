import * as React from 'react';
import styles from './main.module.scss';
import owl from '../../assets/samsara_owl_white.png';
import Popup from '../../components/popup/popup';
import Icon from '../../components/Icon/Icon';
import { animated, useTransition, config } from 'react-spring';

interface IProps {}

const MainPage: React.FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [popupOpen, setPopupOpen] = React.useState(false);

  const features = [
    {
      number: '01',
      title: 'Real-time GPS Tracking',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur optio aut provident ratione repudiandae repellat, natus, alias rem nostrum, cumque vero a reiciendis incidunt! Ratione dolorem consectetur quas odio est!',
    },
    {
      number: '02',
      title: 'All-enabled Safety Cameras',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur optio aut provident ratione repudiandae repellat, natus, alias rem nostrum, cumque vero a reiciendis incidunt! Ratione dolorem consectetur quas odio est!',
    },
    {
      number: '03',
      title: 'Routing and Location Sharing',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur optio aut provident ratione repudiandae repellat, natus, alias rem nostrum, cumque vero a reiciendis incidunt! Ratione dolorem consectetur quas odio est!',
    },
  ];

  const handleClick = (newIndex: number): void => {
    setCurrentIndex(newIndex);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const imageTransition = useTransition(currentIndex, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: config.slow,
  });

  return (
    <div className={styles.background}>
      <img className={styles.owl} src={owl} alt='Samsara Owl' />
      <main className={styles.container}>
        <header className={styles.header}>
          <h2>Top 3 Features</h2>
          <h4>Here are some of our favorite features</h4>
        </header>
        <ul className={styles.features}>
          {features.map((feature, index) => {
            return (
              <li
                key={feature.number}
                className={`${styles.feature} ${
                  currentIndex === index && styles.selected
                }`}
                onClick={() => {
                  handleClick(index);
                }}>
                <span className={styles.number}>{feature.number}</span>
                <p className={styles.item}>{feature.title}</p>
              </li>
            );
          })}
        </ul>
        {imageTransition((style, item, t, i) => {
          return (
            <animated.div style={style} className={styles[`img_${item + 1}`]}>
              <Icon
                name='popout'
                className={styles.popoutIcon}
                onClick={() => {
                  setPopupOpen(true);
                }}
              />
            </animated.div>
          );
        })}
        <div className={styles.backdrop} />
      </main>
      <Popup isOpen={popupOpen} onRequestClose={handleClosePopup}>
        <div className={styles.popupContainer}>
          <h2 className={styles.popupNumber}>
            {features[currentIndex].number}
          </h2>
          <h4 className={styles.popupTitle}>{features[currentIndex].title}</h4>
          <p className={styles.popupContent}>
            {features[currentIndex].content}
          </p>
        </div>
      </Popup>
    </div>
  );
};

const memoizedPage = React.memo(MainPage);

export default memoizedPage;
