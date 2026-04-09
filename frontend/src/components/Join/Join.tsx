import "./Join.css";

export default function Join() {
  return (
    <section className="join" id="join">
      <div className="join__container container">
        <h2 className="join__title">
          Join us on email for
          <br />
          <span className="join__titleAccent">
            more trending topics
          </span>
        </h2>

        <button className="join__button">
          Join Now
        </button>
      </div>
    </section>
  );
}