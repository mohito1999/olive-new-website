import React from 'react';
import CaseStudyDetail, { CaseStudyContent } from '../CaseStudyDetail';

const houseOfEdTechContent: CaseStudyContent = {
    hero: {
        client: "House of EdTech",
        industry: "EdTech",
        title: "Unlocking Infinite Growth Capacity for a 1,000-Agent Team",
        metrics: [
            { value: "3x", label: "Volume Capacity Per Rep" },
            { value: "+15%", label: "Conversion Rate" },
            { value: "0", label: "New Hires Needed" }
        ]
    },
    context: {
        title: "The Growth Ceiling",
        challenge: "House of EdTech had the demand but hit a wall with fulfillment. Operating with 1,000 human agents meant that increasing lead volume required a linear increase in headcount. The cost and complexity of hiring, training, and retaining staff became a bottleneck that strangled growth.",
        issues: [
            {
                title: "The Capacity Trap",
                description: "Every new marketing campaign required a hiring spree months in advance. If leads spiked, they couldn't service them. If leads dropped, they were burning cash on effortless staff."
            },
            {
                title: "Inconsistent Execution",
                description: "Scaling humans meant diluting quality. The performance gap between top reps and new hires meant that more leads didn't always equal more revenue."
            }
        ]
    },
    solution: {
        title: "Building an Infinite Growth Engine",
        description: "We transformed their fulfillment model from a headcount-based operation to a compute-based growth engine. By embedding with their team, we built a proprietary AI orchestration layer that allows their top performers to handle massive volume without breaking a sweat.",
        steps: [
            {
                title: "The Deep Audit",
                timeframe: "Month 1-3",
                description: "We embedded with the sales floor to decode the DNA of their top 1% of performers. We mapped every winning script, objection handle, and follow-up cadence to create a 'gold standard' blueprint."
            },
            {
                title: "The Build",
                timeframe: "Month 3",
                description: "We configured a bespoke Voice + WhatsApp orchestration layer. This system acts as an infinite front-line, engaging 100% of leads instantly and only passing qualified, warm prospects to the human team."
            },
            {
                title: "The Optimization Sprint",
                timeframe: "Month 4 (Week 1-4)",
                description: "We launched the engine against a control group. By week 4, the AI-augmented workflow was not just matching human benchmarks but beating them, proving the system could scale indefinitely."
            }
        ]
    },
    results: {
        title: "Growth Without Friction",
        conclusion: "House of EdTech can now turn up the dial on lead volume without worrying about operational drag. Their top agents are closing 3x more deals because they spend zero time dialing and 100% of their time closing.",
        primaryStat: "3x",
        primaryLabel: "Revenue Capacity Per Rep",
        secondaryStats: [
            { value: "+15%", label: "Lead-to-Paid Conversion" },
            { value: "100%", label: "Lead Coverage" },
            { value: "24/7", label: "Instant Response Time" }
        ]
    }
};

const HouseOfEdTech: React.FC = () => {
    return <CaseStudyDetail content={houseOfEdTechContent} />;
};

export default HouseOfEdTech;
