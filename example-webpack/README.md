# RiotJS with Typescript 2.0 + webpack example

## Using Docker
The easiest and fastest way is to use this [Docker image](https://hub.docker.com/r/sandrokeil/typescript/).

Ensure you are in the root folder of this example and run the following commands:

```bash
$ docker run --rm -it --volume $(pwd):/app sandrokeil/typescript npm install

$ docker run --rm -it --volume $(pwd):/app sandrokeil/typescript npm link typescript

$ docker run --rm -it --volume $(pwd):/app sandrokeil/typescript webpack
```

Now open the `index.html` and you should see two timers.

## Using your system
If you have all dependencies (Typescript, webpack, ...) already installed, you can use the commands from above. You have
only to remove the Docker command `docker run --rm -it --volume $(pwd):/app sandrokeil/typescript`.
