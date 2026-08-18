import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <h1 className="text-[120px] sm:text-[180px] font-extrabold tracking-tighter text-brand-teal/20 leading-none">
        404
      </h1>
      <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight">
        Looks like you're lost in space.
      </h2>
      <p className="mt-4 max-w-md text-foreground-muted text-lg">
        الصفحة دي مش موجودة، شكلنا تهنا في الفضاء الرقمي.. خلينا نرجعك للصفحة الرئيسية.
      </p>
      <div className="mt-10">
        <Link href="/">
          <Button size="lg" className="rounded-full shadow-glow">
            Return Home / العودة للرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
}
