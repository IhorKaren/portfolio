import { useState, useEffect } from 'react';
import {
  SkeletonList,
  SkeletonCard,
  SkeletonTitleWrap,
  SkeletonTitle,
  SkeletonImage,
  SkeletonWrap,
  SkeletonButton,
} from './CardSkeleton.styled';

const CardSkeleton = ({ quantity }) => {
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
              <SkeletonButton></SkeletonButton>
            </SkeletonWrap>
          </el.component>
        );
      })}
    </SkeletonList>
  );
};

export default CardSkeleton;
