import { ArrowRight, Calendar, Headphones, Star, Users } from 'lucide-react';
import DetailCardShell from '../../components/site/DetailCardShell';
import { SiteChrome } from '../../components/site/MarketingPrimitives';

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

const podcastCards = [
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
];

export default function PivotPodcastPage() {
    return (
        <SiteChrome>
            <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-12 lg:pt-32">
                <div className="mx-auto max-w-[1280px]">
                    <div className="max-w-3xl text-center lg:text-left">
                        <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#7A7D86]">
                            REAL STORIES
                        </div>
                        <h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-[64px] lg:text-[76px]">
                            Pivot Podcast
                        </h1>
                        <p className="mt-5 max-w-2xl text-[18px] leading-8 text-[#60636B]">
                            Weekly conversations about career transition, mindset, and finding purpose beyond the stage through honest stories from dancers who have already moved into a new chapter.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F7F2EA] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
                        <DetailCardShell className="h-full">
                            <div className="flex h-full flex-col p-5 md:p-6">
                                <div className="flex flex-col items-center justify-between gap-3 rounded-[24px] border border-black/8 bg-white px-5 py-4 text-center sm:flex-row sm:text-left">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                        Free resource
                                    </div>
                                    <div className="rounded-full border border-[#E5DDCF] bg-[#FCFAF6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E6167]">
                                        Weekly conversations
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 flex-col gap-4">
                                    <div className="rounded-[26px] border border-black/8 bg-white px-5 py-6 md:px-6">
                                        <div className="mt-5 text-center md:text-left">
                                            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                                What it is
                                            </p>
                                            <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                                Real conversations about the parts of the pivot that are hardest to name
                                            </h2>
                                            <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                                The podcast helps dancers feel less alone by hearing how others navigated the identity shift, the uncertainty, and the search for meaning beyond performance.
                                            </p>
                                        </div>
                                        <div className="mt-6 overflow-hidden rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6]">
                                            <iframe
                                                src="https://www.youtube.com/embed/16JMiSPzlBE?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm"
                                                title="Pivot Podcast playlist"
                                                className="aspect-video w-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href={youtubePlaylistUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                            >
                                                Watch on YouTube
                                                <ArrowRight className="h-4 w-4" />
                                            </a>
                                            <a
                                                href={spotifyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-[#FCFAF6] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                                            >
                                                Listen on Spotify
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DetailCardShell>

                        <div className="grid gap-8">
                            <DetailCardShell>
                                <div className="p-5 md:p-6">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                        Featured episodes
                                    </div>
                                    <h2 className="mt-3 text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        Start with a few strong conversations
                                    </h2>
                                    <div className="mt-5 grid gap-4">
                                        {featuredEpisodes.map((episode) => (
                                            <a
                                                key={episode.title}
                                                href={episode.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5 transition hover:-translate-y-0.5"
                                            >
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#928490]">
                                                        {episode.episode}
                                                    </div>
                                                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#647C90]">
                                                        {episode.duration}
                                                    </div>
                                                </div>
                                                <div className="mt-3 text-[22px] font-bold leading-tight text-[#111827]">
                                                    {episode.title}
                                                </div>
                                                <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                                    with {episode.guest}
                                                </p>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-5 border-t border-[#E8E0D4] pt-5">
                                        <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Dancer review
                                        </div>
                                        <div className="rounded-[22px] border border-black/8 bg-white px-5 py-5">
                                            <div className="flex items-center justify-center gap-1 md:justify-start">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Star key={index} className="h-4 w-4 fill-[#F4B740] text-[#F4B740]" />
                                                ))}
                                            </div>
                                            <p className="mt-4 text-[18px] font-medium leading-8 text-[#4E4F50] md:text-[20px] md:leading-9">
                                                “A great reminder that dancers are not alone in the pivot and that there are honest stories worth hearing on the other side.”
                                            </p>
                                            <div className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#928490]">
                                                Pivot for Dancers Community
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DetailCardShell>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-3">
                        {podcastCards.map((item) => (
                            <DetailCardShell key={item.title}>
                                <div className="p-5 md:p-6">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#647C90] text-white">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="mt-4 text-[28px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
                                        {item.title}
                                    </div>
                                    <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                        {item.description}
                                    </p>
                                </div>
                            </DetailCardShell>
                        ))}
                    </div>

                    <div className="mt-8">
                        <DetailCardShell>
                            <div className="p-5 md:p-6">
                                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                    Have a story to share?
                                </div>
                                <div className="mt-3 grid gap-6 md:grid-cols-[1.08fr_0.92fr] md:items-center">
                                    <div>
                                        <h2 className="text-[30px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827] md:text-[36px]">
                                            Want to be interviewed for Pivot Podcast?
                                        </h2>
                                        <p className="mt-4 text-[15px] leading-8 text-[#60636B]">
                                            If you would like to be considered for the podcast, get in touch directly and share a little about your dance career and what came next.
                                        </p>
                                    </div>
                                    <div className="rounded-[22px] border border-[#E8E0D4] bg-[#FCFAF6] px-5 py-5">
                                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#928490]">
                                            Best fit
                                        </div>
                                        <p className="mt-3 text-[14px] leading-7 text-[#60636B]">
                                            Former or current professional dancers with honest experiences around career change, identity, reinvention, or finding meaning off the stage.
                                        </p>
                                        <a
                                            href={shareStoryUrl}
                                            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#647C90] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#556c7f]"
                                        >
                                            Submit your story
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DetailCardShell>
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
