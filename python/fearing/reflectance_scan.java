/* LCM type definition class file
 * This file was automatically generated by lcm-gen
 * DO NOT MODIFY BY HAND!!!!
 */

package fearing;
 
import java.io.*;
import java.util.*;
import lcm.lcm.*;
 
public final class reflectance_scan implements lcm.lcm.LCMEncodable
{
    public fearing.header header;
    public float reflectaces[];
 
    public reflectance_scan()
    {
        reflectaces = new float[6];
    }
 
    public static final long LCM_FINGERPRINT;
    public static final long LCM_FINGERPRINT_BASE = 0x4ac701477572134aL;
 
    static {
        LCM_FINGERPRINT = _hashRecursive(new ArrayList<Class<?>>());
    }
 
    public static long _hashRecursive(ArrayList<Class<?>> classes)
    {
        if (classes.contains(fearing.reflectance_scan.class))
            return 0L;
 
        classes.add(fearing.reflectance_scan.class);
        long hash = LCM_FINGERPRINT_BASE
             + fearing.header._hashRecursive(classes)
            ;
        classes.remove(classes.size() - 1);
        return (hash<<1) + ((hash>>63)&1);
    }
 
    public void encode(DataOutput outs) throws IOException
    {
        outs.writeLong(LCM_FINGERPRINT);
        _encodeRecursive(outs);
    }
 
    public void _encodeRecursive(DataOutput outs) throws IOException
    {
        this.header._encodeRecursive(outs); 
 
        for (int a = 0; a < 6; a++) {
            outs.writeFloat(this.reflectaces[a]); 
        }
 
    }
 
    public reflectance_scan(byte[] data) throws IOException
    {
        this(new LCMDataInputStream(data));
    }
 
    public reflectance_scan(DataInput ins) throws IOException
    {
        if (ins.readLong() != LCM_FINGERPRINT)
            throw new IOException("LCM Decode error: bad fingerprint");
 
        _decodeRecursive(ins);
    }
 
    public static fearing.reflectance_scan _decodeRecursiveFactory(DataInput ins) throws IOException
    {
        fearing.reflectance_scan o = new fearing.reflectance_scan();
        o._decodeRecursive(ins);
        return o;
    }
 
    public void _decodeRecursive(DataInput ins) throws IOException
    {
        this.header = fearing.header._decodeRecursiveFactory(ins);
 
        this.reflectaces = new float[(int) 6];
        for (int a = 0; a < 6; a++) {
            this.reflectaces[a] = ins.readFloat();
        }
 
    }
 
    public fearing.reflectance_scan copy()
    {
        fearing.reflectance_scan outobj = new fearing.reflectance_scan();
        outobj.header = this.header.copy();
 
        outobj.reflectaces = new float[(int) 6];
        System.arraycopy(this.reflectaces, 0, outobj.reflectaces, 0, 6); 
        return outobj;
    }
 
}

