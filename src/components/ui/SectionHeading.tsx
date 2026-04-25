type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-fuchsia-300/80">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-pretty text-zinc-300">{description}</p> : null}
    </div>
  );
}
