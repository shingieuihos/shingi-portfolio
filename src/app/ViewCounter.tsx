"use client";

import { useEffect, useState } from "react";

export function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/views", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active && data && typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch(() => {
        /* counter is best-effort; ignore failures */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2 tabular-nums">
      {count === null ? "··· views" : `${count.toLocaleString()} views`}
    </span>
  );
}
