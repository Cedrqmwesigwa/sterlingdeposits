
'use server';
/**
 * @fileOverview A Genkit flow to recommend related blog posts.
 *
 * - recommendRelatedPosts - A function that returns a list of related blog post titles.
 * - RecommendRelatedPostsInput - The input type for the recommendRelatedPosts function.
 * - RecommendRelatedPostsOutput - The return type for the recommendRelatedPosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendRelatedPostsInputSchema = z.object({
  currentPostTitle: z.string().describe('The title of the current blog post being viewed.'),
  allPostTitles: z.array(z.string()).describe('A list of all available blog post titles, excluding the current one.'),
  count: z.number().optional().default(3).describe('The desired number of recommended post titles to return.'),
});
export type RecommendRelatedPostsInput = z.infer<typeof RecommendRelatedPostsInputSchema>;

const RecommendRelatedPostsOutputSchema = z.object({
  recommendedTitles: z.array(z.string()).describe('A list of recommended blog post titles that are relevant to the current post.'),
});
export type RecommendRelatedPostsOutput = z.infer<typeof RecommendRelatedPostsOutputSchema>;

export async function recommendRelatedPosts(input: RecommendRelatedPostsInput): Promise<RecommendRelatedPostsOutput> {
  return recommendRelatedPostsFlow(input);
}

const recommendationPrompt = ai.definePrompt({
  name: 'recommendRelatedPostsPrompt',
  input: {schema: RecommendRelatedPostsInputSchema},
  output: {schema: RecommendRelatedPostsOutputSchema},
  prompt: `You are a helpful assistant for a blog focused on construction, hardware, and project management in Uganda.
You will be given the title of the current blog post the user is reading ("Current Post Title") and a list of all other available blog post titles ("Available Post Titles").
Your task is to identify and return {{{count}}} titles from the "Available Post Titles" list that are most relevant or topically related to the "Current Post Title".
Do not include the "Current Post Title" in your recommendations.
Ensure the output strictly contains only the titles of the recommended posts, matching the format requested.

Current Post Title: {{{currentPostTitle}}}

Available Post Titles:
{{#each allPostTitles}}
- {{{this}}}
{{/each}}
`,
});

const recommendRelatedPostsFlow = ai.defineFlow(
  {
    name: 'recommendRelatedPostsFlow',
    inputSchema: RecommendRelatedPostsInputSchema,
    outputSchema: RecommendRelatedPostsOutputSchema,
  },
  async (input) => {
    const {output} = await recommendationPrompt(input);
    return output!;
  }
);
