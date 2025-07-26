// src/install.ts
import type { App } from 'vue'
import GanttChart from './components/GanttChart.vue'

export const install = (app: App) => {
  app.component('GanttChart', GanttChart)
}
