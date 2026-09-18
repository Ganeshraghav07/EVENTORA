import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import events from "../data/events";

function Events() {
  const [params] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    params.get("category") || "All"
  );

  const categories = [
    "All",
    "Music",
    "Comedy",
    "Sports",
    "Technology",
    "Business",
    "Arts",
    "Food",
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase()) ||
      event.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="page-header">
        <span className="section-label">DISCOVER</span>
        <h1>Find Your Next Event</h1>
        <p>
          Explore amazing experiences happening around you.
        </p>
      </section>

      <section className="filters-section">
        <div className="search-box">
          🔍

          <input
            type="text"
            placeholder="Search events or cities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item ? "active-filter" : ""
              }
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="results-header">
          <div>
            <span className="section-label">RESULTS</span>
            <h2>
              {category === "All" ? "All Events" : category}
            </h2>
          </div>

          <span>{filteredEvents.length} events</span>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        ) : (
          <div className="no-events">
            <div>🔎</div>
            <h3>No events found</h3>
            <p>Try another search.</p>
          </div>
        )}
      </section>
    </>
  );
}

export default Events;