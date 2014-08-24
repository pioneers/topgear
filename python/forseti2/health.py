"""LCM type definitions
This file automatically generated by lcm.
DO NOT MODIFY BY HAND!!!!
"""

import cStringIO as StringIO
import struct

import header

class health(object):
    __slots__ = ["header", "uptime"]

    def __init__(self):
        self.header = None
        self.uptime = 0.0

    def encode(self):
        buf = StringIO.StringIO()
        buf.write(health._get_packed_fingerprint())
        self._encode_one(buf)
        return buf.getvalue()

    def _encode_one(self, buf):
        assert self.header._get_packed_fingerprint() == header.header._get_packed_fingerprint()
        self.header._encode_one(buf)
        buf.write(struct.pack(">d", self.uptime))

    def decode(data):
        if hasattr(data, 'read'):
            buf = data
        else:
            buf = StringIO.StringIO(data)
        if buf.read(8) != health._get_packed_fingerprint():
            raise ValueError("Decode error")
        return health._decode_one(buf)
    decode = staticmethod(decode)

    def _decode_one(buf):
        self = health()
        self.header = header.header._decode_one(buf)
        self.uptime = struct.unpack(">d", buf.read(8))[0]
        return self
    _decode_one = staticmethod(_decode_one)

    _hash = None
    def _get_hash_recursive(parents):
        if health in parents: return 0
        newparents = parents + [health]
        tmphash = (0x1a3dfbebd18a044e+ header.header._get_hash_recursive(newparents)) & 0xffffffffffffffff
        tmphash  = (((tmphash<<1)&0xffffffffffffffff)  + (tmphash>>63)) & 0xffffffffffffffff
        return tmphash
    _get_hash_recursive = staticmethod(_get_hash_recursive)
    _packed_fingerprint = None

    def _get_packed_fingerprint():
        if health._packed_fingerprint is None:
            health._packed_fingerprint = struct.pack(">Q", health._get_hash_recursive([]))
        return health._packed_fingerprint
    _get_packed_fingerprint = staticmethod(_get_packed_fingerprint)
