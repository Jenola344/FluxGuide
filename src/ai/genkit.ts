import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import next from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI({
      model: 'gemini-1.5-flash',
    }),
    next({
      // We are mounting the Genkit API under /api/genkit.
      // This is the default.
    }),
  ],
});
