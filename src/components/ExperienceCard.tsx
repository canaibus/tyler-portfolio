interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  tags: string[];
}

export function ExperienceCard({
  period,
  title,
  company,
  companyUrl,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <div className="group relative grid sm:grid-cols-[140px_1fr] gap-4 p-5 -mx-5 rounded-lg transition-all duration-200 hover:bg-bg-hover hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.05)]">
      <span className="text-xs font-semibold uppercase tracking-wide text-text-muted mt-1 whitespace-nowrap">
        {period}
      </span>
      <div>
        <h3 className="text-base font-medium text-text-primary leading-snug">
          {title} ·{" "}
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-1"
            >
              {company}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          ) : (
            <span>{company}</span>
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
    </div>
  );
}
