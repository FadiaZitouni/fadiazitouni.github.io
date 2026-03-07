"use client";
import Image from "next/image"
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { useState, useEffect } from "react";
import { basePath } from "@/utils/basePath";

const HeroSection = () => {
    const { lang } = useLang();
    const [data, setData] = useState<any>(null);
    
        useEffect(() => {
            const fetchData = async () => {
            try {
                const res = await fetch(`${basePath}/data/${lang}/detail.json`);
                if (!res.ok) throw new Error("Failed to fetch aboutMe.json");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            }
            };
            fetchData();
        }, [lang]);
    if (!data) return <p>Loading ...</p>;
    const socialIcon = [
        {
            img: "/images/icon/linkedin-icon.svg",
            href: "https://www.linkedin.com/in/your-linkedin-id",
            icon: "LinkedIn"
        },
        {
            img: "/images/icon/github-icon.svg",
            href: "https://github.com/FadiaZitouni",
            icon: "GitHub"
        },
        {
            img: "/images/icon/whatsapp-icon.svg",
            href: "https://wa.me/21693154059",
            icon: "WhatsApp"
        },
        
    ];
    {/*
            img: "/images/icon/cv.svg",
            href: "",
            icon: "CV"
       */}
    return (
        <section className="flex justify-center items-start lg:min-h-screen w-full pt-6 lg:pt-5">
            <div className="rounded-2xl border-2 border-[#fff] max-w-md p-8 lg:m-5">                
                {/* Image */}
                <div className="flex justify-center mb-6">
                <Image
                    src="/images/hero-sec/photofadia.jpg"
                    alt="user-img"
                    width={350}
                    height={350}
                    className="rounded-2xl  shadow-xl  object-cover"
                />
                </div>

                {/* Infos */}
                <div className="flex flex-col items-center text-center gap-2">
                <h1 className="text-[#2563eb] text-2xl font-semibold">
                    {data.nom}
                </h1>

                <p className="text-[#000] font-normal">
                    {data.title}
                </p>

                <div className="flex items-center gap-2 mt-1">
                    <Image
                    src="/images/icon/map-icon.svg"
                    alt="map-icon"
                    width={18}
                    height={18}
                    />
                    <p className="text-[#000] text-sm">
                    {data.adress}
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <Image
                    src="/images/icon/email-icon.svg"
                    alt="map-icon"
                    width={18}
                    height={18}
                    />
                    <p className="text-[#000] text-sm">
                    {data.email}
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <Image
                    src="/images/icon/tel.svg"
                    alt="map-icon"
                    width={18}
                    height={18}
                    />
                    <p className="text-[#000] text-sm">
                    {data.tel}
                    </p>
                </div>
                </div>

                {/* Social + Lang */}
                <div className="flex flex-col items-center gap-4 mt-6">
                <div className="flex items-center gap-3">
                    {socialIcon.map((value, index) => (
                        <Link
                            href={value.href}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shadow-xl p-3 border border-[#2563eb] rounded-full hover:bg-white/10 transition"
                        >
                            <Image
                            src={value.img}
                            alt={value.icon}
                            width={25}
                            height={25}
                            />
                        </Link>
                    ))}
                </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">

</div>

            </div>
        </section>
    )
}

export default HeroSection

