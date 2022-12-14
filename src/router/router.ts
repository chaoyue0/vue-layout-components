import 'vue-router';
import type { Component } from 'vue';

export const RouteName = {
  Main: 'Main',
  Home: 'Home',
  Test: 'Test',
  TestPage1: 'TestPage1',
  TestPage2: 'TestPage2',
  MockTest1: 'MockTest1',
  MockTest2: 'MockTest2',
};

export const enum MenuGroup {
  Home = 'Home',
  Test = 'Test',
  Mock = 'Mock',
}

declare module 'vue-router' {
  interface RouteMeta {
    menuGroup: MenuGroup;
    menuName?: string;
    menuIcon?: string | Component;
  }
}
