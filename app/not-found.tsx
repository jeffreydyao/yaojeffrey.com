import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <h1 className="font-serif font-medium">Not Found</h1>
      <Link href="/" className="text-[14px]">
        → Return home
      </Link>
    </div>
  );
}
