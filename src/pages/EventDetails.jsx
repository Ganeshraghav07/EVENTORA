import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import events from "../data/events";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(
    (item) => item.id === Number(id)
  );

  const [tickets, setTickets] = useState(1);

  if (!event) {
    return (
      <div className="not-found">
        <h1>Event Not Found</h1>

        <Link to="/events" className="btn-primary">
          Back to Events
        </Link>
      </div>
    );
  }

  const total = event.price * tickets;

  const bookEvent = () => {
    const user = JSON.parse(
      localStorage.getItem("eventoraUser")
    );

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    const bookings =
      JSON.parse(
        localStorage.getItem("eventoraBookings")
      ) || [];

    const booking = {
      id: Date.now(),
      eventId: event.id,
      eventTitle: event.title,
      eventImage: event.image,
      date: event.date,
      time: event.time,
      location: event.location,
      venue: event.venue,
      tickets,
      total,
      userEmail: user.email,
    };

    localStorage.setItem(
      "eventoraBookings",
      JSON.stringify([...bookings, booking])
    );

    alert("🎉 Booking successful!");

    navigate("/bookings");
  };

  return (
    <section className="details-page">
      <div className="details-container">
        <div className="details-image">
          <img src={event.image} alt={event.title} />
        </div>

        <div className="details-content">
          <div className="event-meta">
            <span>{event.category}</span>
            <span>⭐ {event.rating}</span>
          </div>

          <h1>{event.title}</h1>

          <p className="details-description">
            {event.description}
          </p>

          <div className="event-info">
            <div>
              <span>📅</span>
              <div>
                <small>Date</small>
                <strong>{event.date}</strong>
              </div>
            </div>

            <div>
              <span>⏰</span>
              <div>
                <small>Time</small>
                <strong>{event.time}</strong>
              </div>
            </div>

            <div>
              <span>📍</span>
              <div>
                <small>Venue</small>
                <strong>{event.venue}</strong>
              </div>
            </div>
          </div>

          <div className="booking-box">
            <div className="price-row">
              <span>Ticket Price</span>
              <strong>₹{event.price}</strong>
            </div>

            <div className="ticket-selector">
              <span>Tickets</span>

              <div className="quantity">
                <button
                  onClick={() =>
                    setTickets(Math.max(1, tickets - 1))
                  }
                >
                  −
                </button>

                <strong>{tickets}</strong>

                <button
                  onClick={() =>
                    setTickets(Math.min(10, tickets + 1))
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="total-price">
              <span>Total</span>
              <strong>₹{total}</strong>
            </div>

            <button
              onClick={bookEvent}
              className="book-btn"
            >
              Book Tickets 🎟️
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;