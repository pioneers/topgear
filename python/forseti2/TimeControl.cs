/* LCM type definition class file
 * This file was automatically generated by lcm-gen
 * DO NOT MODIFY BY HAND!!!!
 */

using System;
using System.Collections.Generic;
using System.IO;
using LCM.LCM;
 
namespace forseti2
{
    public sealed class TimeControl : LCM.LCM.LCMEncodable
    {
        public String command_name;
 
        public TimeControl()
        {
        }
 
        public static readonly ulong LCM_FINGERPRINT;
        public static readonly ulong LCM_FINGERPRINT_BASE = 0x8f3d1d62d3eef7efL;
 
        static TimeControl()
        {
            LCM_FINGERPRINT = _hashRecursive(new List<String>());
        }
 
        public static ulong _hashRecursive(List<String> classes)
        {
            if (classes.Contains("forseti2.TimeControl"))
                return 0L;
 
            classes.Add("forseti2.TimeControl");
            ulong hash = LCM_FINGERPRINT_BASE
                ;
            classes.RemoveAt(classes.Count - 1);
            return (hash<<1) + ((hash>>63)&1);
        }
 
        public void Encode(LCMDataOutputStream outs)
        {
            outs.Write((long) LCM_FINGERPRINT);
            _encodeRecursive(outs);
        }
 
        public void _encodeRecursive(LCMDataOutputStream outs)
        {
            byte[] __strbuf = null;
            __strbuf = System.Text.Encoding.GetEncoding("US-ASCII").GetBytes(this.command_name); outs.Write(__strbuf.Length+1); outs.Write(__strbuf, 0, __strbuf.Length); outs.Write((byte) 0); 
 
        }
 
        public TimeControl(byte[] data) : this(new LCMDataInputStream(data))
        {
        }
 
        public TimeControl(LCMDataInputStream ins)
        {
            if ((ulong) ins.ReadInt64() != LCM_FINGERPRINT)
                throw new System.IO.IOException("LCM Decode error: bad fingerprint");
 
            _decodeRecursive(ins);
        }
 
        public static forseti2.TimeControl _decodeRecursiveFactory(LCMDataInputStream ins)
        {
            forseti2.TimeControl o = new forseti2.TimeControl();
            o._decodeRecursive(ins);
            return o;
        }
 
        public void _decodeRecursive(LCMDataInputStream ins)
        {
            byte[] __strbuf = null;
            __strbuf = new byte[ins.ReadInt32()-1]; ins.ReadFully(__strbuf); ins.ReadByte(); this.command_name = System.Text.Encoding.GetEncoding("US-ASCII").GetString(__strbuf);
 
        }
 
        public forseti2.TimeControl Copy()
        {
            forseti2.TimeControl outobj = new forseti2.TimeControl();
            outobj.command_name = this.command_name;
 
            return outobj;
        }
    }
}

