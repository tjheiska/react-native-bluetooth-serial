import { Buffer } from 'buffer';

declare module "react-native-bluetooth-serial" {
    export function list(): Promise<IDevice[]>;
    export function connect(id: string): Promise<number>;
    export function on(type: string, handler: any): void;
    export function withEncoding(encoding: string): void;
    export function write(connectionId: number, data: string | Buffer);
    export function isEnabled(): Promise<boolean>;
    export function enable(): Promise<void>;
    export function writeToDevice(connectionId: number, base64: string);
    export function disconnect(connectionId: number): Promise<boolean>;
    export function reconnect(connectionId: number): Promise<number>;
}

interface IDevice {
    id: string;
    name: string;
}
