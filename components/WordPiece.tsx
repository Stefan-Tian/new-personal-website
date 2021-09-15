import { useState, useEffect } from 'react';

interface WordPieceProps {
  word: string;
}

const GRADIENT_DELAY = 3600;
const WordPiece = ({ word }: WordPieceProps) => {
  const wordArr = word.split('');
  const [wrapperClassName, setWrapperClassName] = useState('word-piece');
  const [innerClassName, setInnerClassName] = useState('word-piece__animation');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInnerClassName('');
      setWrapperClassName('word-piece word-piece__gradient');
    }, GRADIENT_DELAY);

    () => clearTimeout(timeout);
  }, []);

  return (
    <span className={wrapperClassName}>
      {wordArr.map((char, idx) => (
        <span
          className={innerClassName}
          key={idx}
          style={{ animationDelay: `${Math.random() * 3}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default WordPiece;
