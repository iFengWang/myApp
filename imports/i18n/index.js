import i18n from 'meteor/universe:i18n';
import './zh.i18n.json';
import './en.i18n.json';


function getLang () {
    return (
        navigator.languages && navigator.languages[0] ||
        navigator.language ||
        navigator.browserLanguage ||
        navigator.userLanguage ||
        'en-US'
    );
}
// alert(getLang());
i18n.setLocale(getLang());      //'en-US','zh-CN'
export const T = i18n.createComponent();

// 调用**********************************
// import { T } from '../i18n';
// <T name='vvvvv'>ifeng</T>
// <div>{i18n.__('ifeng',{name:'mmmm'})}</div>
// alert('lang:'+getLang()+',value:'+i18n.__('home'));