import styles from 'styles/modules/word-piece.module.scss';

interface WordPieceProps {
  word: string;
}

const WordPiece = ({ word }: WordPieceProps) => {
  const wordArr = word.split('');

  return (
    <span className={styles.word}>
      {wordArr.map((char, idx) => (
        <span
          className={styles.character}
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
