
export interface Car {
    readonly vin: string;
    make: string;
    model: string;
    year?: number;

    carDetails (): void;
}