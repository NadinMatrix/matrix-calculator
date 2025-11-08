// pages/index.js
import { useState } from "react";

export default function Home() {
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!dob) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dob })
      });
      const data = await res.json();
      setResult(data.text || "Немає відповіді");
    } catch (err) {
      setResult("Помилка запиту. Спробуй ще раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{maxWidth: 720, margin: "40px auto", padding: "24px"}}>
      <h1>Matrix RYVOK — AI розшифровка</h1>
      <p>Введи дату народження у форматі ДД.ММ.РРРР</p>

      <form onSubmit={handleSubmit} style={{display: "flex", gap: 12}}>
        <input
          type="text"
          placeholder="наприклад 13.10.1989"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{flex: 1, padding: 12, fontSize: 16}}
        />
        <button disabled={loading} style={{padding: "12px 18px", fontSize: 16}}>
          {loading ? "Обробка..." : "Розшифрувати"}
        </button>
      </form>

      {result && (
        <div style={{marginTop: 24, whiteSpace: "pre-wrap", lineHeight: 1.5}}>
          <h2>Результат</h2>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
}
