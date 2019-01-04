package com.rusel.RCTBluetoothSerial;

public class DefaultEncoder implements IEncoder {

    public String encodeToString(byte[] bytes, int offset, int len) {
        return new String(bytes, offset, len);
    }
}