import { useContext, useState } from "react";
import { BlogContext } from "../BlogContext";
import { useNavigate } from "react-router-dom";

export default function BlogCreate() {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: blogs.length + 1,
      title,
      content,
      genre,
      image: image,
      date: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };

    setBlogs((prevBlogs) => {
      const updated = [...prevBlogs, newBlog];
      localStorage.setItem("blogs", JSON.stringify(updated));
      return updated;
    });

    navigate("/blog");
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, green, aqua, yellow)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container py-4 fw-bold text-dark">
        <h1 className="fw-bold text-center">Create Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              className="form-control"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Genre</label>
            <select
              className="form-select"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            >
              <option value="">Select a genre</option>
              <option value="Sports">Sports</option>
              <option value="Cinema">Cinema</option>
              <option value="Politics">Politics</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Technology">Technology</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleImageUpload}
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="img-thumbnail mt-2"
                style={{ maxHeight: "200px" }}
              />
            )}
          </div>

          <button type="submit" className="btn btn-success">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
