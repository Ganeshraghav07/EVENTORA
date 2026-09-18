import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import events from "../data/events";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            ✨ INDIA'S EVENT DISCOVERY PLATFORM
          </span>

          <h1>
            Create Moments
            <span> Worth Remembering.</span>
          </h1>

          <p>
            Discover concerts, festivals, sports, comedy,
            technology and unforgettable experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/events" className="btn-primary">
              Explore Events →
            </Link>

            <Link to="/register" className="btn-secondary">
              Join Eventora
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>50K+</strong>
              <span>Events</span>
            </div>

            <div>
              <strong>2M+</strong>
              <span>Users</span>
            </div>

            <div>
              <strong>150+</strong>
              <span>Cities</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE</span>
            <h2>Browse Categories</h2>
          </div>
        </div>

        <div className="categories">
          <Link to="/events?category=Music" className="category-card">
            <span>🎵</span>
            <h3>Music</h3>
            <p>Concerts & festivals</p>
          </Link>

          <Link to="/events?category=Comedy" className="category-card">
            <span>😂</span>
            <h3>Comedy</h3>
            <p>Laugh & enjoy</p>
          </Link>

          <Link to="/events?category=Sports" className="category-card">
            <span>🏆</span>
            <h3>Sports</h3>
            <p>Feel the action</p>
          </Link>

          <Link to="/events?category=Technology" className="category-card">
            <span>💻</span>
            <h3>Technology</h3>
            <p>Future & innovation</p>
          </Link>

          <Link to="/events?category=Food" className="category-card">
            <span>🍔</span>
            <h3>Food</h3>
            <p>Taste something new</p>
          </Link>

          <Link to="/events?category=Arts" className="category-card">
            <span>🎨</span>
            <h3>Arts</h3>
            <p>Culture & creativity</p>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-label">TRENDING NOW</span>
            <h2>Popular Events</h2>
          </div>

          <Link to="/events" className="view-all">
            View All →
          </Link>
        </div>

        <div className="events-grid">
          {events.slice(0, 6).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <span className="section-label">READY?</span>

        <h2>Your next unforgettable experience awaits.</h2>

        <p>Find an event. Book a ticket. Make a memory.</p>

        <Link to="/events" className="btn-primary">
          Discover Events →
        </Link>
      </section>
    </>
  );
}

export default Home;