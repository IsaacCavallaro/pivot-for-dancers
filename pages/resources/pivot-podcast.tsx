import { Calendar, Headphones, Users } from 'lucide-react';
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

const youtubePlaylistUrl = 'https://www.youtube.com/playlist?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm';
const spotifyUrl = 'https://open.spotify.com/show/4PfCp7OJWQCaqfGsbjbDZW?si=731ca82e254c43bd';
const shareStoryUrl = 'mailto:kaylee@pivotfordancers.com';

const featuredEpisodes = [
    {
        title: 'How Demi’s roller skating hobby turned into 500K followers on Instagram',
        guest: 'Demi Jenkins',
        duration: '23 min',
        episode: 'EP 04',
        url: 'https://open.spotify.com/episode/5fdb0koSHkDYXFzP8rFjNH?si=aec61c7441064528&nd=1&dlsi=d8c9432002594cc8',
    },
    {
        title: 'Missing the magic of the stage? Here’s how Ali is finding meaning beyond her ballet career',
        guest: 'Ali Block',
        duration: '28 min',
        episode: 'EP 03',
        url: 'https://open.spotify.com/episode/1dpY9nKHk6oBVcpOieodSA?si=98326958322e40f0',
    },
    {
        title: 'How a ski mountain helped Elise let go of her dance career',
        guest: 'Elise MacDonald',
        duration: '33 min',
        episode: 'EP 05',
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
                    { value: 'Weekly', label: 'conversations and stories' },
                    { value: 'Real', label: 'dancer interviews' },
                    { value: '3', label: 'featured episodes below' },
                    { value: 'Free', label: 'to watch or listen' },
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
                title="Real conversations about the parts of the pivot that are hardest to name"
                description="The podcast helps dancers feel less alone by hearing how others navigated the identity shift, the uncertainty, and the search for meaning beyond performance."
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
                description="These episodes are a good place to start if you want honest stories about career transition, reinvention, and building a life beyond the stage."
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
                            <div className="flex items-center justify-between gap-3">
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#928490]">{episode.episode}</div>
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A7D86]">{episode.duration}</div>
                            </div>
                            <h3 className="mt-4 text-2xl font-bold text-[#111827]">{episode.title}</h3>
                            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#647C90]">with {episode.guest}</p>
                            <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#111827]">
                                Listen now
                            </div>
                        </a>
                    ))}
                </div>
            </SectionBlock>

            <SectionBlock
                label="GET INVOLVED"
                title="Have a story to share?"
                description="If you would like to be considered for the podcast, get in touch directly and share a little about your dance career and what came next."
                background="#FFFFFF"
                aside={
                    <a
                        href={shareStoryUrl}
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                        Submit your story
                    </a>
                }
            >
                <div className="rounded-[32px] border border-black/8 bg-[#F5F6F2] p-7 md:p-8">
                    <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                        <div>
                            <h3 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
                                Want to be interviewed for Pivot Podcast?
                            </h3>
                            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#60636B]">
                                Reach out at <a href={shareStoryUrl} className="font-semibold text-[#647C90] underline decoration-[#647C90]/30 underline-offset-4">kaylee@pivotfordancers.com</a> if you have a pivot story that could encourage other dancers.
                            </p>
                        </div>
                        <div className="rounded-[24px] border border-[#E8E0D4] bg-white px-5 py-5">
                            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                Best fit
                            </div>
                            <p className="mt-3 text-[15px] leading-7 text-[#60636B]">
                                Former or current professional dancers with honest experiences around career change, identity, reinvention, or finding meaning off the stage.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
