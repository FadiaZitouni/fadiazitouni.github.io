"use client";
import Image from "next/image";
import ContentSection from "@/app/components/layout/content-section";
import { useLangData } from "@/hook/useLangData"

const Language = () => {
    const { data, loading, error } = useLangData("languages")

    if (!data) return <p>Loading ...</p>;
    
    return (
        <ContentSection title={data.title}>
        {/* children */}
                        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-1">
                            <span>
                                {data.langs?.map((value: any, index: any) => {
                                    const content = (
                                        <>
                                        <div className="group flex flex-wrap items-center gap-3  m-8">
                                            <h4 className="text-primary">
                                              {value?.name}
                                            </h4>
                                             <Image
                                             src={"/images/icon/tile-arrow-icon.svg"}
                                             alt="tile-icon"
                                             width={24}
                                             height={24}
                                             className="group-hover:translate-x-1.5 rotate-45 transition-all duration-300 ease-in"
                                            />
                                             <div className="py-1.5 px-3 bg-muted rounded-lg">
                                                    <p className="text-xs md:text-base font-normal text-muted-foreground">{value.level}</p>
                                            </div>
                                        </div>
                                         
                                        </>
                                    );
                                    return (
                                        <div key={index} className="group">
                                            {content}
                                        </div>
                                    );
                                })}
                            </span>
                        </div>
        </ContentSection>
    )
}

export default Language