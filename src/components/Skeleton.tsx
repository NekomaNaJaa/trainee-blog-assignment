interface SkeletonLineProps {
  width: string; // เช่น "w-1/2"
  height?: string; // ความสูงของบรรทัด ให้ตรง leading ของข้อความจริง
}

// กล่องสูงเท่าบรรทัดจริง ข้างในเป็นแท่งสี
export function SkeletonLine({ width, height = "h-6" }: SkeletonLineProps) {
  return (
    <div className={`flex items-center ${height}`}>
      <div className={`h-3.5 rounded bg-line ${width}`} />
    </div>
  );
}