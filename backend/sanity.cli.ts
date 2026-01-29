import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8mb6d99a',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    appId: 'co899k6wu9tcqhqvoprga2i4',
    autoUpdates: true,
  }
})
