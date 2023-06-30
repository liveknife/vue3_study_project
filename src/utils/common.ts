/*
*
*   防抖类
*
* */
type DebouncedFunction<T extends (...args: any[]) => any> = {
(...args: Parameters<T>): void;
cancel: () => void;
};

export class Debounce<T extends (...args: any[]) => any> {
    private timer: NodeJS.Timeout;

constructor(public func: T, public delay: number) {
    this.timer = null;
}

public debounce: DebouncedFunction<T> = (...args: Parameters<T>) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
        this.func.apply(this, args);
    }, this.delay);
};

public cancel = () => {
    clearTimeout(this.timer);
};
}
/*
*
*   节流类
*
* */
type ThrottledFunction<T extends (...args: any[]) => any> = {
(...args: Parameters<T>): void;
cancel: () => void;
};

export class Throttler<T extends (...args: any[]) => any> {
    private timer: NodeJS.Timeout | null = null;

constructor(public func: T, public delay: number) {}

public throttle: ThrottledFunction<T> = (...args: Parameters<T>) => {
    if (!this.timer) {
        this.func.apply(this, args);
        this.timer = setTimeout(() => {
            this.timer = null;
        }, this.delay);
    }
};

public cancel = () => {
    if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
    }
};
}
