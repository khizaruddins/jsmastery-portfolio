import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({id, title, description, titleClassName, className, img, imgClassName, spareImg}) => (
          <BentoGridItem id={id}
            key={id}
              title={title}
              titleClassName={titleClassName}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              >
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid;