import { defineCollection, z } from 'astro:content';

const gite = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    published: z.boolean().default(false),
    data_evento: z.date().optional(),
    prezzo: z.number(),
    posti: z.number().default(15),
    durata: z.string().default('Giornata intera'),
    difficolta: z.enum(['Facile', 'Media', 'Impegnativa']).default('Facile'),
    immagine: z.string().optional(),
    incluso: z.array(z.string()).optional(),
    non_incluso: z.array(z.string()).optional(),
    ritrovo: z.string().optional(),
    orario: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    published: z.boolean().default(false),
    date: z.date(),
    categoria: z.string(),
    immagine: z.string().optional(),
    estratto: z.string(),
  }),
});

const ricette = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    published: z.boolean().default(false),
    immagine: z.string().optional(),
    tempo_prep: z.number().optional(),
    porzioni: z.number().default(4),
    ingredienti: z.array(z.string()).optional(),
  }),
});

export const collections = { gite, blog, ricette };
