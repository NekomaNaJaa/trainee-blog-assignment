"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  function handleRetry() {
    // refresh ให้ server ดึงข้อมูลใหม่ แล้วค่อย reset boundary
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

    return (
    <main className="mx-auto w-full max-w-xl px-4 py-24">
      <h1 className="font-serif text-3xl text-ink">โหลดข้อมูลไม่สำเร็จ</h1>
      <p className="mt-3 text-muted">
        ตรวจการเชื่อมต่ออินเทอร์เน็ต แล้วลองโหลดอีกครั้ง
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-muted">รหัสข้อผิดพลาด {error.digest}</p>
      )}
      <button
        onClick={handleRetry}
        className="mt-6 h-10 rounded-md bg-accent px-5 text-sm font-medium text-canvas hover:brightness-110"
      >
        โหลดอีกครั้ง
      </button>
    </main>
  );
}