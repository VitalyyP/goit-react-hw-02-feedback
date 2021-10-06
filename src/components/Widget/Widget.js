import s from './Widget.module.css';

function Widget = () => {
  return (
    
    <div className={s.container}>
      <p className={s.title}>Please leave feedback</p>
      <div className={s.bottons}>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
      <p className={s.title}>Statistics</p>
      <p>Good:</p>
      <p>Neutral:</p>
      <p>Bad:</p>
    </div>
  )
}

export default Widget;