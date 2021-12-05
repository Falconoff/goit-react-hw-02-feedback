export default function FeedbackOptions({ options }) {
  return (
    <ul>
      {options.map((item, index) => (
        <li key={index}>
          <button type="button">{item}</button>
        </li>
      ))}
      {/* <li>
        <button type="button">Good</button>
      </li>
      <li>
        <button type="button">Neutral</button>
      </li>
      <li>
        <button type="button">Bad</button>
      </li> */}
    </ul>
  );
}
