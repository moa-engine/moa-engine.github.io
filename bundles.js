const { Bundler } = require("@stylify/bundler");

const compilerConfig = {
	variables: {
		pc: "#865DFF",
		sc: "#b984ff",
		bp: "#212127",
		bs: "#262930",
	},
	keyframes: {
		aGetout: "from {transform: translate(0,0)} to {transform: translate(10rem,10rem)}",
		bGetout: "from {transform: translate(0,0)} to {transform: translate(-10rem,10rem)}",
		cGetout: "from {transform: translate(0,0)} to {transform: translate(-10rem,-10rem)}",
		dGetout: "from {transform: translate(0,0)} to {transform: translate(10rem,-10rem)}",
		aFly: "20% {transform: translate(10.75rem,8.5rem)} 40% {transform: translate(11.5rem,10rem)} 60% {transform: translate(10rem,9.25rem)} 80% {transform: translate(11.5rem,9.25rem)} 100% {transform: translate(10rem,10rem)}",
		bFly: "20% {transform: translate(-10.75rem,8.5rem)} 40% {transform: translate(-11.5rem,10rem)} 60% {transform: translate(-10rem,9.25rem)} 80% {transform: translate(-11.5rem,9.25rem)} 100% {transform: translate(-10rem,10rem)}",
		cFly: "20% {transform: translate(-10.75rem,-8.5rem)} 40% {transform: translate(-11.5rem,-10rem)} 60% {transform: translate(-10rem,-9.25rem)} 80% {transform: translate(-11.5rem,-9.25rem)} 100% {transform: translate(-10rem,-10rem)}",
		dFly: "20% {transform: translate(10.75rem,-8.5rem)} 40% {transform: translate(11.5rem,-10rem)} 60% {transform: translate(10rem,-9.25rem)} 80% {transform: translate(11.5rem,-9.25rem)} 100% {transform: translate(10rem,-10rem)}"
	},
	dev: true,
	// mangleSelectors: true
};

const bundler = new Bundler({
	compiler: compilerConfig,
	watchFiles: process.argv[process.argv.length - 1] === "--w",
});

bundler.bundle([
	{
		files: ["./src/index.html"],
		outputFile: "./src/style.css",
	},
	// {
	// 	files: ["./docs/index.html"],
	// 	outputFile: "./docs/style.css"
	// }
]);