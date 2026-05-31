import { ImageResponse } from "next/og";
import { OgCard, ogContentType, ogSize } from "@/lib/og";

export const dynamic = "force-static";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Field Notes — Shingi Mudyirwa";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Field notes"
        title="Case studies on what I've shipped — built for SEO and GEO."
        meta="shingi.tech/blog"
      />
    ),
    { ...ogSize },
  );
}
