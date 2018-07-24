import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/login';
import Index from '@/components/page/index';
import UI from '@/components/page/ui';
import Unboxing from '@/components/page/unboxing';
import EditView from '@/components/page/editView';
import Icon from '@/components/page/icon';
import Stickies from '@/components/page/stickies';
import About from '@/components/page/about';

import Code from '@/components/page/code';
import CodeIndex from '@/components/page/code/index';
import CodeButton from '@/components/page/code/button';
import CodeText from '@/components/page/code/text';
import CodeCheckBox from '@/components/page/code/checkbox';

import Component from '@/components/page/component';
import CIndex from '@/components/page/components/index';
import Color from '@/components/page/components/color';
import Button from '@/components/page/components/button';
import Message from '@/components/page/components/message';
import Input from '@/components/page/components/input';
import Select from '@/components/page/components/select';
import Checkbox from '@/components/page/components/checkbox';
import Text from '@/components/page/components/text';
import List from '@/components/page/components/list';
import Upload from '@/components/page/components/upload';
import Layout from '@/components/page/components/layout_iframe';
import LayoutVue from '@/components/page/components/layout_vue';
import fontMask from '@/components/page/components/font_mask';

import Entry from '@/components/page/entry';
import Azurlane from '@/components/page/entry/azurlane';
import Bill from '@/components/page/entry/bill';
import Backlog from '@/components/page/entry/backlog';

import Album from '@/components/page/album';
import Aindex from '@/components/page/album/index';
import Tabikaeru from '@/components/page/album/tabikaeru';

import Canvas from '@/components/page/canvas';
import CvIndex from '@/components/page/canvas/index';
import CvMusic from '@/components/page/canvas/music';
import CvGame from '@/components/page/canvas/game';

Vue.use(Router);

export default new Router({
  mode: 'history', // history hash
  routes: [
    {path: '/', name: 'index', component: Index, meta: {requiresAuth: true}},
    {path: '/login', name: 'login', component: Login},
    {path: '/addview', name: 'addview', component: EditView, meta: {requiresAuth: true}},
    {path: '/editview/:id', name: 'editview', component: EditView, meta: {requiresAuth: true}},
    {path: '/unboxing', name: 'unboxing', component: Unboxing, meta: {requiresAuth: true}},
    {path: '/code', component: Code, children: [
      {path: '', name: 'code', component: CodeIndex},
      {path: 'checkbox', name: 'code_checkbox', component: CodeCheckBox},
      {path: 'text', name: 'code_text', component: CodeText},
      {path: 'button', name: 'code_button', component: CodeButton}
    ]},
    {path: '/component', component: Component, children: [
      {path: '', name: 'component', component: CIndex},
      {path: 'icon', name: 'icon', component: Icon},
      {path: 'color', name: 'color', component: Color},
      {path: 'button', name: 'button', component: Button},
      {path: 'message', name: 'message', component: Message},
      {path: 'select', name: 'select', component: Select},
      {path: 'input', name: 'input', component: Input},
      {path: 'checkbox', name: 'checkbox', component: Checkbox},
      {path: 'text', name: 'text', component: Text},
      {path: 'layout', name: 'layout', component: Layout},
      {path: 'layout-vue', name: 'layout-vue', component: LayoutVue},
      {path: 'list', name: 'list', component: List},
      {path: 'upload', name: 'upload', component: Upload},
      {path: 'font-mask', name: 'fontmask', component: fontMask}
    ]},
    {path: '/canvas', component: Canvas, children: [
      {path: '', name: 'canvas', component: CvIndex},
      {path: 'music', name: 'canvas-music', component: CvMusic},
      {path: 'game', name: 'canvas-game', component: CvGame}
    ]},
    {path: '/stickies', name: 'stickies', component: Stickies, meta: {requiresAuth: true}},
    {path: '/entry', component: Entry, meta: {requiresAuth: true}, children: [
      {path: '', name: 'entry', component: Color},
      {path: 'azurlane', name: 'azurlane', component: Azurlane},
      {path: 'bill', name: 'bill', component: Bill},
      {path: 'backlog', name: 'backlog', component: Backlog}
    ]},
    {path: '/album', component: Album, meta: {requiresAuth: true}, children: [
      {path: '', name: 'album', component: Aindex},
      {path: 'tabikaeru', name: 'tabikaeru', component: Tabikaeru}
    ]},
    {path: '/ui', name: 'ui', component: UI},
    {path: '/about', name: 'about', component: About}
  ]
});