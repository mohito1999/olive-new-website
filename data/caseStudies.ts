export interface CaseStudy {
    id: string;
    title: string;
    clientName: string;
    industry: 'EdTech' | 'Finance' | 'Real Estate' | 'Healthcare' | 'Other';
    metrics: { label: string; value: string }[];
    summary: string;
    tags: string[];
    slug: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'house-of-edtech',
        title: "Unlocking Infinite Growth Capacity for a 1,000-Agent Team",
        clientName: "House of EdTech",
        industry: "EdTech",
        metrics: [
            { label: "Capacity", value: "3x" },
            { label: "Conversion", value: "+15%" },
            { label: "Hiring", value: "0" }
        ],
        summary: "How we transformed a headcount-constrained operation into an infinite growth engine, allowing top reps to handle 3x volume.",
        tags: ["Growth", "Scale", "EdTech"],
        slug: "house-of-edtech"
    }
];
