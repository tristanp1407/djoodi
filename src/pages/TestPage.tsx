import { useState } from "react";

function TestPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetPass = async () => {
    setResult(null);
    setError(null);
    setLoading(true);
    try {
      const url = `https://us-central1-djoodi.cloudfunctions.net/issuerApi/v1/passes`;
      const res = await fetch(url, { method: "GET" });

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
        <h1 className="text-2xl font-semibold mb-4">Test Get Pass</h1>
        <button
          onClick={handleGetPass}
          disabled={loading}
          className="w-full rounded-md bg-black text-white py-2 disabled:opacity-50"
        >
          {loading ? "Fetching..." : "Get Pass"}
        </button>

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
