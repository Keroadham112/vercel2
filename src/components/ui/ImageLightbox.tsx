import { useEffect } from "react";
import { motion } from "framer-motion";
import type { ProjectImage } from "../../data/portfolio";

type ImageLightboxProps = {
  title: string;
  images: ProjectImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export function ImageLightbox({ title, images, index, onIndexChange, onClose }: ImageLightboxProps) {
  const hasMany = images.length > 1;
  const show = (next: number) => onIndexChange((next + images.length) % images.length);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndexChange((index + 1) % images.length);
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onClose, onIndexChange]);

  const image = images[index];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <figure className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-full rounded-xl border border-white/10 object-contain shadow-[0_0_45px_rgba(168,85,247,0.35)]"
        />
        <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-zinc-300">
          <span>
            <span className="font-medium text-white">{title}</span> — {image.alt}
          </span>
          {hasMany ? (
            <span className="shrink-0 text-zinc-500">
              {index + 1} / {images.length}
            </span>
          ) : null}
        </figcaption>

        {hasMany ? (
          <>
            <button
              type="button"
              className="glass-btn absolute left-2 top-[40%] !rounded-full !bg-black/60 !p-2.5"
              aria-label="Previous screenshot"
              onClick={() => show(index - 1)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              className="glass-btn absolute right-2 top-[40%] !rounded-full !bg-black/60 !p-2.5"
              aria-label="Next screenshot"
              onClick={() => show(index + 1)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        ) : null}

        <button
          type="button"
          className="glass-btn absolute -top-3 -right-3 !rounded-full !bg-black/70 !p-2"
          aria-label="Close"
          onClick={onClose}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </figure>
    </motion.div>
  );
}
