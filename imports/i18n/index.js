import i18n from 'meteor/universe:i18n';
import './zh.i18n.json';
import './en.i18n.json';

// function getLang () {
//     return (
//         navigator.languages && navigator.languages[0] ||
//         navigator.language ||
//         navigator.browserLanguage ||
//         navigator.userLanguage ||
//         'en-US'
//     );
// }

console.log('0.......',i18n.getLocale());
console.log('00......',i18n.__('home'));
i18n.setLocale('zh-CN');      //'en-US','zh-CN'
console.log('1.......',i18n.getLocale());
console.log('11......',i18n.__('home'));

// i18n.addTranslation('en-US', 'ok', 'Ok');
// i18n.addTranslation('zh-CN', 'ok', '确定');
// console.log('1......',i18n.__('ok'));

export const T = i18n.createComponent();

// 调用**********************************
// import { T } from '../i18n';
// <T name='vvvvv'>ifeng</T>
// <div>{i18n.__('ifeng',{name:'mmmm'})}</div>
// alert('lang:'+getLang()+',value:'+i18n.__('home'));