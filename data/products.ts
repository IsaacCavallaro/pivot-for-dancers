import { Star, Clock, BookOpen, Users, Video } from "lucide-react";

export const pivotConverstationsUrl = "https://stats.sender.net/forms/bmZM4r/view";
export const ebookPaymentUrl = "https://buy.stripe.com/14k6oG8rQexsgCI147";
export const coursePaymentUrl = "https://buy.stripe.com/dR628qgYm750aek6oq";
export const mentorshipBookingUrl = "https://tidycal.com/pivotfordancers/mentorship-1";
export const bundlePaymentUrl = "https://buy.stripe.com/3cIcN79R24mAbeg4p4g3604";

export interface Product {
    id: number;
    name: string;
    subtitle: string;
    description: string;
    price: number;
    originalPrice: number;
    url: string;
    img: string;
    category: string;
    duration: string;
    rating: number;
    reviews: number;
    features: string[];
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
}

export const products: Product[] = [
    {
        id: 2,
        name: "How to Pivot",
        subtitle: "EBOOK",
        description:
            "Get an actionable, dancer-specific career change guide with mindset shifts and steps for how to pivot. ",
        price: 6.99,
        originalPrice: 0,
        url: ebookPaymentUrl,
        img: "/assets/how-to-pivot-ebook.png",
        category: "Digital Book",
        duration: "10 Chapters",
        rating: 5.0,
        reviews: 89,
        features: ["Instant Download", "Interactive Exercises", "Case Studies", "Lifetime Updates"],
        icon: BookOpen,
        gradient: "from-purple-gray to-beige",
    },
    {
        id: 3,
        name: "Happy Trails",
        subtitle: "DIGITAL COURSE",
        description:
            "Explore a 5-year career change roadmap to make a plan for before, during, and after your pivot.",
        price: 75,
        originalPrice: 199,
        url: coursePaymentUrl,
        img: "/assets/happy-trails-mini-course.png",
        category: "Online Course",
        duration: "Self-Paced",
        rating: 5.0,
        reviews: 16,
        features: ["Video Lessons", "Bonus Resources", "Community Access", "Certificate"],
        icon: Clock,
        gradient: "from-beige to-brown-gray",
    },
];