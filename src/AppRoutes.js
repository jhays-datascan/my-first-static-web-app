import React from 'react';
import { SchedulerTool } from "./SchedulerTool";
import { About } from "./About";

const AppRoutes = [
  {
    index: true,
    element: <SchedulerTool />
  },
  {
    path: '/about',
    element: <About />
  }
];

export default AppRoutes;
