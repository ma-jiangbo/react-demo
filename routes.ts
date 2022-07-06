const routes: RouteItem[] = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/todo",
      name: "todo",
    },
    {
      path: '/user',
      name: 'user',
      children: [
        {
            path: '/index',
            name: 'user',
        },
        {
            path: '/account',
            name: 'account',
        },
      ],
    }
  ];

export default routes
