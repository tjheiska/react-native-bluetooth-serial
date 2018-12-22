declare module "react-native-bluetooth-serial" {
    export function list(): Promise<IDevice[]>;
    export function connect(id: string): Promise<void>;
    export function on(type: string, handler: any): void;
}

interface IDevice {
    id: string;
    name: string;
}
