import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.bottons}>
      <button onClick={() => onLeaveFeedback('good')} type="button">
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} type="button">
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} type="button">
        Bad
      </button>
    </div>
  );
}
