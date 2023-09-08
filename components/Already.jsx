import Link from "next/link";

export default function Already({ label, href, link }) {
  return (
    <div style={{ fontSize: ".9rem" }}>
      <span>
        {label}
        <Link href={href}>{link}</Link>
      </span>
    </div>
  );
}
