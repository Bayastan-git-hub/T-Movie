import React from "react";
import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function Registr() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleRegister = async () => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  

  if (error) {
    alert(error.message);
    return;
  }

  // 🔥 ВОТ ЭТОГО У ТЕБЯ НЕТ
  await supabase.from("profiles").insert([
    {
      id: data.user.id,
      role: "user", // или admin
    },
  ]);

  alert("Registered! Check your email.");
};

  return (
    <div>
      <h2>Register</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Sign Up</button>
    </div>
  );
}
