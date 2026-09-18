import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import events from "../data/events";

function Wishlist() {
  const user = JSON.parse(
    localStorage.getItem("eventoraUser")
  );

  const wishlist =
    JSON.parse(
      localStorage.getItem("eventoraWishlist")
    ) || [];

  if (!user) {
    return (
      <div className="auth-required">
        <span className="auth-icon">❤️</span>

        <h1>Login Required</h1>

        <p>Login to save favourite events.</p>

        <Link to="/login" className="btn-primary">
          Login →
        </Link>
      </div>
    );
  }

  const likedEvents = events.filter((event) =>
    wishlist.includes(event.id)
  );

  return (
    <>
      <section className="page-header">
        <span className="section-label">
          SAVED EVENTS
        </span>

        <h1>My Wishlist ❤️</h1>

        <p>Your favourite events.</p>
      </section>

      <section className="section">
        {likedEvents.length > 0 ? (
          <div className="events-grid">
            {likedEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        ) : (
          <div className="no-events">
            <div>🤍</div>

            <h3>Your wishlist is empty</h3>

            <p>Save events you don't want to miss.</p>

            <Link
              to="/events"
              className="btn-primary"
            >
              Explore Events →
            </Link>
          </div>
        )}
      </section>
    </>
  );
}

export default Wishlist;