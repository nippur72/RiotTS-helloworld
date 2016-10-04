/// <reference types="riot-typescript" />
/// <reference path="node_modules/riot-typescript/riot.global.d.ts" />

@Riot.template(`
<hello-world>
	<div>{greet}, {who}!</div>
	<button onclick={changeGreeting}>change greet</button>
</hello-world>
`)

class HelloWorldTag extends Riot.Element
{
	greet = "Hello";
	who = "World";

	constructor(opts)
	{
		super();
		if(opts.who)
		{
			this.who = opts.who;
		}
	}

	changeGreeting()
	{
		this.greet = "Holà";
		this.who = "amigo";
	}
}

function main()
{
	riot.mount("*");
}
