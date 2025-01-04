import {defineCliConfig} from 'sanity/cli'
import {studioProjectID, studioDataset} from './env'

export default defineCliConfig({
  api: {
    projectId: studioProjectID,
    dataset: studioDataset,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
