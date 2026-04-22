import { BookOpen, Headphones, Sparkles } from 'lucide-react';
import { resources } from '../../data/resources';
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    ShowcaseGrid,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

export default function ResourcesPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="RESOURCES"
                title="Free resources designed to get dancers unstuck"
                description="This is the generous layer of the brand: guided tools, stories, research, and prompts that help dancers feel less alone and more ready for what comes next."
                primaryCta={{ label: 'See the free resources', href: '#resources', dark: true }}
                secondaryCta={{ label: 'Open Pivot Paths', href: '/resources/pivot-paths' }}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-[28px] bg-[#111827] p-6 text-white">
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                                    Free app
                                </div>
                                <div className="mt-3 text-2xl font-bold">Pivot Paths</div>
                                <p className="mt-3 text-sm leading-7 text-white/76">
                                    The clearest starting point for dancers exploring mindset, career, and financial next steps.
                                </p>
                            </div>
                            <div className="rounded-[28px] border border-[#E8E0D4] bg-[#FCFAF6] p-6">
                                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#928490]">
                                    Stories + insight
                                </div>
                                <div className="mt-3 text-2xl font-bold text-[#111827]">Podcast, research, and quiz</div>
                                <p className="mt-3 text-sm leading-7 text-[#5E6167]">
                                    Use different kinds of entry points depending on where the user is emotionally and practically.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />

            <SectionBlock
                label="WHY FREE CONTENT"
                title="The resource layer is how trust gets built"
                description="The free offering should not feel secondary. It is what brings dancers into the ecosystem and helps them decide whether to go further."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Accessible starting point',
                            description: 'Meet dancers before they are ready to buy something or book time with someone.',
                            icon: Sparkles,
                        },
                        {
                            title: 'Different learning styles',
                            description: 'Some people want to listen, some want to read, some want guided interaction.',
                            icon: Headphones,
                        },
                        {
                            title: 'Clearer brand value',
                            description: 'The content itself should prove that Pivot for Dancers understands the transition in a more specific way.',
                            icon: BookOpen,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="RESOURCE LIBRARY"
                title="Choose the format that fits your next step"
                description="Every resource should look like part of one coherent system rather than a mixed set of unrelated pages."
                background="#F7F2EA"
            >
                <div id="resources">
                    <ShowcaseGrid
                        cards={resources.map((resource, index) => ({
                            title: resource.title,
                            description: resource.description,
                            href: resource.url,
                            ctaLabel: 'Open resource',
                            image: resource.image,
                            tone: index === 0 ? 'brand' : index === 1 ? 'dark' : 'light',
                        }))}
                    />
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
