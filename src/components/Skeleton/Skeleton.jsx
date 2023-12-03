import { useState, useEffect } from 'react';

import {
  SkeletonList,
  SkeletonCard,
  SkeletonTitleWrap,
  SkeletonTitle,
  SkeletonImage,
  SkeletonWrap,
  SkeletonDescription,
  SkeletonProjectType,
  SkeletonTextWrap,
  SkeletonButton,
} from './Skeleton.styled';

const Skeleton = ({ quantity }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(Array(quantity).fill({ component: SkeletonCard }));
  }, [quantity]);

  return (
    <SkeletonList>
      {cards.map((el, i) => {
        return (
          <el.component key={i}>
            <SkeletonTitleWrap>
              <SkeletonTitle></SkeletonTitle>
            </SkeletonTitleWrap>
            <SkeletonImage />
            <SkeletonWrap>
              <SkeletonTextWrap>
                <SkeletonDescription></SkeletonDescription>
                <SkeletonProjectType></SkeletonProjectType>
              </SkeletonTextWrap>
              <SkeletonButton></SkeletonButton>
            </SkeletonWrap>
          </el.component>
        );
      })}
    </SkeletonList>
  );
};

export default Skeleton;
