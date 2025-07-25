import { Product } from "@/type/product";

export async function fetchProduct(
  lang: "en" | "bn" = "bn"
): Promise<Product | null> {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) return null;
  return res.json();
}
