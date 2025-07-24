import { Product } from "@/type/product";

export async function fetchProduct(
  slug: string,
  lang: "en" | "bn" = "en"
): Promise<Product | null> {
  try {
    const res = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          Accept: "application/json",
        },
        next: {
          revalidate: 60, // ISR: Revalidate after 60 seconds
        },
      }
    );

    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("[fetchProduct]", err);
    return null;
  }
}
