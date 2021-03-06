/* LCM type definition class file
 * This file was automatically generated by lcm-gen
 * DO NOT MODIFY BY HAND!!!!
 */

package forseti2;
 
import java.io.*;
import java.util.*;
import lcm.lcm.*;
 
public final class score_state implements lcm.lcm.LCMEncodable
{
    public forseti2.header header;
    public byte blue_total;
    public byte gold_total;
    public byte blue_autonomous_points;
    public byte gold_autonomous_points;
    public byte blue_normal_points;
    public byte gold_normal_points;
    public byte blue_permanent_points;
    public byte gold_permanent_points;
    public byte blue_penalty;
    public byte gold_penalty;
    public byte bonus_possession;
    public byte bonus_points;
    public byte bonus_time_remaining;
 
    public score_state()
    {
    }
 
    public static final long LCM_FINGERPRINT;
    public static final long LCM_FINGERPRINT_BASE = 0x4b09fcdd281b73b1L;
 
    public static final byte BLUE = (byte) 1;
    public static final byte GOLD = (byte) 2;
    public static final byte NEUTRAL = (byte) 4;

    static {
        LCM_FINGERPRINT = _hashRecursive(new ArrayList<Class<?>>());
    }
 
    public static long _hashRecursive(ArrayList<Class<?>> classes)
    {
        if (classes.contains(forseti2.score_state.class))
            return 0L;
 
        classes.add(forseti2.score_state.class);
        long hash = LCM_FINGERPRINT_BASE
             + forseti2.header._hashRecursive(classes)
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
 
        outs.writeByte(this.blue_total); 
 
        outs.writeByte(this.gold_total); 
 
        outs.writeByte(this.blue_autonomous_points); 
 
        outs.writeByte(this.gold_autonomous_points); 
 
        outs.writeByte(this.blue_normal_points); 
 
        outs.writeByte(this.gold_normal_points); 
 
        outs.writeByte(this.blue_permanent_points); 
 
        outs.writeByte(this.gold_permanent_points); 
 
        outs.writeByte(this.blue_penalty); 
 
        outs.writeByte(this.gold_penalty); 
 
        outs.writeByte(this.bonus_possession); 
 
        outs.writeByte(this.bonus_points); 
 
        outs.writeByte(this.bonus_time_remaining); 
 
    }
 
    public score_state(byte[] data) throws IOException
    {
        this(new LCMDataInputStream(data));
    }
 
    public score_state(DataInput ins) throws IOException
    {
        if (ins.readLong() != LCM_FINGERPRINT)
            throw new IOException("LCM Decode error: bad fingerprint");
 
        _decodeRecursive(ins);
    }
 
    public static forseti2.score_state _decodeRecursiveFactory(DataInput ins) throws IOException
    {
        forseti2.score_state o = new forseti2.score_state();
        o._decodeRecursive(ins);
        return o;
    }
 
    public void _decodeRecursive(DataInput ins) throws IOException
    {
        this.header = forseti2.header._decodeRecursiveFactory(ins);
 
        this.blue_total = ins.readByte();
 
        this.gold_total = ins.readByte();
 
        this.blue_autonomous_points = ins.readByte();
 
        this.gold_autonomous_points = ins.readByte();
 
        this.blue_normal_points = ins.readByte();
 
        this.gold_normal_points = ins.readByte();
 
        this.blue_permanent_points = ins.readByte();
 
        this.gold_permanent_points = ins.readByte();
 
        this.blue_penalty = ins.readByte();
 
        this.gold_penalty = ins.readByte();
 
        this.bonus_possession = ins.readByte();
 
        this.bonus_points = ins.readByte();
 
        this.bonus_time_remaining = ins.readByte();
 
    }
 
    public forseti2.score_state copy()
    {
        forseti2.score_state outobj = new forseti2.score_state();
        outobj.header = this.header.copy();
 
        outobj.blue_total = this.blue_total;
 
        outobj.gold_total = this.gold_total;
 
        outobj.blue_autonomous_points = this.blue_autonomous_points;
 
        outobj.gold_autonomous_points = this.gold_autonomous_points;
 
        outobj.blue_normal_points = this.blue_normal_points;
 
        outobj.gold_normal_points = this.gold_normal_points;
 
        outobj.blue_permanent_points = this.blue_permanent_points;
 
        outobj.gold_permanent_points = this.gold_permanent_points;
 
        outobj.blue_penalty = this.blue_penalty;
 
        outobj.gold_penalty = this.gold_penalty;
 
        outobj.bonus_possession = this.bonus_possession;
 
        outobj.bonus_points = this.bonus_points;
 
        outobj.bonus_time_remaining = this.bonus_time_remaining;
 
        return outobj;
    }
 
}

