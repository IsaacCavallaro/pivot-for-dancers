import { Calendar, Headphones, Users } from 'lucide-react';
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const youtubePlaylistUrl = 'https://www.youtube.com/playlist?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm';
const spotifyUrl = 'https://open.spotify.com/show/4PfCp7OJWQCaqfGsbjbDZW?si=731ca82e254c43bd';

const featuredEpisodes = [
    {
        title: 'How Demi’s roller skating hobby turned into 500K followers on Instagram',
        guest: 'Demi Jenkins',
        duration: '23 min',
        url: 'https://open.spotify.com/episode/5fdb0koSHkDYXFzP8rFjNH?si=aec61c7441064528&nd=1&dlsi=d8c9432002594cc8',
    },
    {
        title: 'Missing the magic of the stage? Here’s how Ali is finding meaning beyond her ballet career',
        guest: 'Ali Block',
        duration: '28 min',
        url: 'https://open.spotify.com/episode/1dpY9nKHk6oBVcpOieodSA?si=98326958322e40f0',
    },
    {
        title: 'How a ski mountain helped Elise let go of her dance career',
        guest: 'Elise MacDonald',
        duration: '33 min',
        url: 'https://open.spotify.com/episode/7eW8KrFIGM2B94vJEbdq07?si=fXQEDUUVTYu2FRUOGlAcvQ',
    },
];

export default function PivotPodcastPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="REAL STORIES"
                title="Pivot Podcast"
                description="Weekly conversations about career transition, mindset, and finding purpose beyond the stage through honest stories from dancers who have already moved into a new chapter."
                primaryCta={{ label: 'Watch on YouTube', href: youtubePlaylistUrl, external: true, dark: true }}
                secondaryCta={{ label: 'Listen on Spotify', href: spotifyUrl, external: true }}
                metrics={[
                    { value: '5', label: 'podcast platforms available' },
                    { value: '1', label: 'new way to feel less alone' },
                    { value: '3', label: 'featured episodes below' },
                    { value: '∞', label: 'possible next chapters after dance' },
                ]}
                media={
                    <div className="overflow-hidden rounded-[40px] border border-[#E6DED2] bg-white p-4 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <div className="overflow-hidden rounded-[30px]">
                            <iframe
                                src="https://www.youtube.com/embed/16JMiSPzlBE?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm"
                                title="Pivot Podcast playlist"
                                className="aspect-video w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                }
            />

            <SectionBlock
                label="WHY THE PODCAST"
                title="A proof layer built from real conversations"
                description="The podcast is where brand warmth, founder credibility, and community stories meet. It should be framed as one of the strongest trust-building assets on the site."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Weekly stories',
                            description: 'Fresh conversations with former dancers and people navigating the pivot in public and private ways.',
                            icon: Calendar,
                        },
                        {
                            title: 'Real dancer interviews',
                            description: 'Guests are people who performed professionally and then built meaning beyond the stage.',
                            icon: Users,
                        },
                        {
                            title: 'Honest dialogue',
                            description: 'Talk openly about career change, identity, regret, finances, and the emotional side of transition.',
                            icon: Headphones,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="FEATURED EPISODES"
                title="Start with a few strong conversations"
                description="The page should make episode discovery easier and feel more like a premium media product."
                background="#F7F2EA"
            >
                <div className="grid gap-6 lg:grid-cols-3">
                    {featuredEpisodes.map((episode) => (
                        <a
                            key={episode.title}
                            href={episode.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-[34px] border border-[#E8E0D4] bg-white p-7 shadow-[0_26px_56px_rgba(45,49,56,0.06)] transition hover:-translate-y-1.5"
                        >
                            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#928490]">{episode.duration}</div>
                            <h3 className="mt-4 text-2xl font-bold text-[#111827]">{episode.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-[#5E6167]">{episode.guest}</p>
                        </a>
                    ))}
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
