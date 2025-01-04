import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'}, // Default block editor
        {
          type: 'code', // Multi-line code block
          title: 'Code Block',
          options: {
            language: 'javascript', // Default language
            theme: 'monokai', // Syntax highlighting theme
          },
        },
        {
          type: 'object',
          name: 'inlineCode',
          title: 'Inline Code',
          fields: [
            {
              name: 'code',
              type: 'string',
              title: 'Code',
            },
          ],
        },
        {
          type: 'object',
          name: 'table',
          title: 'Table',
          fields: [
            {
              name: 'rows',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [{type: 'array', name: 'cells', of: [{type: 'string'}]}],
                },
              ],
            },
          ],
        },
        {
          type: 'object', // Embed a video or link
          name: 'embedVideo',
          title: 'Embed Video',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Video URL',
            },
          ],
        },
        {
          type: 'object', // Giphy Embed
          name: 'giphy',
          title: 'GIF',
          fields: [
            {type: 'string', name: 'url', title: 'GIF URL'},
            {type: 'string', name: 'caption', title: 'Caption'},
          ],
        },
        {
          type: 'image', // Embed an image
          title: 'Image',
          fields: [
            {type: 'string', name: 'caption', title: 'Caption'},
            {type: 'string', name: 'alt', title: 'Alt Text'},
          ],
          options: {
            hotspot: true, // Enable image cropping
          },
        },
        {
          type: 'object',
          name: 'layout',
          title: 'Layout',
          fields: [
            {
              name: 'columns',
              type: 'array',
              of: [{type: 'block'}],
              title: 'Columns',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'fav',
      type: 'boolean',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tag',
          fields: [
            {type: 'string', name: 'label'},
            {type: 'string', name: 'value'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'seoKeywords',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tag',
          fields: [
            {type: 'string', name: 'label'},
            {type: 'string', name: 'value'},
          ],
        }),
      ],
    }),
  ],
})
