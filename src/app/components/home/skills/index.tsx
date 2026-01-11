"use client";

import ContentSection from "@/app/components/layout/content-section";
import { useLangData } from "@/hook/useLangData"
import { Badge } from "@/components/ui/badge";

const Skill = () => {
    const { data, loading, error } = useLangData("skills")

    if (!data) return <p>Loading ...</p>;
    
    return (
        <ContentSection title={data.title}>
        {/* children */} 
         {data.skills?.map((item: any, index: number) => {
        return (
            <div key={index} className="flex flex-col gap-4">
                <p className="text-sm text-[#2563eb] uppercase font-medium">{item.skill}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {item.details?.map((i: string, x: number) => (
                        <Badge variant={"outline"} key={x} className="py-1.5 px-3 rounded-lg">
                            <p className="text-xs sm:text-sm font-medium text-primary">{i}</p>
                        </Badge>
                    )
                )}
                </div>
            </div>
        )
    })}

                        
        </ContentSection>
    )
}

export default Skill