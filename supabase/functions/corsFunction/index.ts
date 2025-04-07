import { serve } from "https://deno.land/std@0.127.0/http/server.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("OK", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  return new Response(JSON.stringify({ message: "CORS is working!" }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // или "http://192.168.0.85:3000"
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
});

