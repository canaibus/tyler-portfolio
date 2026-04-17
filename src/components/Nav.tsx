import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex flex-col gap-3 mt-12">
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className={`group flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
            active === href
              ? "text-text-primary"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          <span
            className={`block h-px transition-all duration-200 ${
              active === href
                ? "w-16 bg-text-primary"
                : "w-8 bg-text-muted group-hover:w-16 group-hover:bg-text-primary"
            }`}
          />
          {label}
        </a>
      ))}
    </nav>
  );
}
