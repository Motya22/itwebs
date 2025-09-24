"use client";

import { useState } from "react";
import { Button } from "@/shared/ui";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <p>{count} likes</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </main>
  );
}
