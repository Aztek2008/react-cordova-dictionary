import { useAppSelector } from 'app/hooks';
import { Button } from 'features/buttons/Button';
import { IWord, selectWord } from 'features/inputForm/inputSlice';

import styles from './LearningCard.module.css';

interface ICardProps {
  array: IWord[];
  guessTranslationHandler: (event: string) => void;
}

export const LearningCard = (props: ICardProps) => {
  const { array, guessTranslationHandler } = props;
  const word = useAppSelector(selectWord);

  const arraySorter = (a: IWord, b: IWord) => {
    const aValue = a.value.toLowerCase();
    const bValue = b.value.toLowerCase();

    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  };

  const sortedArray = [...array].sort(arraySorter);

  return (
    <div>
      <p className={styles.learnedWord}>{word?.value}</p>
      <div>
        {sortedArray.map((item) => (
          <Button
            key={item.id}
            handlerFn={() => guessTranslationHandler(item.id)}
            title={item.translationValue}
          />
        ))}
      </div>
    </div>
  );
};
