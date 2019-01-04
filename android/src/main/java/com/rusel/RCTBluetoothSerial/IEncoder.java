package com.rusel.RCTBluetoothSerial;

public interface IEncoder {
    String encodeToString(byte[] bytes, int offset, int len);
}