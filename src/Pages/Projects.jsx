import ProjectItem from "./ProjectItem";

function Projects() {
  const projects = [
    {
      id: "seamstress",
      title: "Seamstress Management frontend",
      summary:
        "A booking system with two sides. Guests browse rooms and reserve, while staff manage rooms and reservations from an admin area. The React front end connects to a PHP API and its database.follow this template",
        tags: ['React', 'PHP', 'REST API'],
    },
    {
      id: "hotel",
      title: "Hotel Booking System (full stack project)",
      summary:
        "A booking system with two sides. Guests browse rooms and reserve, while staff manage rooms and reservations from an admin area. The React front end connects to a PHP API and its database.",
        tags: ['React', 'PHP', 'REST API'],
    },
    {
      id: "nyamba",
      title: "Nyamba Center Website",
      summary:
        "A website for a non-profit, taken from wireframe to a written design direction before any code, so the build had clear type, colour and layout decisions to follow.",
        tags: ['PHP', 'Silverstripe'],
    },
    {
      id: "food",
      title: "Food Website design(Figma)",
      summary:
        "A booking system with two sides. Guests browse rooms and reserve, while staff manage rooms and reservations from an admin area. The React front end connects to a PHP API and its database.",
        tags: [ 'Figma'],
    },
  ];

  return (
    <section id="projects" className="mt-20">
      <h2 className="font-display text-5xl font-black sm:text-7xl">
        Projects
        <sup className="ml-2 align-super font-body text-sm font-normal text-accent">
          ({projects.length})
        </sup>
      </h2>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          summary={project.summary}
          tags={project.tags}
        />
      ))}
    </section>
  );
}

export default Projects;
