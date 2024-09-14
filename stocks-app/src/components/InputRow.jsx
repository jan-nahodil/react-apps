export default function InputRow({ value, userInput }) {
  return (
    <section id="user-input">
      <div id="user-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) => value(event.target.value, "initialInvestment")}
            required
          />
        </p>
        <p>
          <label>Anual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => value(event.target.value, "annualInvestment")}
          />
        </p>
        <p>
          <label>Expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => value(event.target.value, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => value(event.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
