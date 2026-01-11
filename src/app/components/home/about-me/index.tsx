"use client";
import { Badge } from "@/components/ui/badge";
import ContentSection from "@/app/components/layout/content-section";
import { useLangData } from "@/hook/useLangData"

const AboutMe = () => {
   const { data, loading, error } = useLangData("about-me")

    if (!data) return <p>Loading ...</p>;

    return (
        <ContentSection title={data.title}>
        {/* children */}
        <p className="text-secondary font-normal whitespace-pre-line">
          {data.profile}
        </p>
 
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#2563eb] uppercase font-medium">
            {data.highlightsTitle}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {data.highlights?.map((item: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="py-1.5 px-3 rounded-lg"
              >
                <span className="text-xs sm:text-sm font-medium text-primary">
                  {item}
                </span>
              </Badge>
            ))}
          </div>
        </div>

      
</ContentSection>

    )
}

export default AboutMe