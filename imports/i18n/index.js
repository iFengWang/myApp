import i18n from 'meteor/universe:i18n';
import './en.i18n.json';
import './zh.i18n.json';

// i18n.setLocale('en-US');
i18n.setLocale('zh-CN');

export const T = i18n.createComponent();

// 调用**********************************
// import { T } from '../i18n';
// <T name='vvvvv'>ifeng</T>
// <div>{i18n.__('ifeng',{name:'mmmm'})}</div>