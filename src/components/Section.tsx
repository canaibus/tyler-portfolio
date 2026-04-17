import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-24 scroll-mt-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-8 lg:hidden sticky top-0 bg-bg/80 backdrop-blur-sm py-4 -mx-6 px-6 z-20">
        {title}
      </h2>
      {children}
    </section>
  );
}
