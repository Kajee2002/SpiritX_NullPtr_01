"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const usePasswordToggle = (id: string) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (!input) return;

    input.type = showPassword ? "text" : "password";
  }, [showPassword, id]);

  return { showPassword, setShowPassword };
};

const PasswordToggle = ({ id }: { id: string }) => {
  const { showPassword, setShowPassword } = usePasswordToggle(id);

  return (
    <button
      type="button"
      className="absolute inset-y-0 right-3 flex items-center"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  );
};

export default PasswordToggle;

