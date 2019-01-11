import { Buffer } from 'buffer';

declare module "react-native-bluetooth-serial" {
    export function list(): Promise<IDevice[]>;
    export function connect(id: string): Promise<void>;
    export function on(type: string, handler: any): void;
    export function withEncoding(encoding: string): void;
    export function write(data: string | Buffer);
    export function isEnabled(): Promise<boolean>;
    export function enable(): Promise<void>;
    export function writeToDevice(base64: string);
}

interface IDevice {
    id: string;
    name: string;
}
