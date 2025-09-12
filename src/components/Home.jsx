import { useContext } from "react";
import { BlogContext } from "../BlogContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { blogs } = useContext(BlogContext);
  const latestBlogs = blogs.slice(-3).reverse();
  return (
    <div>
      <header
        className="text-black text-center d-flex align-items-center"
        style={{
          backgroundImage: "linear-gradient(135deg, green, aqua, yellow)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold">Your Daily Blog Spot</h1>
          <p className="lead">
            Discover, Learn & Share insights on Technology, Sports and more.
          </p>
          <a href="/blog" className="btn btn-primary btn-lg mt-3 shadow">
            Start Reading →
          </a>
        </div>
      </header>

      <section
        className="py-5"
        style={{
          backgroundImage: "linear-gradient(135deg, lightgrey, aqua,lightgrey)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Latest Blogs</h2>
          {latestBlogs.length === 0 ? (
            <p className="text-center text-muted">
              No blogs yet.{" "}
              <Link to="/blog/create">Create your first blog!</Link>
            </p>
          ) : (
            <div className="row">
              {latestBlogs.map((blog) => (
                <div key={blog.id} className="col-12 col-md-4 mb-4">
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
          <div className="text-center mt-3">
            <Link to="/blog" className="btn btn-outline-dark">
              View All Blogs
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-5 text-center"
        style={{
          backgroundImage: "linear-gradient(135deg, whitesmoke, aqua,white)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold">Got something to share?</h2>
          <a href="/blog/create" className="btn btn-dark btn-lg mt-3">
            + Create a Blog
          </a>
        </div>
      </section>
    </div>
  );
}
