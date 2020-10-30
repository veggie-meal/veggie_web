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
  mono: {
    1: '/image/mono/eggplant.png',
    2: '/image/mono/apple.png',
    3: '/image/mono/cactus.png',
    4: '/image/mono/veggie.png',
    5: '/image/mono/vegetable.png',
    6: '/image/mono/underthesea.png',
    7: '/image/mono/sky.png',
    8: '/image/mono/tree.png',
    9: '/image/mono/carrot.png',
  },
};

const BadgeItem = ({ id, achieved }) => {
  const src = achieved ? badgeImages[id] : badgeImages.mono[id];

  return (
    <div>
      <Image
        width="100%"
        src={src}
      />
    </div>
  );
}

export default BadgeItem;
