import { redirect } from "next/navigation";

export default function Home() {
  // เข้าหน้าแรกแล้วส่งไปหน้ารายการบทความทันที
  redirect("/posts");
}