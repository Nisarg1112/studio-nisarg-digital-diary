import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemaTypes';
import {codeInput} from '@sanity/code-input';
import {studioProjectID, studioDataset} from './env';

export default defineConfig({
  name: 'default',
  title: 'personal-site',

  projectId: studioProjectID || '',
  dataset: studioDataset || '',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
