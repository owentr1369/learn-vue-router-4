import { createRouter, createWebHashHistory } from "vue-router";
import OverViewPage from "./pages/OverView.vue";
import TransactionsPage from "./pages/TransactionsPage.vue";
import BudgetsPage from "./pages/BudgetsPage.vue";
import ReportsPage from "./pages/ReportsPage.vue";
import SettingsPage from "./pages/SettingsPage.vue";

const routes = [
  {
    path: "/",
    component: OverViewPage,
  },
  {
    path: "/transactions",
    component: TransactionsPage,
  },
  {
    path: "/budgets",
    component: BudgetsPage,
  },
  {
    path: "/reports",
    component: ReportsPage,
  },
  {
    path: "/settings",
    component: SettingsPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
