import { useState, useEffect } from "react";
import { BlogContext } from "./BlogContext";

const defaultBlogs = [
  {
    id: 1,
    title: "Asia Cup 2025 - Preview",
    content:
      "The 17th edition of the continental tournament will be contested in the T20 format, given its proximity to the T20 World Cup 2026. After months of uncertainty over the tournament, 8 teams will come together to play in a battle of Asian Supremacy. The 20-day-long tournament was put in a limbo in the aftermath of India and Pakistan's cross-border tensions. However, despite the calls of boycotting the tournament, the Indian government allowed the cricket team to play in the continental tournament, keeping the broader picture in mind.On the other hand, Group B comprises of Afghanistan, Bangladesh, Hong Kong and Sri Lanka. After the initial group stage, where each team will face each other once, the top two teams from each group will further progress to Super 4 stage, where they will again take on each other once.In the end, the team finishing in the top two of the Super 4 stages will make it to the final, which is set to be played on Sunday, September 28 at Dubai International Cricket Stadium, Dubai.",
    image: "/assets/asiacup.webp",
    genre: "Sports",
    date: new Date().toLocaleString(),
    likes: 0,
    dislikes: 0,
    comments: [],
  },
  {
    id: 2,
    title: "The Rise of AI in Everyday Life",
    content:
      "Artificial Intelligence has moved from research labs into our daily lives. From voice assistants like Alexa to recommendation systems on Netflix, AI is shaping how we live, work, and connect. In this blog, we explore how AI is becoming more human-like and what the future might hold.AI is no longer just a tool—it’s becoming a companion that adapts to our routines.It influences decisions we make every day, often without us even realizing it.As technology evolves, the line between human intelligence and machine intelligence continues to blur.Businesses are leveraging AI to streamline operations and predict customer needs.Healthcare is seeing breakthroughs with AI-powered diagnostics and treatment plans.Meanwhile, ethical debates around privacy, bias, and control are becoming more urgent than ever.",
    image: "/assets/rise-of-ai.png",
    genre: "Tech",
    date: new Date().toLocaleString(),
    likes: 0,
    dislikes: 0,
    comments: [],
  },
];

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(() => {
    const stored = localStorage.getItem("blogs");
    return stored ? JSON.parse(stored) : defaultBlogs;
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}
