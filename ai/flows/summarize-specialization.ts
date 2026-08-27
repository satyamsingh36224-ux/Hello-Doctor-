
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
    .describe('The text describing the doctor\'s specialization.'),
});
export type SummarizeSpecializationInput = z.infer<
  typeof SummarizeSpecializationInputSchema
>;

const SummarizeSpecializationOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the doctor\'s specialization, no more than 50 words, in Hindi.'
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
  prompt: `You are an AI assistant specializing in summarizing doctor specializations for patients in India.

  Given the following text describing a doctor's specialization, create a concise, friendly, and easy-to-understand summary in HINDI. 
  The summary should be no more than 50 words and should highlight the key areas of their expertise for a layperson.

  Specialization Text: {{{specializationText}}}`,
});

const summarizeSpecializationFlow = ai.defineFlow(
  {
    name: 'summarizeSpecializationFlow',
    inputSchema: SummarizeSpecializationInputSchema,
    outputSchema: SummarizeSpecializationOutputSchema,
  },
  async input => {
    const response = await summarizeSpecializationPrompt(input);
    const output = response.output;
    
    if (!output) {
      throw new Error('AI failed to generate a summary.');
    }
    
    return output;
  }
);
