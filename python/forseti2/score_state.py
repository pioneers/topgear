"""LCM type definitions
This file automatically generated by lcm.
DO NOT MODIFY BY HAND!!!!
"""

import cStringIO as StringIO
import struct

import header

class score_state(object):
    __slots__ = ["header", "blue_total", "gold_total", "blue_autonomous_points", "gold_autonomous_points", "blue_normal_points", "gold_normal_points", "blue_permanent_points", "gold_permanent_points", "blue_penalty", "gold_penalty", "bonus_possession", "bonus_points", "bonus_time_remaining"]

    BLUE = 1
    GOLD = 2
    NEUTRAL = 4

    def __init__(self):
        self.header = None
        self.blue_total = 0
        self.gold_total = 0
        self.blue_autonomous_points = 0
        self.gold_autonomous_points = 0
        self.blue_normal_points = 0
        self.gold_normal_points = 0
        self.blue_permanent_points = 0
        self.gold_permanent_points = 0
        self.blue_penalty = 0
        self.gold_penalty = 0
        self.bonus_possession = 0
        self.bonus_points = 0
        self.bonus_time_remaining = 0

    def encode(self):
        buf = StringIO.StringIO()
        buf.write(score_state._get_packed_fingerprint())
        self._encode_one(buf)
        return buf.getvalue()

    def _encode_one(self, buf):
        assert self.header._get_packed_fingerprint() == header.header._get_packed_fingerprint()
        self.header._encode_one(buf)
        buf.write(struct.pack(">bbbbbbbbbbbbb", self.blue_total, self.gold_total, self.blue_autonomous_points, self.gold_autonomous_points, self.blue_normal_points, self.gold_normal_points, self.blue_permanent_points, self.gold_permanent_points, self.blue_penalty, self.gold_penalty, self.bonus_possession, self.bonus_points, self.bonus_time_remaining))

    def decode(data):
        if hasattr(data, 'read'):
            buf = data
        else:
            buf = StringIO.StringIO(data)
        if buf.read(8) != score_state._get_packed_fingerprint():
            raise ValueError("Decode error")
        return score_state._decode_one(buf)
    decode = staticmethod(decode)

    def _decode_one(buf):
        self = score_state()
        self.header = header.header._decode_one(buf)
        self.blue_total, self.gold_total, self.blue_autonomous_points, self.gold_autonomous_points, self.blue_normal_points, self.gold_normal_points, self.blue_permanent_points, self.gold_permanent_points, self.blue_penalty, self.gold_penalty, self.bonus_possession, self.bonus_points, self.bonus_time_remaining = struct.unpack(">bbbbbbbbbbbbb", buf.read(13))
        return self
    _decode_one = staticmethod(_decode_one)

    _hash = None
    def _get_hash_recursive(parents):
        if score_state in parents: return 0
        newparents = parents + [score_state]
        tmphash = (0x4b09fcdd281b73b1+ header.header._get_hash_recursive(newparents)) & 0xffffffffffffffff
        tmphash  = (((tmphash<<1)&0xffffffffffffffff)  + (tmphash>>63)) & 0xffffffffffffffff
        return tmphash
    _get_hash_recursive = staticmethod(_get_hash_recursive)
    _packed_fingerprint = None

    def _get_packed_fingerprint():
        if score_state._packed_fingerprint is None:
            score_state._packed_fingerprint = struct.pack(">Q", score_state._get_hash_recursive([]))
        return score_state._packed_fingerprint
    _get_packed_fingerprint = staticmethod(_get_packed_fingerprint)

