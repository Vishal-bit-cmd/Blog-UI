export default function About() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, green, aqua, yellow)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="d-flex align-items-center"
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-dark">About Blog-UI</h1>
          <p className="lead text-dark">
            Welcome to <strong>Blog-UI</strong> – your daily spot for sharing
            ideas, learning new things, and connecting with a community of
            passionate writers and readers.
          </p>
        </div>

        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div
              className="card shadow border-0 h-100 text-dark"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,0,0.8), rgba(0,255,255,0.6))",
                color: "white",
              }}
            >
              <div className="card-body">
                <h3 className="card-title fw-bold">Our Mission</h3>
                <p className="card-text">
                  Blog-UI was created to give everyone a simple way to publish
                  and read blogs. From <em>sports</em> to <em>tech</em> and{" "}
                  <em>travel</em>, there’s a space here for every voice.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="card shadow border-0 h-100 text-dark"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,0,0.8), rgba(0,255,255,0.6))",
                color: "white",
              }}
            >
              <div className="card-body">
                <h3 className="card-title fw-bold">Why Choose Blog-UI?</h3>
                <ul className="list-unstyled">
                  <li>📚 Easy blog creation</li>
                  <li>🌎 Community-driven content</li>
                  <li>📱 Mobile responsive design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h3 className="fw-bold text-dark">Join Us 🚀</h3>
          <p className="text-dark">
            Start your blogging journey today and be part of our growing
            community.
          </p>
          <a href="/blog/create" className="btn btn-dark btn-lg shadow">
            Create Your Blog
          </a>
        </div>
      </div>
    </div>
  );
}
