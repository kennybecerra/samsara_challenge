import React from 'react';

interface IProps {
  name: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Icon: React.FC<IProps> = ({ name = '', className = '', ...props }) => (
  <svg
    {...props}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox={getViewBox(name)}
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    {getPath(name)}
  </svg>
);

const MemoizedIcon = React.memo(Icon);

export default MemoizedIcon;

const getViewBox = (name: string) => {
  switch (name) {
    case 'popout':
      return '0 0 79 79';
    case 'close':
      return '0 0 37 37';
    default:
      return '0 0 32 32';
  }
};

const getPath = (name: string) => {
  switch (name) {
    case 'popout':
      return (
        <>
          <g filter='url(#filter0_d)'>
            <path d='M41.25 12H8.9875C7.92994 12 6.9157 12.4201 6.16791 13.1679C5.42011 13.9157 5 14.9299 5 15.9875V66.0125C5 67.0699 5.42011 68.0842 6.16791 68.832C6.9157 69.5799 7.92994 70 8.9875 70H59.0125C60.0699 70 61.0842 69.5799 61.832 68.832C62.5799 68.0842 63 67.0699 63 66.0125V33.75' />
            <path d='M74 24V1H51' />
            <path d='M34 41L74 1' />
          </g>
          <defs>
            <filter
              id='filter0_d'
              x='0'
              y='0'
              width='79'
              height='79'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow'
                result='shape'
              />
            </filter>
          </defs>
        </>
      );
    case 'close':
      return (
        <>
          <path d='M1 36.115L36.115 1' />
          <path d='M36.115 36.115L1 1' />
        </>
      );
    default:
      return <path />;
  }
};
