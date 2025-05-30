"use client";

import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: LabelProps) {
  return <label {...props} className={`block font-medium mb-1 ${props.className}`} />;
}
