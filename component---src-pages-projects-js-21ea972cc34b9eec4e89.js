(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"16l3":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("p3AD"),c=a("I/Ru"),i=a("jNNy"),s=a("ihrq"),m=a("FT44"),d=a("Tgqd"),u=a("dCQc"),p=a("vOnD"),f=a("+IKJ");const g=p.b.h2`
	margin: 8vh 0 2vh !important;
`,h=p.b.div`
	width: 100%;

	a {
		background: #fff;
		border-radius: 5px;
		width: 100%;
		padding: 1.2rem 0;
		display: flex;
		flex-wrap: wrap;
		text-decoration: none;
		justify-content: center;
		align-items: center;
		transition: transform 0.2s;

		&:hover {
			transform: translateX(10px);
		}

		& + a {
			margin-bottom: 8vh;
		}

		img {
			margin: 0;
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
		}
		p {
			font-size: 0.8rem;
			color: #999;
			margin-top: 4px;
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
				font-size: 1rem;
				color: var(--near-black);
			}
		}

		div {
			display: flex;
			flex-direction: column;
			margin: 0 1rem;
			align-items: center;

			span {
				font-size: 0.6rem;
				color: #a8a8b3;
				margin-top: 4px;
			}
		}
		svg {
			margin-left: auto;
			color: #cbcbd6;
		}
	}
`;p.b.form`
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

		${e=>e.hasError&&p.a`
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
			background: ${Object(f.a)(.1,"#ffc799")};
		}
	}
`,p.b.span`
	display: block;
	color: #c53030;
	margin-top: 8px;
`;var b=()=>{const{0:e,1:t}=Object(r.useState)([]);return Object(r.useEffect)(()=>{u.a.get("/repos").then(e=>{const a=e.data;a.sort((function(e,t){return new Date(e.updated_at)-new Date(t.updated_at)})),t(a.slice(-2))})},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null,"Latest repositories!"),n.a.createElement(h,null,e.map(e=>n.a.createElement("a",{key:e.full_name,href:""+e.html_url},n.a.createElement("img",{src:e.owner.avatar_url,alt:e.owner.login}),n.a.createElement("section",null,n.a.createElement("strong",null,e.full_name),n.a.createElement("p",null,e.description)),n.a.createElement("div",null,n.a.createElement("strong",null,e.stargazers_count),n.a.createElement("span",null,"Starts")),n.a.createElement("div",null,n.a.createElement("strong",null,e.open_issues_count),n.a.createElement("span",null,"Issues abertas")),n.a.createElement(d.a,{size:20})))))},E=a("9eSz"),x=a.n(E);a("UaTi");t.default=e=>{let{data:t}=e;const a=t.allMarkdownRemark.edges;return n.a.createElement(c.a,null,n.a.createElement(i.a,{title:"Projects",description:"All projects in my carrer."}),n.a.createElement(s.a,null),n.a.createElement("div",{className:"container works"},n.a.createElement("hr",null),n.a.createElement("h1",null,"Projects"),n.a.createElement("h2",null,"Some projects that I have contributed in some way and I'm very proud of."),n.a.createElement(b,null),n.a.createElement("section",null,a.map(e=>{let{node:t}=e;const a=t.frontmatter.title||t.fields.slug;return n.a.createElement("article",{key:t.fields.slug},n.a.createElement(l.Link,{style:{boxShadow:"none"},title:"go to project",to:t.fields.slug},n.a.createElement("div",{className:"image"},n.a.createElement(x.a,{fluid:t.frontmatter.imgUrl.childImageSharp.fluid,alt:"logo of "+t.frontmatter.title})),n.a.createElement("section",{className:"about"},n.a.createElement("small",null,t.frontmatter.date),n.a.createElement("h3",{style:{marginBottom:Object(o.a)(1/4)}},a),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}),n.a.createElement("div",{className:"techs"},t.frontmatter.techs.split(", ").map(e=>n.a.createElement("span",null,e))))))}))),n.a.createElement(m.a,{title:"carrer"}))}},UaTi:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-projects-js-21ea972cc34b9eec4e89.js.map