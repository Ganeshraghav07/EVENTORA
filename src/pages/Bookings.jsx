import { Link } from "react-router-dom";

function Bookings() {
  const user = JSON.parse(
    localStorage.getItem("eventoraUser")
  );

  const allBookings =
    JSON.parse(
      localStorage.getItem("eventoraBookings")
    ) || [];

  const bookings = user
    ? allBookings.filter(
        (booking) => booking.userEmail === user.email
      )
    : [];

  const cancelBooking = (id) => {
    const updated = allBookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "eventoraBookings",
      JSON.stringify(updated)
    );

    window.location.reload();
  };

  if (!user) {
    return (
      <div className="auth-required">
        <span className="auth-icon">🔐</span>

        <h1>Login Required</h1>

        <p>Login to view your bookings.</p>

        <Link to="/login" className="btn-primary">
          Login →
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="page-header">
        <span className="section-label">
          YOUR TICKETS
        </span>

        <h1>My Bookings</h1>

        <p>Your Eventora tickets.</p>
      </section>

      <section className="section">
        {bookings.length > 0 ? (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div
                className="booking-card"
                key={booking.id}
              >
                <img
                  src={booking.eventImage}
                  alt={booking.eventTitle}
                />

                <div className="booking-info">
                  <span className="confirmed">
                    ✓ CONFIRMED
                  </span>

                  <h2>{booking.eventTitle}</h2>

                  <p>📅 {booking.date}</p>
                  <p>⏰ {booking.time}</p>
                  <p>📍 {booking.location}</p>
                  <p>🎟️ {booking.tickets} ticket(s)</p>
                </div>

                <div className="booking-price">
                  <span>Total</span>

                  <strong>₹{booking.total}</strong>

                  <button
                    className="cancel-btn"
                    onClick={() =>
                      cancelBooking(booking.id)
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-events">
            <div>🎟️</div>

            <h3>No bookings yet</h3>

            <p>Find an event and book your ticket.</p>

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

export default Bookings;