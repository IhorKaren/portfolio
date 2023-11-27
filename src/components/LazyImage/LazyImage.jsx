import { useState } from 'react';

import { ProjectImage } from 'components/ProjectsList/ProjectsList.styled';
import { SkeletonImage } from 'components/CardSkeleton/CardSkeleton.styled';

const LazyImage = ({ src, width, height, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <ProjectImage
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoad={handleImageLoad}
        loading="lazy"
      />
      {!isLoaded && <SkeletonImage></SkeletonImage>}
    </>
  );
};

export default LazyImage;
