import { defineCollection, z } from 'astro:content';

export const collections = { 
	'blog': defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			heroImage: z.string().optional(),
		}),
	}),
	'feed': defineCollection({
		schema: z.object({
			title: z.string(),
			subtitle: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			thumbnail: z.string(),
			mediaType: z.string(),
			url: z.string(),
		}),
	}),
};
