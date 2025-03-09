import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import PasswordToggle from "./hide_seek"; 

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ text: "", color: "" });

  const checkStrength = (password: string) => {
    if (password.length < 8) {
      return { text: "Weak 😢", color: "red" };
    } else if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
      return { text: "Strong 💪", color: "green" };
    } else {
      return { text: "Medium 🙂", color: "orange" };
    }
  };

  useEffect(() => {
    const strengthIndicator = document.getElementById("strengthIndicator");
    if (strengthIndicator) {
      strengthIndicator.style.color = strength.color;
      strengthIndicator.textContent = strength.text;
    }
  }, [strength]);

  return (
    <div>
      <Input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          const newPassword = e.target.value;
          setPassword(newPassword);
          setStrength(checkStrength(newPassword));
        }}
        className="border p-2 w-full md:py-8"
      />
      <PasswordToggle id="password" />
    </div>
  );
};

export default PasswordInput;