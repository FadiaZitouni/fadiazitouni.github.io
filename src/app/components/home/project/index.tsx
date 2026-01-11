"use client";
import ContentSection from "@/app/components/layout/content-section";
import { useLangData } from "@/hook/useLangData"

const Project = () => {
    const { data, loading, error } = useLangData("projects")

    if (!data) return <p>Loading ...</p>;

    return (
        <ContentSection title={data.title}>
        {/* children */}
                        <div className="flex flex-col px-4 py-9 md:py-10">
                            {data.projects?.map((value: any, index: any) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                        
                                        <div className="flex flex-col gap-2 border-x border-primary rounded-lg py-2 px-4 bg-white/60 backdrop-blur">

                                            {/* FIRST LINE : title + company */}
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                                {/* LEFT : title */}
                                                <div className="flex items-center gap-3">
                                                    <h5 className="font-semibold text-[#2563eb]">
                                                        {value.title}
                                                    </h5>
                                                </div>

                                                {/* RIGHT : company */}
                                                <div className="flex items-center gap-3 text-primary/70 text-sm">
                                                    <span className="text-right font-bold">
                                                        {value.company}
                                                    </span>
                                                </div>

                                            </div>

                                            {/* SECOND LINE : summary */}
                                            {value.summary && (
                                                <p className="text-sm text-primary/80 leading-relaxed">
                                                {value.summary}
                                                </p>
                                            )}

                                        </div>

                                        <ul>
                                            {value?.description?.map((point: any, index: any) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-base font-normal text-secondary"
                                                    >
                                                        <span className="w-2.5 h-2.5 text-secondary">•</span>
                                                        {point}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}

                        </div>
    </ContentSection>

    )
}

export default Project