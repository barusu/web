import Vue from 'vue';
import Router from 'vue-router';
import UI from '@/components/page/ui';
import Login from '@/components/login';
import Unboxing from '@/components/page/unboxing';
import Index from '@/components/page/index';
import EditView from '@/components/page/editView';
import Icon from '@/components/page/icon';
import Component from '@/components/page/component';
import Color from '@/components/page/components/color';
import Button from '@/components/page/components/button';
import Message from '@/components/page/components/message';
import Input from '@/components/page/components/input';
import Select from '@/components/page/components/select';
import Checkbox from '@/components/page/components/checkbox';
import Stickies from '@/components/page/stickies';
import Entry from '@/components/page/entry';
import Azurlane from '@/components/page/entry/azurlane';

Vue.use(Router);

export default new Router({
  mode: 'history', // history hash
  routes: [
    {path: '/', name: 'index', component: Index, meta: {requiresAuth: true}},
    {path: '/login', name: 'login', component: Login},
    {path: '/icon', name: 'icon', component: Icon},
    {path: '/addview', name: 'addview', component: EditView, meta: {requiresAuth: true}},
    {path: '/editview/:id', name: 'editview', component: EditView, meta: {requiresAuth: true}},
    {path: '/unboxing', name: 'unboxing', component: Unboxing, meta: {requiresAuth: true}},
    {path: '/component', component: Component, children: [
      {path: '', name: 'component', component: Color},
      {path: 'color', name: 'color', component: Color},
      {path: 'button', name: 'button', component: Button},
      {path: 'message', name: 'message', component: Message},
      {path: 'select', name: 'select', component: Select},
      {path: 'input', name: 'input', component: Input},
      {path: 'checkbox', name: 'checkbox', component: Checkbox}
    ]},
    {path: '/stickies', name: 'stickies', component: Stickies},
    {path: '/entry', component: Entry, children: [
      {path: '', name: 'entry', component: Color},
      {path: 'azurlane', name: 'azurlane', component: Azurlane}
    ]},
    {path: '/ui', name: 'ui', component: UI},
    {path: '/about', name: 'about', component: Component}
  ]
});