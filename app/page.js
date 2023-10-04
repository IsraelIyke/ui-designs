"use client";
import NavBar from "@/app/components/nav";
import { motion } from "framer-motion";
import FooterBar from "./components/footer";

const tags = [
  "Blender",
  "Browser",
  "Cross-platform",
  "Hololens",
  "Microsoft",
  "Mixed Reality",
  "Modelling",
  "MR",
  "nodejs",
  "Streamsocket",
  "Unity",
  "Unity3D",
  "Unreal engine",
  "VR",
  "Websocket",
];

const recent = [
  "AAD Login on HoloLens 2",
  "Blender in Azure",
  "Simplygon in Azure",
  "HoloLens 2 Unreal Project Template",
  "Azure Speech Studio for Mixed Reality",
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className="blog-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <NavBar />{" "}
      <div className="blog-search">
        <input placeholder="🔎 Search articles, topics, etc" />
        <button>Search</button>
      </div>
      <div className="blog-tags">
        <p>Tags</p>
        <div className="blog-tags-card">
          {tags.map((items) => {
            return <div key={items}>{items}</div>;
          })}
        </div>
      </div>
      <motion.div
        className="blog-recent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>Recent posts</p>
        <div className="blog-recent-card">
          {recent.map((items) => {
            return <div key={items}>{items}</div>;
          })}
        </div>
      </motion.div>
      <FooterBar />
    </motion.div>
  );
}
