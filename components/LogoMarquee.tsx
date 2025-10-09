"use client"
import Image from "next/image"

const logos = [
    { src: "/assets/dance-mag-square.png", alt: "Dance Magazine" },
    { src: "/assets/dance-mang-long.jpeg", alt: "Dance Magazine" },
    { src: "/assets/logo-preview.png", alt: "Logo Preview" },
    { src: "/assets/pivot-panels.png", alt: "Pivot Panels" },
    { src: "/assets/pivot-mentorship.png", alt: "Pivot Mentorship" },
    { src: "/assets/happy-trails-mini-course.png", alt: "Happy Trails Mini Course" },
    { src: "/assets/how-to-pivot-ebook.png", alt: "How to Pivot Ebook" },
]

const LogoMarquee = () => {
    const repeatedLogos = [...logos, ...logos] // Repeat for seamless loop

    return (
        <div className="bg-[#E2DED0] py-8">
            <div className="container mx-auto">
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee-infinite">
                        {repeatedLogos.map((logo, index) => (
                            <div key={index} className="mx-12 flex-shrink-0 flex items-center" style={{ height: "50px" }}>
                                <Image src={logo.src} alt={logo.alt} width={150} height={50} className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoMarquee
