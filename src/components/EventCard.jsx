import { Link } from "react-router-dom";

function EventCard({ event }) {
  const wishlist =
    JSON.parse(localStorage.getItem("eventoraWishlist")) || [];

  const liked = wishlist.includes(event.id);

  const toggleWishlist = () => {
    if (!localStorage.getItem("eventoraUser")) {
      alert("Please login first.");
      return;
    }

    const updated = liked
      ? wishlist.filter((id) => id !== event.id)
      : [...wishlist, event.id];

    localStorage.setItem(
      "eventoraWishlist",
      JSON.stringify(updated)
    );

    window.location.reload();
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />

        <button
          className="wishlist-btn"
          onClick={toggleWishlist}
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="event-card-content">
        <div className="event-meta">
          <span>{event.category}</span>
          <span>⭐ {event.rating}</span>
        </div>

        <h3>{event.title}</h3>

        <p>📍 {event.location}</p>
        <p>📅 {event.date}</p>

        <div className="event-card-bottom">
          <div>
            <small>Starting from</small>
            <strong>₹{event.price}</strong>
          </div>

          <Link
            to={`/events/${event.id}`}
            className="btn-small"
          >
            View →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;