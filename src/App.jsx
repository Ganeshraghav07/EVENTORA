import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/events/:id"
            element={<EventDetails />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/bookings"
            element={<Bookings />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <h2>✦ EVENTORA</h2>
          <p>
            Discover experiences. Create memories.
          </p>
        </div>

        <p>© 2026 Eventora</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;