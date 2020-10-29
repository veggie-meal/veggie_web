import React from 'react';
import { Image } from 'antd';

const badgeImages = {
  1: '/image/eggplant.png',
  2: '/image/apple.png',
  3: '/image/cactus.png',
  4: '/image/veggie.png',
  5: '/image/vegetable.png',
  6: '/image/underthesea.png',
  7: '/image/sky.png',
  8: '/image/tree.png',
  9: '/image/carrot.png',
};

const BadgeItem = ({ id }) => {
  return (
    <div>
      <Image
        width="100%"
        src={badgeImages[id]}
      />
    </div>
  );
}

export default BadgeItem;
