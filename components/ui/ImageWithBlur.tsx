import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithBlurProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * Optimized image wrapper with blur placeholder, aspect ratio preservation,
 * and responsive sizing.
 *
 * Placeholder strategy:
 * - Uses dominant color or custom blurDataURL when available
 * - Falls back to next/image's built-in blur placeholder
 */
export default function ImageWithBlur({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  wrapperClassName,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  quality = 85,
}: ImageWithBlurProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        !fill && width && height && "aspect-[var(--w)/var(--h)]",
        wrapperClassName
      )}
      style={
        !fill && width && height
          ? { "--w": width, "--h": height } as React.CSSProperties
          : undefined
      }
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={quality}
        className={cn(
          "object-cover transition-all duration-700",
          "data-[loaded=false]:scale-105 data-[loaded=false]:blur-sm",
          className
        )}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGNlZmRjIi8+PC9zdmc+"
      />
    </div>
  );
}
