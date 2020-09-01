import * as React from 'react';
import styles from './popup.module.scss';
import Icon from '../Icon/Icon';
import { animated, useTransition, config } from 'react-spring';
interface IProps {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  onRequestClose: () => void;
}
const Popup: React.FC<IProps> = ({
  children,
  isOpen = false,
  onRequestClose,
}) => {
  const handleClick = () => {
    onRequestClose();
  };

  const transition = useTransition(isOpen, {
    from: { opacity: '0' },
    enter: { opacity: '1' },
    leave: { opacity: '0' },
    config: config.stiff,
  });

  return transition((style, item, t, i) => {
    return (
      item && (
        <animated.div
          style={style}
          className={styles.backdrop}
          onClick={handleClick}>
          <div className={styles.container}>
            {children}
            <Icon name='close' className={styles.close} onClick={handleClick} />
          </div>
        </animated.div>
      )
    );
  });
};

const memoizedPopup = React.memo(Popup);

export default memoizedPopup;
