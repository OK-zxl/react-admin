import loadable from "@/utils/loadable";

const Index = loadable(() =>
  import(/* webpackChunkName: 'index' */ "@/views/Index")
);
const list = loadable(() =>
  import(/* webpackChunkName: 'index' */ "@/views/Articlelist")
);
const EditorView = loadable(() =>
  import(/* webpackChunkName: 'editor' */ "@/views/Others/Editor")
);

const routes = [
  { path: "/index", exact: true, name: "Index", component: Index, auth: [1] },
  { path: "/list", exact: true, name: "list", component: list, auth: [1] },
  {
    path: "/others/editor",
    exact: false,
    name: "博文撰写",
    component: EditorView,
    auth: [1]
  }
];

export default routes;
