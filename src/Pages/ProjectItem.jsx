import { useState } from "react";

function ProjectItem({ title, summary, tags = [] }) {
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

      {isOpen && (
        <div className="grid gap-8 pb-8 md:grid-cols-2">
          <div
            aria-hidden="true"
            className="grid min-h-48 place-items-center rounded-2xl border border-line bg-surface"
          >
            <span className="font-display text-9xl font-black leading-none text-transparent [-webkit-text-stroke:2px_var(--color-accent)]">
              {title.trim().charAt(0)}
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {summary && (
              <p className="max-w-prose text-lg text-muted sm:text-xl">
                {summary}
              </p>
            )}
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

export default ProjectItem;