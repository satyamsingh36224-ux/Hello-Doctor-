'use server';

/**
 * @fileOverview An AI agent for summarizing doctor specializations.
 *
 * - summarizeSpecialization - A function that summarizes a doctor's specialization.
 * - SummarizeSpecializationInput - The input type for the summarizeSpecialization function.
 * - SummarizeSpecializationOutput - The return type for the summarizeSpecialization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSpecializationInputSchema = z.object({
  specializationText: z
    .string()
    .describe('The text describing the doctor\u0027s specialization.'),
});
export type SummarizeSpecializationInput = z.infer<
  typeof SummarizeSpecializationInputSchema
>;

const SummarizeSpecializationOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the doctor\u0027s specialization, no more than 50 words, in Hindi.'
    ),
});
export type SummarizeSpecializationOutput = z.infer<
  typeof SummarizeSpecializationOutputSchema
>;

export async function summarizeSpecialization(
  input: SummarizeSpecializationInput
): Promise<SummarizeSpecializationOutput> {
  return summarizeSpecializationFlow(input);
}

const summarizeSpecializationPrompt = ai.definePrompt({
  name: 'summarizeSpecializationPrompt',
  input: {schema: SummarizeSpecializationInputSchema},
  output: {schema: SummarizeSpecializationOutputSchema},
  prompt: `You are an AI assistant specializing in summarizing doctor specializations for patients.

  Given the following text describing a doctor's specialization, create a concise and easy-to-understand summary in HINDI, no more than 50 words, highlighting the key areas of their expertise.

  Specialization Text: {{{specializationText}}}`,
});

const summarizeSpecializationFlow = ai.defineFlow(
  {
    name: 'summarizeSpecializationFlow',
    inputSchema: SummarizeSpecializationInputSchema,
    outputSchema: SummarizeSpecializationOutputSchema,
  },
  async input => {
    const {output} = await summarizeSpecializationPrompt(input);
    return output!;
  }
);
