import * as riot from "riot/riot+compiler";
import * as Riot from "riot-typescript";

import "./nested";

@Riot.template(`
<hello-world>
   <nested></nested>
	<div>{greet}, {who}!</div>
	<button onclick={changeGreeting}>change greet</button>
</hello-world>
`)

class HelloWorldTag extends Riot.Element
{
	greet = "Hello";
	who = "World";

	constructor(opts: any)
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

(window as any)["main"] = main;
