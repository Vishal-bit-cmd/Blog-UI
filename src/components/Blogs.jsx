import { useContext } from "react";
import { BlogContext } from "../BlogContext";
import { Link } from "react-router-dom";

export default function Blogs() {
  const { blogs } = useContext(BlogContext);

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
        <h1 className="mb-4 fw-bold text-center">All Blogs</h1>

        {blogs.length === 0 ? (
          <div className="text-center">
            <p className="text-muted">No blogs yet. Create your first blog!</p>
            <Link to="/blog/create" className="btn btn-success">
              + Create Blog
            </Link>
          </div>
        ) : (
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-12 col-sm-6 col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <Link to={`/blog/${blog.id}`}>
                    <img
                      src={blog.image}
                      className="card-img-top"
                      alt={blog.title}
                      style={{ objectFit: "cover", height: "200px" }}
                    />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text flex-grow-1">
                      {blog.content.length > 80
                        ? blog.content.substring(0, 80) + "..."
                        : blog.content}
                    </p>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="btn btn-primary mt-auto"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {blogs.length > 0 && (
          <div className="text-center mt-4">
            <Link to="/blog/create" className="btn btn-success">
              + Create New Blog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
