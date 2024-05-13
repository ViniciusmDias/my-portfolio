(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+7A0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("h4O3");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("NBI0");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var a=r("uG3I");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}))},"6vc4":function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.NewsArticleJsonLd=t.BlogPostJsonLd=t.ArticleJsonLd=void 0;var o=n(r("j8BX")),a=n(r("xK7m")),i=n(r("0jh0")),c=n(r("q1tI")),s=r("Bcl6");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,a=void 0===o?[]:o,i=e.datePublished,u=e.dateCreated,d=e.dateModified,f=void 0===d?i:d,p=e.authorType,b=void 0===p?"Person":p,y=e.authorName,m=e.description,g=e.publisherName,O=e.publisherLogo,v=e.body,h=e.overrides,j=e.keywords,P=e.speakable,w=e.defer,E=void 0!==w&&w,k=l({"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":t},headline:null!=r?r:n,image:a,datePublished:i,dateModified:f,dateCreated:u,author:{"@type":b,name:y},publisher:{"@type":"Organization",name:g,logo:{"@type":"ImageObject",url:O}},description:m,articleBody:v,speakable:P?P.map((function(e){return l({"@type":"SpeakableSpecification"},e)})):void 0,keywords:Array.isArray(j)?j.join(", "):j},h);return c.default.createElement(s.JsonLd,{defer:E,json:k})};t.ArticleJsonLd=d;t.BlogPostJsonLd=function(e){var t=e.overrides,r=e.defer,n=void 0!==r&&r,i=e.publisherLogo,s=void 0===i?"":i,u=e.publisherName,f=void 0===u?"":u,p=(0,a.default)(e,["overrides","defer","publisherLogo","publisherName"]);return c.default.createElement(d,(0,o.default)({defer:n,publisherName:s,publisherLogo:f},p,{overrides:l({},t,{"@type":"BlogPosting"})}))};t.NewsArticleJsonLd=function(e){var t=e.overrides,r=e.section,n=e.defer,i=void 0!==n&&n,s=(0,a.default)(e,["overrides","section","defer"]);return c.default.createElement(d,(0,o.default)({defer:i},s,{overrides:l({articleSection:r},t,{"@type":"NewsArticle"})}))}},Bcl6:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.JsonLd=void 0;var o=n(r("q1tI")),a=r("rid2");t.JsonLd=function(e){var t=e.defer,r=e.json;return o.default.createElement(a.Helmet,{defer:t},o.default.createElement("script",{type:"application/ld+json"},JSON.stringify(r,null,2)))}},HBJX:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.FAQJsonLd=void 0;var o=n(r("0jh0")),a=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.FAQJsonLd=function(e){var t,r=e.questions,n=e.overrides,s=void 0===n?{}:n,u=e.defer,l=void 0!==u&&u,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"FAQPage",mainEntity:(t=r,t.map((function(e){var t=e.question;return{"@type":"Question",acceptedAnswer:{"@type":"Answer",text:e.answer},name:t}})))},s);return a.default.createElement(i.JsonLd,{defer:l,json:d})}},NBI0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("6vc4");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("uTMJ");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var a=r("lAea");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var i=r("jA7+");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var c=r("r+KM");Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var s=r("SKRr");Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var u=r("HBJX");Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var l=r("Bcl6");Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var d=r("yBkl");Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var f=r("ujHY");Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var p=r("ye2j");Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}));var b=r("krMq");Object.keys(b).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return b[e]}})}));var y=r("clPB");Object.keys(y).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return y[e]}})}))},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("I/Ru"),i=r("jNNy"),c=r("ihrq"),s=(r("asSB"),r("FT44")),u=r("+7A0"),l=r("Tgqd"),d=r("dCQc"),f=r("vOnD"),p=r("+IKJ");const b=f.b.h3`
	text-align: center;
	margin: 6vh 0 2vh;


	@media(min-width: 670px) {
		margin: 10vh 0 2vh ;

	}
	@media(min-width: 970px) {
		margin: 12vh 0 2vh ;

	}
`,y=f.b.div`
	width: 100%;

	a {
		background: #fff;
		border-radius: 5px;
		width: 100%;
		padding: 0.8rem 0;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		text-decoration: none;
		justify-content: center;
		transition: all 0.2s ease-in-out;
		opacity: 0.8;

		&:hover {
			transform: translateX(10px);
			opacity: 1;
		}

		img {
			margin: 0;
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
		}

		p {
			font-size: 0.7rem;
			color: #999;
			margin-top: 4px;
		}
		span {
				font-size: 0.7rem;
			}
		section {
			display: flex;
			flex-direction: column;
			min-width: 250px;
			margin: 0 1rem;
			flex: 1;
			justify-content: center;
			align-items: flex-start;

			strong {
				font-size: 0.8rem;
				color: var(--near-black);
			}
		}

		div {
			display: flex;
			margin: 0.5rem 1rem;
			align-self: flex-start;

			span {
				font-size: 0.6rem;
				color: #a8a8b3;
			}
		}
		svg {
			margin-left: auto;
			color: #cbcbd6;
		}
	}
`;f.b.form`
	max-width: 700px;
	display: flex;
	margin-bottom: 10vh;

	input {
		flex: 1;
		height: 4rem;
		padding: 0 1rem;
		font-size: 0.8rem;
		border: 0;
		border-radius: 5px 0 0 5px;
		background: #00000008;
		color: #3a3a3a;
		border: 2px solid #fff;

		${e=>e.hasError&&f.a`
				border-color: #c53030;
			`}

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		max-width: 210px;
		width: 28vw;
		height: 4rem;
		background: var(--orange-light);
		border-radius: 0px 5px 5px 0;
		border: 0;
		color: var(--dark-gray);
		font-weight: bold;
		transition: background-color 0.2s;
		cursor: pointer;
		font-size: 0.8rem;
		border: 2px solid #fff;

		&:hover {
			background: ${Object(p.a)(.1,"#ffc799")};
		}
	}
`,f.b.span`
	display: block;
	color: #c53030;
	margin-top: 8px;
`;var m=()=>{const{0:e,1:t}=Object(n.useState)([]);return Object(n.useEffect)(()=>{d.b.get("").then(e=>{t(e.data)})},[]),console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null,"Lastest posts"),o.a.createElement(y,null,e.map(e=>o.a.createElement("a",{key:e.id,href:""+e.url},o.a.createElement("section",null,o.a.createElement("span",null,e.readable_publish_date),o.a.createElement("strong",null,e.title),o.a.createElement("p",null,e.description)),o.a.createElement("div",null,o.a.createElement("span",null,"Read More"),o.a.createElement(l.a,{size:20}))))))};function g(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.SocialProfileJsonLd,{type:"Person",name:"Vinicius Dias ",url:"https://viniciusdias.works/",sameAs:["https://www.facebook.com/diasvini","https://instagram.com/diasvini10","https://www.linkedin.com/in/vinicius-m-dias/","https://twitter.com/vinimdias10"]}),o.a.createElement("div",{className:"container intro"},o.a.createElement("h1",null,"I'm a very curious guy."),o.a.createElement("div",{className:"background"}),o.a.createElement("div",{className:"description"},o.a.createElement(m,null),o.a.createElement(s.a,{title:"projects"}))))}t.default=()=>o.a.createElement(a.a,null,o.a.createElement(i.a,{title:"Frontend Developer",description:"I'm live in Florianópolis and actually builds WebSites, E-Commerces and LandingPages."}),o.a.createElement(c.a,null),o.a.createElement(g,null))},SKRr:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.CourseJsonLd=void 0;var o=n(r("0jh0")),a=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.CourseJsonLd=function(e){var t=e.name,r=e.courseName,n=e.description,s=e.providerName,u=e.providerUrl,l=e.overrides,d=void 0===l?{}:l,f=e.defer,p=void 0!==f&&f,b=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Course",name:null!=t?t:r,description:n,provider:s?{"@type":"Organization",name:s,sameAs:u}:void 0},d);return a.default.createElement(i.JsonLd,{defer:p,json:b})}},alxG:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.GatsbySeo=void 0;var o=n(r("q1tI")),a=r("2+in");t.GatsbySeo=function(e){var t=e.metaTags,r=e.linkTags,n=e.canonical,i=e.description,c=e.facebook,s=e.languageAlternates,u=e.mobileAlternate,l=e.nofollow,d=e.noindex,f=e.openGraph,p=e.title,b=e.titleTemplate,y=e.twitter;return o.default.createElement(a.BaseSeo,{metaTags:t,linkTags:r,canonical:n,description:i,facebook:c,languageAlternates:s,mobileAlternate:u,nofollow:l,noindex:d,openGraph:f,title:p,titleTemplate:b,twitter:y})}},asSB:function(e,t,r){},clPB:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.SpeakableJsonLd=void 0;var o=n(r("0jh0")),a=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SpeakableJsonLd=function(e){var t=e.xpath,r=e.cssSelector,n=e.overrides,s=void 0===n?{}:n,u=e.defer,l=void 0!==u&&u;if(t&&r)throw new Error("Speakable should use either xpath or the cssSelector, not both.");var d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"SpeakableSpecification",cssSelector:r,xpath:t},s);return a.default.createElement(i.JsonLd,{defer:l,json:d})}},h4O3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("2+in");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("alxG");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}))},"jA7+":function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbJsonLd=void 0;var o=n(r("0jh0")),a=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.BreadcrumbJsonLd=function(e){var t=e.itemListElements,r=void 0===t?[]:t,n=e.overrides,s=void 0===n?{}:n,u=e.defer,l=void 0!==u&&u,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name,"@type":"Thing"}}}))},s);return a.default.createElement(i.JsonLd,{defer:l,json:d})}},krMq:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=void 0;var o=n(r("q1tI")),a=r("rid2");t.SocialProfileJsonLd=function(e){var t=e.type,r=e.name,n=e.url,i=e.sameAs,c=void 0===i?[]:i,s=e.defer,u=void 0!==s&&s,l='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(r,'",\n    "url": "').concat(n,'",\n    "sameAs": [\n      ').concat(c.map((function(e){return'"'.concat(e,'"')})).toString(),"\n     ]\n  }");return o.default.createElement(a.Helmet,{defer:u},o.default.createElement("script",{type:"application/ld+json"},l))}},lAea:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.BookJsonLd=void 0;var o=n(r("xK7m")),a=n(r("0jh0")),i=n(r("q1tI")),c=r("Bcl6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BookJsonLd=function(e){var t=e.name,r=e.author,n=e.url,a=e.workExample,s=void 0===a?[]:a,l=e.id,d=e.sameAs,f=e.overrides,p=void 0===f?{}:f,b=e.defer,y=void 0!==b&&b,m=u({"@context":"https://schema.org","@type":"Book",name:t,url:n,"@id":l,sameAs:d,author:u({"@type":"Person"},r),workExample:s.map((function(e){var t,r=e.bookFormat,n=e.potentialAction,a=e.author,i=(0,o.default)(e,["bookFormat","potentialAction","author"]);return u({"@type":"Book",bookFormat:(t=r,t?"https://schema.org/".concat(t):void 0)},i,{person:u({"@type":"Person"},a),potentialAction:u({"@type":"ReadAction"},n)})}))},p);return i.default.createElement(c.JsonLd,{defer:y,json:m})}},"r+KM":function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.CorporateContactJsonLd=void 0;var o=n(r("q1tI")),a=r("rid2"),i=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})).toString(),"]"):'"'.concat(e,'"')};t.CorporateContactJsonLd=function(e){var t=e.url,r=e.logo,n=e.contactPoint,c=e.defer,s=void 0!==c&&c,u='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(r?'"logo": "'.concat(r,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(i(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(i(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption.toString(),'"'):"","\n    }")}))}(n).toString(),"]\n  }");return o.default.createElement(a.Helmet,{defer:s},o.default.createElement("script",{type:"application/ld+json"},u))}},uG3I:function(e,t,r){},uTMJ:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.BlogJsonLd=void 0;var o=n(r("0jh0")),a=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BlogJsonLd=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,c=void 0===o?[]:o,u=e.datePublished,l=e.dateModified,d=void 0===l?null:l,f=e.authorName,p=e.authorType,b=void 0===p?"Person":p,y=e.keywords,m=e.description,g=e.publisherName,O=e.publisherLogo,v=e.posts,h=void 0===v?[]:v,j=e.issn,P=e.overrides,w=void 0===P?{}:P,E=e.defer,k=void 0!==E&&E,_=s({"@context":"https://schema.org","@type":"Blog",mainEntityOfPage:{"@type":"Blog","@id":t},headline:null!=r?r:n,keywords:y,issn:j,image:c,datePublished:u,dateModified:null!=d?d:u,description:m,author:f?{"@type":b,name:f}:void 0,publisher:g?{"@type":"Organization",name:g,logo:O?{"@type":"ImageObject",url:O}:void 0}:void 0,blogPost:h.map((function(e){return s({"@type":"BlogPosting"},e)}))},w);return a.default.createElement(i.JsonLd,{defer:k,json:_})}},ujHY:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.LogoJsonLd=void 0;var o=n(r("0jh0")),a=n(r("q1tI")),i=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.LogoJsonLd=function(e){var t=e.url,r=e.logo,n=e.overrides,s=void 0===n?{}:n,u=e.defer,l=void 0!==u&&u,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Organization",url:t,logo:r},s);return a.default.createElement(i.JsonLd,{defer:l,json:d})}},yBkl:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.LocalBusinessJsonLd=void 0;var o=n(r("0jh0")),a=n(r("xK7m")),i=n(r("q1tI")),c=r("Bcl6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={Mon:"Monday",Tues:"Tuesday",Wed:"Wednesday",Thurs:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"},d=function(e){var t;return"http://schema.org/".concat(null!==(t=l[e])&&void 0!==t?t:e)},f=function(e){return e?Array.isArray(e)?e.map(d):d(e):void 0},p=function(e){if(e)return Array.isArray(e)?e.map((function(e){var t=e.dayOfWeek,r=(0,a.default)(e,["dayOfWeek"]);return u({"@type":"OpeningHoursSpecification",dayOfWeek:f(t)},r)})):u({"@type":"OpeningHoursSpecification"},e,{dayOfWeek:f(e.dayOfWeek)})};t.LocalBusinessJsonLd=function(e){var t=e.type,r=e.id,n=e.name,o=e.description,a=e.url,s=e.telephone,l=e.address,d=e.geo,f=e.images,b=e.openingHours,y=e.rating,m=e.priceRange,g=e.overrides,O=void 0===g?{}:g,v=e.defer,h=void 0!==v&&v,j=u({"@context":"https://schema.org","@type":t,"@id":r,name:n,description:o,url:a,telephone:s,priceRange:m,image:f,geo:u({"@type":"GeoCoordinates"},d),address:u({"@type":"PostalAddress"},l),aggregateRating:y?u({"@type":"AggregateRating"},y):void 0,openingHoursSpecification:p(b)},O);return i.default.createElement(c.JsonLd,{defer:h,json:j})}},ye2j:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.ProductJsonLd=void 0;var o=n(r("xK7m")),a=n(r("0jh0")),i=n(r("q1tI")),c=r("Bcl6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={Discontinued:"http://schema.org/Discontinued",InStock:"http://schema.org/InStock",InStoreOnly:"http://schema.org/InStoreOnly",LimitedAvailability:"http://schema.org/LimitedAvailability",OnlineOnly:"http://schema.org/OnlineOnly",OutOfStock:"http://schema.org/OutOfStock",PreOrder:"http://schema.org/PreOrder",PreSale:"http://schema.org/PreSale",SoldOut:"http://schema.org/SoldOut"},d={DamagedCondition:"http://schema.org/DamagedCondition",NewCondition:"http://schema.org/NewCondition",RefurbishedCondition:"http://schema.org/RefurbishedCondition",UsedCondition:"http://schema.org/UsedCondition"};t.ProductJsonLd=function(e){var t,r,n,a=e.name,s=e.productName,f=e.images,p=void 0===f?[]:f,b=e.description,y=e.sku,m=e.gtin12,g=e.gtin,O=e.gtin8,v=e.gtin13,h=e.gtin14,j=e.mpn,P=e.brand,w=e.reviews,E=void 0===w?[]:w,k=e.aggregateRating,_=e.offers,S=e.offersType,L=void 0===S?"Offer":S,x=e.overrides,J=void 0===x?{}:x,M=e.defer,D=void 0!==M&&M,A=u({"@context":"https://schema.org","@type":"Product",name:null!=a?a:s,image:p,sku:y,gtin:g,gtin8:O,gtin12:m,gtin13:v,gtin14:h,mpn:j,brand:P?{"@type":"Brand",name:P}:void 0,description:b,review:E.map((function(e){var t=e.reviewRating;return u({"@type":"Review"},(0,o.default)(e,["reviewRating"]),{reviewRating:u({"@type":"Rating"},t)})})),aggregateRating:k?u({"@type":"AggregateRating"},k):void 0,offers:_?u({"@type":L},_,{availability:(n=_.availability,n?l[n]:void 0),itemCondition:(r=_.itemCondition,r?d[r]:void 0),seller:_.seller?{"@type":null!==(t=_.seller.type)&&void 0!==t?t:"Organization",name:_.seller.name}:void 0}):void 0},J);return i.default.createElement(c.JsonLd,{defer:D,json:A})}}}]);
//# sourceMappingURL=component---src-pages-index-js-2d93768e4267ffdb2299.js.map