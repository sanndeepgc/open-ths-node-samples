export abstract class BaseRepository<T> {

    public logAction(action: string): void {
        console.log(action);
    }

    public abstract findById(id: string): Promise<T>;
}