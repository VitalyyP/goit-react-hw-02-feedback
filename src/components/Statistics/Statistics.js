import s from './Statistics.module.css';
import NotificationMessage from '../NotificationMessage';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedbacks,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      {countTotalFeedbacks() > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {countTotalFeedbacks()}</p>
          <p>Positive feedbacks: {countPositiveFeedbackPercentage(countTotalFeedbacks())} %</p>
        </>
      ) : (
        <NotificationMessage />
      )}
    </>
  );
}
