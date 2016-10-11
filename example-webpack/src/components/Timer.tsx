import * as riot from "riot/riot+compiler";
import * as Riot from "riot-typescript";

@Riot.template(`
<timer>
   <div>
      timer: { time }<br>
      trasclusion is '<yield/>'<br>                 
      <div each="{el in mylist}">iterating over array item "{el}"<br></div>
   </div>
</timer>`)

export class Timer extends Riot.Element {
    time: number;
    timerHandle: number;

    mylist = ["one","two","three"];

    // initializes the element with opts
    constructor(opts: any) {
        super();
        this.time=opts.time||0;
        this.timerHandle=setInterval(() => this.ticks(),1000);
    }

    ticks() {
        this.time++;
        this.update();  // refreshes the element
    }

    // handles the unmount event
    unmounted()
    {
        clearInterval(this.timerHandle);
    }
}
