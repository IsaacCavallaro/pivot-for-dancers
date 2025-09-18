import { Users, Video } from "lucide-react";

export const mentorshipBookingUrl = "https://tidycal.com/pivotfordancers/mentorship-1";

export const services = [
    {
        id: 4,
        name: "Mentorship",
        subtitle: "PRIVATE SESSIONS",
        description:
            "Need more support? Get personalized guidance tailored to your unique goals and experiences.",
        price: 150,
        originalPrice: 229,
        url: mentorshipBookingUrl,
        img: "/assets/pivot-mentorship.png",
        category: "Coaching",
        duration: "3 x Sessions",
        rating: 5.0,
        reviews: 3,
        features: ["1-on-1 Sessions", "Bespoke Advice", "Email Support", "Progress Tracking"],
        icon: Users,
        gradient: "from-brown-gray to-dark-gray",
    },
    {
        id: 5,
        name: "Mock Interviews",
        subtitle: "Practice and get feedback",
        description: "Practice your interviewing skills in a safe and supportive environment. Get constructive feedback to help you feel confident and prepared for your next interview.",
        img: "/assets/happy-trails-mini-course.png", // using existing image
        icon: Video,
        rating: 4.9,
        reviews: 63,
        features: ["Realistic Scenarios", "Constructive Feedback", "Confidence Building"],
        duration: "1 hour session",
        price: 100,
        originalPrice: 0,
        url: "#",
    },
].filter(Boolean);

export type Service = typeof services[0];
