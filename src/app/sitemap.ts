// 사이트맵 자동 생성 — /sitemap.xml 로 서빙됨
import { MetadataRoute } from "next";
import { seoDiagnosisSlugList } from "@/data/seo-diagnosis-pages";

const BASE_URL = "https://check.financialrisklab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/diagnosis/investment-risk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/diagnosis/investment-risk/result`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...seoDiagnosisSlugList.map((slug) => ({
      url: `${BASE_URL}/diagnosis/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
