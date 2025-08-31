import { useState } from "react";

function TestPage() {
  const [serial, setSerial] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setError(null);
    const trimmed = serial.trim();
    if (!trimmed) {
      setError("Please enter a serial.");
      return;
    }

    setLoading(true);
    try {
      const url = `https://us-central1-djoodi.cloudfunctions.net/issuerApi/v1/passes/${encodeURIComponent(
        trimmed
      )}/stamp`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ by: "demo", note: "Kiosk #1" }),
      });

      const text = await res.text();
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
      }
      setResult(text);
    } catch (err: any) {
      setError(err?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Test Stamp</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="serial" className="block text-sm font-medium text-gray-700">
              Serial
            </label>
            <input
              id="serial"
              type="text"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              placeholder="Enter pass serial"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-black text-white py-2 disabled:opacity-50"
          >
            {loading ? "Stamping..." : "Send Stamp"}
          </button>
        </form>

        {error && (
          <div className="mt-4 text-sm text-red-600">{error}</div>
        )}
        {result && (
          <pre className="mt-4 whitespace-pre-wrap break-words text-sm bg-gray-100 p-3 rounded">
            {result}
          </pre>
        )}
      </div>
    </div>
  );
}

export default TestPage;

