import { Logger } from "../logger";
import { nanoid } from 'nanoid';

export class ElapsedTime {
    private _id = nanoid(4);
    private _end: number | null = null;
    private _diff: number | null = null;

    public readonly start: number = performance.now();

    constructor(private identifier: string, private payload?: any) {}

    public finish(): number {
        this._end = performance.now();
        this._diff = Math.round((this._end - this.start) * 1000) / 1000;
        Logger.logLine("elapsed_time", this._id, this.identifier, this._diff);
        return this._diff || 0;
    }

    // Getter for end (read-only)
    public get end(): number | null {
        return this._end;
    }

    // Getter for diff (read-only)
    public get diff(): number | null {
        return this._diff;
    }
}
