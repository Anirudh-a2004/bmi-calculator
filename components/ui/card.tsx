"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`bg-white rounded shadow p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-b border-gray-200 pb-2 mb-4 font-semibold">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
