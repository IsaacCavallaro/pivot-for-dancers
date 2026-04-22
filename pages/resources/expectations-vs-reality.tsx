import { BarChart3, Globe, Shield } from 'lucide-react';
import {
    InfoGrid,
    PageHero,
    SectionBlock,
    SiteChrome,
} from '../../components/site/MarketingPrimitives';

export default function ExpectationsVsRealityPage() {
    return (
        <SiteChrome>
            <PageHero
                eyebrow="RESEARCH"
                title="Expectations vs Reality"
                description="A data-led resource that helps dancers understand the broader context of retirement, transition timing, and the realities that often sit behind the idealised version of a dance career."
                primaryCta={{ label: 'Explore the data', href: '#data', dark: true }}
                secondaryCta={{ label: 'Browse all resources', href: '/resources' }}
                media={
                    <div className="rounded-[40px] border border-[#E6DED2] bg-white p-5 shadow-[0_34px_80px_rgba(45,49,56,0.08)]">
                        <img src="/assets/data.png" alt="Expectations vs Reality data graphic" className="mx-auto h-[420px] w-auto object-contain" />
                    </div>
                }
            />

            <SectionBlock
                label="WHY THIS RESOURCE"
                title="Use data to make the pivot feel less personal and less isolating"
                description="This resource helps dancers step back from the internal pressure and understand the wider patterns around career change in dance."
                background="#FFFFFF"
            >
                <InfoGrid
                    cards={[
                        {
                            title: 'Research context',
                            description: 'Ground career transition conversations in actual findings rather than myths and silence.',
                            icon: BarChart3,
                        },
                        {
                            title: 'Global perspective',
                            description: 'Look at career transition patterns across different countries and contexts.',
                            icon: Globe,
                        },
                        {
                            title: 'Clearer expectations',
                            description: 'Use the data to create a more realistic, less shame-filled understanding of what dancers often face.',
                            icon: Shield,
                        },
                    ]}
                />
            </SectionBlock>

            <SectionBlock
                label="DATA SNAPSHOT"
                title="A simpler way to understand the findings"
                description="The page is now framed more like a premium insight resource and less like a rough internal dashboard."
                background="#F7F2EA"
            >
                <div id="data" className="rounded-[40px] border border-[#E5DDCF] bg-white p-6 shadow-[0_32px_76px_rgba(45,49,56,0.08)] md:p-8">
                    <img src="/assets/data.png" alt="Dance transition data" className="mx-auto h-auto w-full max-w-4xl rounded-[28px]" />
                    <p className="mt-6 text-sm leading-7 text-[#5E6167]">
                        Source reference used in the original resource: “Making Changes: Facilitating the Transition of Dancers.” This page now foregrounds the resource as an insight layer within the broader Pivot for Dancers ecosystem.
                    </p>
                </div>
            </SectionBlock>
        </SiteChrome>
    );
}
