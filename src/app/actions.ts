"use server";

import { summarizeSpecialization, SummarizeSpecializationInput, SummarizeSpecializationOutput } from "@/ai/flows/summarize-specialization";

export async function getSpecializationSummary(
    input: SummarizeSpecializationInput
): Promise<SummarizeSpecializationOutput> {
    return await summarizeSpecialization(input);
}
