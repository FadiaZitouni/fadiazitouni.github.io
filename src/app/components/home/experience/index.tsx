"use client";
import Image from "next/image"
import ContentSection from "@/app/components/layout/content-section";
import { useLangData } from "@/hook/useLangData"
import Link from "next/link";

const Experience = () => {
    const { data, loading, error } = useLangData("page-data")

    if (!data) return <p>Loading ...</p>;

    return (        
        <ContentSection title={data.title1}>
        {/* children */}
                        <div className="flex flex-col px-4 py-9 md:py-10">
                            {data.experienceData?.map((value: any, index: any) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-primary rounded-lg py-2 px-4 bg-white/60 backdrop-blur">

                                            {/* LEFT : icon + role */}
                                            <div className="flex items-center gap-3">
                                                <Link
                                                    href={value.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0"
                                                    >
                                                    <Image
                                                        src={value.icon}
                                                        alt={`${value.company} logo`}
                                                        width={32}
                                                        height={32}
                                                        className="cursor-pointer hover:opacity-80 transition"
                                                    />
                                                </Link>
                                                <h5 className="font-semibold text-primary">
                                                {value.role}
                                                </h5>
                                            </div>

                                            {/* RIGHT : dates + location */}
                                            <div className="flex items-center gap-3 text-primary/70 text-sm">
                                                <span
                                                className={`w-4 h-2 rounded-sm ${
                                                    value.endYear === "Present"
                                                    ? "bg-primary"
                                                    : "bg-primary/20"
                                                }`}
                                                />
                                                <span className="text-right">
                                                {value.startYear} – {value.endYear}
                                                </span>
                                            </div>

                                            </div>
                                        <ul>
                                            {value?.bulletPoints?.map((point: any, index: any) => {
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

export default Experience