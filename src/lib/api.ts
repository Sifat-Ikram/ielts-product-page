"use client";
import { useEffect, useState } from "react";
import type { Product } from "@/type/product";

export function useProduct(lang: "en" | "bn" = "bn") {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
          {
            headers: {
              "X-TENMS-SOURCE-PLATFORM": "web",
              Accept: "application/json",
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch product");

        const json = await res.json();

        // Assume API returns { data: Product }
        setProduct(json.data);
      } catch {
        setError("Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [lang]);

  return { product, loading, error };
}
