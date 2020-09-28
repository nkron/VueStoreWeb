import Items from './components/Items/Items.vue'
import Create from './components/Items/create/Create.vue'
import Edit from './components/Items/edit/Edit.vue'
import MaxItems from './components/Items/MaxItems'

export const routes = [
  {
    path: '/',
    component: Items,
    children: [
    ]
  },
  { path: '/max', component: MaxItems },
  { path: '/create', component: Create },
  { path: '/edit/:id', component: Edit }
]
