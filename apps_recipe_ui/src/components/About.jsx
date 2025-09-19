export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-10 py-12 m-12">
      <h1 className="text-lg font-bold mb-6 text-gray-800">
        About Me & This Project
      </h1>
      <p className="text-base text-gray-700 mb-4">
        Hey there! I’m <span className="font-semibold">Cindy</span>, an
        AI-focused software developer who loves crafting clean, efficient, and
        impactful digital experiences.
      </p>
      <p className="text-base text-gray-700 mb-4">
        This project mainly focuses on{" "}
        <span className="font-semibold">React</span>,{" "}
        <span className="font-semibold">Tailwind CSS</span>, and{" "}
        <span className="font-semibold">Node.js</span> with{" "}
        <span className="font-semibold">Java Spring Boot</span> as its backend
        technologies.
      </p>
      <p className="text-base text-gray-700 mb-4">
        When I’m not coding, I enjoy exploring AI technologies, or working on
        passion projects that challenge me creatively and technically.
      </p>
      <p className="text-base text-gray-700">
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline"
        >
          LinkedIn
        </a>{" "}
        or check out my work on{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
