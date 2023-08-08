export class DeepClone {
    static clone<T>(object: T): T {
        return JSON.parse(JSON.stringify(object));
    }
}
