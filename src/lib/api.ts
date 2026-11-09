import axios from "axios";
import type { Comment, Post, User } from "@/types/blog";

// axios instance กลาง: ตั้ง baseURL และ timeout ที่เดียว
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

// ดึงบทความทั้งหมด
export async function getPosts(): Promise<Post[]> {
  const { data } = await api.get<Post[]>("/posts");
  return data;
}

// ดึงบทความเดียวตาม id
export async function getPost(id: number): Promise<Post> {
  const { data } = await api.get<Post>(`/posts/${id}`);
  return data;
}

// ดึงข้อมูลผู้เขียนตาม userId
export async function getUser(id: number): Promise<User> {
  const { data } = await api.get<User>(`/users/${id}`);
  return data;
}

// ดึงคอมเมนต์ของบทความ
export async function getComments(postId: number): Promise<Comment[]> {
  const { data } = await api.get<Comment[]>(`/posts/${postId}/comments`);
  return data;
}

// เช็คว่า error เป็น 404 ไหม (ใช้กับ notFound() ใน Phase 4)
export function isNotFound(error: unknown): boolean {
  return axios.isAxiosError(error) && error.response?.status === 404;
}