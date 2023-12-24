export class Logger {
    public static log(...args: any) {
        console.log(...args);
    }
    public static logLine(...args: any[]) {
        let line = "";
        for (let i = 0; i < args.length; i++) {
            line += args[i];
            if (i !== args.length - 1) line += "::";
        }
        console.log(line);
    }
}