interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  imageUrl?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  url,
  imageUrl,
  featured,
}: ProjectCardProps) {
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative block p-5 -mx-5 rounded-lg transition-all duration-200 hover:bg-bg-hover hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.05)] ${
        featured ? "sm:grid sm:grid-cols-[1fr_200px] gap-6" : ""
      }`}
    >
      <div>
        <h3 className="text-base font-medium text-text-primary leading-snug inline-flex items-center gap-1.5">
          {title}
          {url && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          )}
        </h3>
        <p className="text-sm text-text-secondary mt-2 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-accent bg-accent-muted px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {featured && imageUrl && (
        <div className="hidden sm:block mt-1">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-md border border-border object-cover w-full opacity-70 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      )}
    </Wrapper>
  );
}
