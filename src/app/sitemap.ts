// 사이트맵 자동 생성 — /sitemap.xml 로 서빙됨
import { MetadataRoute } from "next";

const BASE_URL = "https://check.financialrisklab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/diagnosis/investment-risk`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/diagnosis/investment-risk/result`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
