import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TabletMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-full max-w-[520px] aspect-[1024/724] rounded-[20px] border-[10px] border-[#2a2a2a] bg-[#111] shadow-[0_24px_60px_rgba(0,0,0,0.45)] overflow-hidden">
        <div className="absolute top-2.5 left-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#444]" />
        <ImageWithFallback
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
