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
export default function Home() {
  return (
    <div className="blog-container">
      <div className="blog-tags">
        <p>Tags</p>
        <div className="blog-tags-card">
          {tags.map((items) => {
            return <div key={items}>{items}</div>;
          })}
        </div>
      </div>
      <div className="blog-search">
        <input placeholder="Search articles, topics, etc" />
        <button>Search</button>
      </div>
      <div className="blog-recent">
        <p>Recent posts</p>
        <div className="blog-recent-card">
          {recent.map((items) => {
            return <div key={items}>{items}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
