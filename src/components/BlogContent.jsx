import { useContext } from "react";
import { BlogContext } from "../BlogContext";
import { useParams } from "react-router-dom";

export default function BlogContent() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Blog not found ❌</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, green, aqua, yellow)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        <div className="card shadow-lg border-0">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="card-img-top"
              style={{ maxHeight: "400px", objectFit: "flex" }}
            />
          )}

          <div className="card-body">
            <h1 className="card-title text-center fw-bold mb-3">
              {blog.title}
            </h1>

            <div className="text-muted text-center mb-3">
              <small>
                <i className="bi bi-calendar-event"></i> {blog.date} &nbsp; |
                &nbsp;
                <i className="bi bi-tags"></i> {blog.genre}
              </small>
            </div>

            <p
              className="card-text"
              style={{ lineHeight: "1.8", textAlign: "justify" }}
            >
              {blog.content}
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-outline-success">
                <i className="bi bi-hand-thumbs-up"></i> {blog.likes}
              </button>
              <button className="btn btn-outline-danger">
                <i className="bi bi-hand-thumbs-down"></i> {blog.dislikes}
              </button>
              <button className="btn btn-outline-primary">
                <i className="bi bi-chat-dots"></i> {blog.comments.length}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
