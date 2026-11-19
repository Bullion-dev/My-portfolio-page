import { useState } from "react";

function ProjectItem({ title, summary }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-accent"
        >
          <span className="font-display text-2xl font-bold sm:text-3xl">
            {title}
          </span>
          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-xl"
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      {isOpen && <p className="mt-3 max-w-prose text-muted sm:text-xl">{summary}</p>}
    </article>
  );
}

export default ProjectItem;
