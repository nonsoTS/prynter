import React from "react";

export default function SectionHeader({ content, classes }: { content: string; classes?: string }) {
  return (
    <div className={`flex items-center gap-2 mb-8 bg-[#E5E5E5] rounded-full px-4 py-2 w-fit ${classes}`}>
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <span className="text-sm font-medium">{content}</span>
    </div>
  );
}
