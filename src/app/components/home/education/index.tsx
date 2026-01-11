"use client";
import ContentSection from "@/app/components/layout/content-section";
import { useLangData } from "@/hook/useLangData"

const Education = () => {
    const { data, loading, error } = useLangData("page-data")
    
    if (!data) return <p>Loading ...</p>;
 
    return (
        <ContentSection title={data.title2}>
        {/* children */}
                        <div className="relative mx-auto px-4 sm:px-0 py-10">
                            <div className="hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-primary/10" />

                            <div className="relative">
                                {data.educationData?.map((item:any, index:any) => (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col sm:flex-row sm:items-start gap-4 ${index !== data.educationData.length - 1 ? "mb-8 sm:mb-16" : ""
                                            }`}
                                    >
                                        <div className="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                                            <p className="ml-2.5 sm:ml-0 text-base font-normal sm:mb-0 leading-relaxed">
                                                {item.date}
                                            </p>

                                            {/* Bullet Point */}
                                            <div className="absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1.5 border border-primary/10 rounded-full bg-white">
                                                <div className="w-3 h-3 bg-primary rounded-full" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0">
                                            <h5 className="font-semibold">{item.title}</h5>
                                            <p className="text-primary">{item.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
        </ContentSection>
    )
}

export default Education