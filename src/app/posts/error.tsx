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
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-gray-900">เกิดข้อผิดพลาด</h1>
      <p className="mt-3 text-gray-600">
        โหลดข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง
      </p>
      {/* ใน production Next ซ่อน message จริงของ server error: digest ใช้ค้น log */}
      {error.digest && (
        <p className="mt-2 text-xs text-gray-400">รหัส: {error.digest}</p>
      )}
      <button
        onClick={handleRetry}
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        ลองใหม่
      </button>
    </main>
  );
}