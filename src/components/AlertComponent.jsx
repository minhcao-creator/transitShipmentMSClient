"use client"

import { Cross1Icon } from "@radix-ui/react-icons";
import { useEffect } from "react";

function AlertComponent({ message, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const baseStyle =
    "fixed top-5 right-5 w-72 p-4 rounded-sm shadow-[2px_2px_4px_0px_rgba(88,88,88,0.58)] flex flex-col gap-2";
  const typeStyle = {
    success: "bg-green-50 text-green-800 border border-green-800",
    error: "bg-rose-50 text-rose-800 border border-rose-800",
    warning: "bg-yellow-50 text-yellow-800 border border-yellow-800",
    info: "bg-blue-50 text-blue-800 border border-blue-800",
  };
  const progressColor = {
    success: "bg-green-500",
    error: "bg-rose-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return (
    <div className={`${baseStyle} ${typeStyle[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-xl leading-none hover:opacity-70"
        >
          <Cross1Icon />
        </button>
      </div>

      <div className="h-1 w-full bg-white rounded">
        <div
          className={`h-1 ${progressColor[type]} rounded animate-progress`}
        ></div>
      </div>
    </div>
  );
}

export default AlertComponent;
