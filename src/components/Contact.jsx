import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, green, aqua, yellow)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="rounded shadow p-5"
        style={{
          backgroundImage: "linear-gradient(135deg, #00c853, #40c4ff, #ffeb3b)",
          color: "#212121",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h1 className="mb-4 text-center fw-bold display-5">Contact Us</h1>

        <p className="text-center lead mb-4">
          Have <strong>questions</strong>, <strong>feedback</strong>, or{" "}
          <strong>ideas</strong>? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold text-dark">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control shadow-sm"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold text-dark">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control shadow-sm"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold text-dark">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control shadow-sm"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn fw-bold px-4 py-2 shadow"
              style={{
                background: "black",
                border: "none",
                color: "white",
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
