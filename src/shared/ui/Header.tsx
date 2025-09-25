import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-foreground text-background py-5">
      <nav className="px-4">
        <ul className="flex justify-center items-center flex-wrap gap-x-5">
          <li>
            <Link
              href={"/"}
              className="transition-colors hover:text-background/80"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/ssr"}
              className="transition-colors hover:text-background/80"
            >
              SSR
            </Link>
          </li>
          <li>
            <Link
              href={"/isr"}
              className="transition-colors hover:text-background/80"
            >
              ISR
            </Link>
          </li>
          <li>
            <Link
              href={"/csr"}
              className="transition-colors hover:text-background/80"
            >
              CSR
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
