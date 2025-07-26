// src/index.ts

// 🧩 Named exports
export { default as GanttChart } from './components/GanttChart.vue'
export { default as TaskList } from './components/TaskList.vue'
export { default as Timeline } from './components/Timeline.vue'
export { default as TaskBar } from './components/TaskBar.vue'
export { default as TaskDrawer } from './components/TaskDrawer.vue'
export { default as MilestonePoint } from './components/MilestonePoint.vue'
export { default as MilestoneDialog } from './components/MilestoneDialog.vue'
export { default as TaskRow } from './components/TaskRow.vue'
export type { Task } from './models/classes/Task.ts'
export { useMessage } from './composables/useMessage.ts'

// 🔧 Style import
import './styles/theme-variables.css'

// 🧩 Optional plugin install
export { install } from './install'
