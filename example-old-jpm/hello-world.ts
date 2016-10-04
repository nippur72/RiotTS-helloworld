import * as Riot from "riot-typescript";

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

window.onload = () => {
	debugger;
	Riot.base.mount("*");
}	
