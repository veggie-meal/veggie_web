import React from 'react';
import {Progress, Card, Image} from 'antd';

const badges = ["/image/sky.png", "/image/apple.png", "/image/eggplant.png", "/image/cactus.png",
  "/image/tree.png", "/image/vegetable.png", "/image/carrot.png"]

const BadgeItem = (id) => {
  console.log(id.id);
  return (
    <div>
      <Image
        width="100%"
        src={badges[id.id]}
      />
    </div>
  );
}

export default BadgeItem;
