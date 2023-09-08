"use client";
import { usePathname } from "next/navigation";

export default function Id(params) {
  const path = usePathname();
  console.log(path);
  return <div>Bienvenue {path}</div>;
}
