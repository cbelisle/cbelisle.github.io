(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(151),l=a(158),d=a(155),c=a(156),u=a(152),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return s.a.createElement(d.a,{location:this.props.location,title:t},s.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),s.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug},s.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},s.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),s.a.createElement("small",null,t.frontmatter.date),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(s.a.Component);t.default=f;var p="2785444898"},151:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(153);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(163),i=a.n(r),n=a(164),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,d=o.scale},153:function(e,t,a){var r;e.exports=(r=a(154))&&r.default||r},154:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},155:function(e,t,a){"use strict";a(33);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(151),l=a(152),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,i),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=d},156:function(e,t,a){"use strict";var r=a(157),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(165),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Useful and less useful things",description:"My personal blog about building software, from the beginning to the end.",author:"Christian Bélisle"}}}}},158:function(e,t,a){"use strict";a(159);var r=a(161),i=a(0),n=a.n(i),s=a(151),o=a(162),l=a.n(o),d=a(152);var c="1286950831";t.a=function(){return n.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by me, ",n.a.createElement("strong",null,t),"."))},data:r})}},159:function(e,t,a){"use strict";a(160)("fixed",function(e){return function(){return e(this,"tt","","")}})},160:function(e,t,a){var r=a(11),i=a(17),n=a(18),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},161:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAERklEQVQ4y32SW1AbVRjHtxTffNVpwZICaS6bbK67uWc3CZlQB6GBGS4NhFuoNVopArUkXIQWCgYKbZohMqAU0sHWtnS06kwdfXCQ8UHbamtHHR6qPHhpp3UYaYB0cz43yxS1M3Bmdr7vfOf//c7+zzkY9tQYCrfxMRzrxw6VM9ueXq8+WJSWirQTx0KRDmzLEQfg42u9dRu1Cn+J7aUKe7DGX+T9ZD72bKpW4s3noZRJuDXw3tJDrPVEw8b8YFPFcPD1UhhsKQd/jQvcZfTC4a46WWqtvH4dGge0NfR87DQvnJg+5ZqbPg0PLofh/sWTie9Hu9bCgToo9uRdBwD+KJoCPiyOtgCynOWvZmPpqfzzKzNHVq9dAvh0LAHzFxB8MYNune1LVlc54M3OWjKlOdLmSYuvPNoc+Mvvi9j5wU4e+EF0qPdmpAcenAkmFkYD6M5oJ7o+3geNLxeg5u56c0rT3uNL29Lub3/dx4bbXuGBI281dc8EauHP8eOJucB+9FHAg3547xg70e6Dub6gn3fR3bI9nljbHPj1l9ewHyfDPPD2uXf6ly5G4eHEmcRKbBDYqxOwGAsl7k6G4NFkpJ2/xMiJ9PjayubA2UvnsJuRER54491o/+LYKZgP+hPL42+jxHQkeXcsBHfOjvz895X3s1KaPy5PbdsUdjhwgI/Rvo7tqTgVHsj/+HgHLPQcTf7a24wWQ83s3HAQuptrebvRVl/6k96W4KF/QVWNXkxkUPJ5pd+DZeC7eWGuOufYq94yuBVsSt4baEGfBetQf8M+sFvwx3vzqYqUhjQTz9T4+RRTGp1Yma8Iw9JeeJ4vKFymtGyFgIdVeVz5SioHNKQI9XkL0UClC3q8TrjwhputL1CDy6X96b/uVDby/7ctZPQbBbrYpSVM8m9Jowh8hWq2ZT8DXR4G3QjVou+GqsDzopoVaoRAmBRzTrfT/eSRi/TydUaOleITvTtPLrKoryoZNeBmAnYRu1k9lQ1TR93om7AfPuyuRDWFWsiWZYHaIEmSVgJEOhzERuK2ucDk4qEGfB3qqC4hckyqZRmjAp1DldQxChbXi+E54Q60U7gTCfFdkCnMgB25GUhJ5SLargCLjWA53WOBRgRSi2K1MVgn2rCsLcqblTtIIB3KFcquRBRDIE6MtEYJ2kMIIEOYCdm4AEi9CCw0jix2BTLQcjByWtJGrBKMEpyljiketq/pgIBwGZdlVjmoOKHGpkCUTY4oqwxI7tMYxSCQZIFYlQMmqxTMDAEmRgYGTqPjNqZsBFJxNWqvbqmmtSoTs3jcDWK7FvYYxKySA6o5kYaRA8U1qc1S0FpwyMKzACdzeRBlkYKexkHH5RpahlRWHEmNElZmVwFdaq/FyGLXSK5VCdmUOCHnzkbB7aamCdAyOGhpCShNIhBwtgmDiIOLgTRLQEdLQcP9rdqKA8HNhZQwIeV69IWGk/8AoYLhff8+LY8AAAAASUVORK5CYII=",width:100,height:100,src:"/static/0de7126fd1e1bd885d650e6c528e4334/2fa9b/profile-pic.png",srcSet:"/static/0de7126fd1e1bd885d650e6c528e4334/2fa9b/profile-pic.png 1x,\n/static/0de7126fd1e1bd885d650e6c528e4334/e31b2/profile-pic.png 1.5x,\n/static/0de7126fd1e1bd885d650e6c528e4334/2a990/profile-pic.png 2x,\n/static/0de7126fd1e1bd885d650e6c528e4334/8694c/profile-pic.png 3x"}}},site:{siteMetadata:{author:"Christian Bélisle"}}}}},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(34)),o=r(a(74)),l=r(a(75)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var g=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+o+l+a+i+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,w=e.Tag,S=e.itemProp,v="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),A={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var L=h;return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),v&&d.default.createElement(w,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),L.base64&&d.default.createElement(b,(0,l.default)({src:L.base64},A)),L.tracedSVG&&d.default.createElement(b,(0,l.default)({src:L.tracedSVG},A)),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:L.sizes,src:L.src,srcSet:L.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},L))}}))}if(g){var x=g,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete C.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},v&&d.default.createElement(w,{title:t,style:{backgroundColor:v,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),x.base64&&d.default.createElement(b,(0,l.default)({src:x.base64},A)),x.tracedSVG&&d.default.createElement(b,(0,l.default)({src:x.tracedSVG},A)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(b,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,srcSet:x.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=y;t.default=v}}]);
//# sourceMappingURL=component---src-pages-index-js-668b153bb657e856413e.js.map