package com.rusel.RCTBluetoothSerial;

import java.util.Arrays;
import android.util.Base64;

public class Base64Encoder implements IEncoder {

    public String encodeToString(byte[] bytes, int offset, int len) {
        byte[] copy = Arrays.copyOfRange(bytes, offset, len);
        return Base64.encodeToString(copy, Base64.NO_WRAP);
    }
}