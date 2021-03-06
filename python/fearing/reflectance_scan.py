"""LCM type definitions
This file automatically generated by lcm.
DO NOT MODIFY BY HAND!!!!
"""

import cStringIO as StringIO
import struct

import header

class reflectance_scan(object):
    __slots__ = ["header", "reflectaces"]

    def __init__(self):
        self.header = None
        self.reflectaces = [ 0.0 for dim0 in range(6) ]

    def encode(self):
        buf = StringIO.StringIO()
        buf.write(reflectance_scan._get_packed_fingerprint())
        self._encode_one(buf)
        return buf.getvalue()

    def _encode_one(self, buf):
        assert self.header._get_packed_fingerprint() == header.header._get_packed_fingerprint()
        self.header._encode_one(buf)
        buf.write(struct.pack('>6f', *self.reflectaces[:6]))

    def decode(data):
        if hasattr(data, 'read'):
            buf = data
        else:
            buf = StringIO.StringIO(data)
        if buf.read(8) != reflectance_scan._get_packed_fingerprint():
            raise ValueError("Decode error")
        return reflectance_scan._decode_one(buf)
    decode = staticmethod(decode)

    def _decode_one(buf):
        self = reflectance_scan()
        self.header = header.header._decode_one(buf)
        self.reflectaces = struct.unpack('>6f', buf.read(24))
        return self
    _decode_one = staticmethod(_decode_one)

    _hash = None
    def _get_hash_recursive(parents):
        if reflectance_scan in parents: return 0
        newparents = parents + [reflectance_scan]
        tmphash = (0x4ac701477572134a+ header.header._get_hash_recursive(newparents)) & 0xffffffffffffffff
        tmphash  = (((tmphash<<1)&0xffffffffffffffff)  + (tmphash>>63)) & 0xffffffffffffffff
        return tmphash
    _get_hash_recursive = staticmethod(_get_hash_recursive)
    _packed_fingerprint = None

    def _get_packed_fingerprint():
        if reflectance_scan._packed_fingerprint is None:
            reflectance_scan._packed_fingerprint = struct.pack(">Q", reflectance_scan._get_hash_recursive([]))
        return reflectance_scan._packed_fingerprint
    _get_packed_fingerprint = staticmethod(_get_packed_fingerprint)

