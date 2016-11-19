import * as riot from "riot/riot+compiler";
import * as Riot from "riot-typescript";

@Riot.template(`
<nested>
	<div>some nested content</div>
</nested>
`)

export class NestedTag extends Riot.Element
{
}

