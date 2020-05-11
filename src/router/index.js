import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Categoria from "../views/Categoria.vue";
import CalculadoraIMC from "../views/apps/CalculadoraIMC.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:categoria",
    name: "Categoria",
    component: Categoria,
  },
  {
    path: "/apps/imc",
    name: "Calculadora de IMC",
    component: CalculadoraIMC,
  },
  {
    path: "/blog/:categoria/:post",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Post.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
