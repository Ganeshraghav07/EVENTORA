import { Link } from "react-router-dom";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("eventoraUser")
  );

  if (!user) {
    return (
      <div className="auth-required">
        <span className="auth-icon">👤</span>

        <h1>Login Required</h1>

        <p>Login to view your profile.</p>

        <Link to="/login" className="btn-primary">
          Login →
        </Link>
      </div>
    );
  }

  const bookings =
    JSON.parse(
      localStorage.getItem("eventoraBookings")
    ) || [];

  const wishlist =
    JSON.parse(
      localStorage.getItem("eventoraWishlist")
    ) || [];

  const myBookings = bookings.filter(
    (booking) => booking.userEmail === user.email
  );

  const totalSpent = myBookings.reduce(
    (sum, booking) => sum + booking.total,
    0
  );

  return (
    <div className="profile-page">
      <section className="profile-header">
        <div className="avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <span className="section-label">
            EVENTORA MEMBER
          </span>

          <h1>{user.name}</h1>

          <p>{user.email}</p>
        </div>
      </section>

      <section className="profile-stats">
        <div>
          <strong>{myBookings.length}</strong>
          <span>Bookings</span>
        </div>

        <div>
          <strong>{wishlist.length}</strong>
          <span>Wishlist</span>
        </div>

        <div>
          <strong>₹{totalSpent}</strong>
          <span>Total Spent</span>
        </div>
      </section>

      <section className="profile-card">
        <h2>Account Information</h2>

        <div className="profile-row">
          <span>Name</span>
          <strong>{user.name}</strong>
        </div>

        <div className="profile-row">
          <span>Email</span>
          <strong>{user.email}</strong>
        </div>

        <div className="profile-row">
          <span>Member Since</span>
          <strong>2026</strong>
        </div>
      </section>
    </div>
  );
}

export default Profile;