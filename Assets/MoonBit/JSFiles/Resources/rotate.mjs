const $1000000000000000000L = { hi: 232830643, lo: -1486618624 };
const $0L = { hi: 0, lo: 0 };
const $1L = { hi: 0, lo: 1 };
const $10L = { hi: 0, lo: 10 };
const $100L = { hi: 0, lo: 100 };
const $1000L = { hi: 0, lo: 1000 };
const $10000L = { hi: 0, lo: 10000 };
const $100000L = { hi: 0, lo: 100000 };
const $1000000L = { hi: 0, lo: 1000000 };
const $10000000L = { hi: 0, lo: 10000000 };
const $100000000L = { hi: 0, lo: 100000000 };
const $1000000000L = { hi: 0, lo: 1000000000 };
const $10000000000L = { hi: 2, lo: 1410065408 };
const $100000000000L = { hi: 23, lo: 1215752192 };
const $1000000000000L = { hi: 232, lo: -727379968 };
const $10000000000000L = { hi: 2328, lo: 1316134912 };
const $100000000000000L = { hi: 23283, lo: 276447232 };
const $1000000000000000L = { hi: 232830, lo: -1530494976 };
const $22L = { hi: 0, lo: 22 };
const $37L = { hi: 0, lo: 37 };
const $_22L = { hi: -1, lo: -22 };
const $_1L = { hi: -1, lo: -1 };
const $_4503599627370496L = { hi: -1048576, lo: 0 };
const $9221120237041090561L = { hi: 2146959360, lo: 1 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
const $2L = { hi: 0, lo: 2 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {   if (f._exports) return f._exports;   return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports; };
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = b;
  }
  return arr;
}
const moonbitlang$core$builtin$$MyInt64$convert_to_double_u = (a) => (a.hi >>> 0) * 4294967296.0 + (a.lo >>> 0);
const moonbitlang$core$builtin$$MyInt64$reinterpret_as_double = function f(a) {   let view = f._view;   if (view === undefined) {     view = f._view = new DataView(new ArrayBuffer(8));   }   view.setUint32(0, a.hi);   view.setUint32(4, a.lo);   return view.getFloat64(0); };
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$MyInt64$compare = (a, b) => {   const ahi = a.hi;   const bhi = b.hi;   if (ahi < bhi) {     return -1;   }   if (ahi > bhi) {     return 1;   }   const alo = a.lo >>> 0;   const blo = b.lo >>> 0;   if (alo < blo) {     return -1;   }   if (alo > blo) {     return 1;   }   return 0; };
const moonbitlang$core$builtin$$MyInt64$compare_u = (a, b) => {   const ahi = a.hi >>> 0;   const bhi = b.hi >>> 0;   if (ahi < bhi) {     return -1;   }   if (ahi > bhi) {     return 1;   }   const alo = a.lo >>> 0;   const blo = b.lo >>> 0;   if (alo < blo) {     return -1;   }   if (alo > blo) {     return 1;   }   return 0; };
function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 4;
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar.prototype.$tag = 3;
const Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof = { $tag: 2 };
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber.prototype.$tag = 1;
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidIdentEscape(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidIdentEscape.prototype.$tag = 0;
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
const $64$moonbitlang$47$core$47$json$46$Token$Null = { $tag: 0 };
const $64$moonbitlang$47$core$47$json$46$Token$True = { $tag: 1 };
const $64$moonbitlang$47$core$47$json$46$Token$False = { $tag: 2 };
function $64$moonbitlang$47$core$47$json$46$Token$Number(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$Token$Number.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$json$46$Token$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$Token$String.prototype.$tag = 4;
const $64$moonbitlang$47$core$47$json$46$Token$LBrace = { $tag: 5 };
const $64$moonbitlang$47$core$47$json$46$Token$RBrace = { $tag: 6 };
const $64$moonbitlang$47$core$47$json$46$Token$LBracket = { $tag: 7 };
const $64$moonbitlang$47$core$47$json$46$Token$RBracket = { $tag: 8 };
const $64$moonbitlang$47$core$47$json$46$Token$Comma = { $tag: 9 };
const $64$moonbitlang$47$core$47$builtin$46$Json$Null = { $tag: 0 };
const $64$moonbitlang$47$core$47$builtin$46$Json$True = { $tag: 1 };
const $64$moonbitlang$47$core$47$builtin$46$Json$False = { $tag: 2 };
function $64$moonbitlang$47$core$47$builtin$46$Json$Number(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Number.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$Json$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$String.prototype.$tag = 4;
function $64$moonbitlang$47$core$47$builtin$46$Json$Array(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Array.prototype.$tag = 5;
function $64$moonbitlang$47$core$47$builtin$46$Json$Object(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Object.prototype.$tag = 6;
const Option$None$6$ = { $tag: 0 };
function Option$Some$6$(param0) {
  this._0 = param0;
}
Option$Some$6$.prototype.$tag = 1;
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
function Result$Err$8$(param0) {
  this._0 = param0;
}
Result$Err$8$.prototype.$tag = 0;
function Result$Ok$8$(param0) {
  this._0 = param0;
}
Result$Ok$8$.prototype.$tag = 1;
function Result$Err$9$(param0) {
  this._0 = param0;
}
Result$Err$9$.prototype.$tag = 0;
function Result$Ok$9$(param0) {
  this._0 = param0;
}
Result$Ok$9$.prototype.$tag = 1;
function Result$Err$10$(param0) {
  this._0 = param0;
}
Result$Err$10$.prototype.$tag = 0;
function Result$Ok$10$(param0) {
  this._0 = param0;
}
Result$Ok$10$.prototype.$tag = 1;
const $65536L = { hi: 0, lo: 65536 };
function Result$Err$11$(param0) {
  this._0 = param0;
}
Result$Err$11$.prototype.$tag = 0;
function Result$Ok$11$(param0) {
  this._0 = param0;
}
Result$Ok$11$.prototype.$tag = 1;
const Option$None$12$ = { $tag: 0 };
function Option$Some$12$(param0) {
  this._0 = param0;
}
Option$Some$12$.prototype.$tag = 1;
const username$hello$bind$$MoonBehaviour$set_start = (self, f) => self.JsStart = f;
const username$hello$bind$$MoonBehaviour$set_update = (self, f) => self.JsUpdate = f;
const username$hello$bind$$MoonBehaviour$set_ondestroy = (self, f) => self.JsOnDestroy = f;
const username$hello$bind$$MoonBehaviour$get_serialized_json = (self) => {   let dict = {};   const propsComponent = self.GetComponent(puerts.$typeof(CS.MoonBit.MoonProperties));   for (let i = 0; i < propsComponent.Pairs.Length; i++) {     const p = propsComponent.Pairs.get_Item(i);     dict[p.key] = p.value;   }    return JSON.stringify(dict); };
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
const moonbitlang$core$strconv$$min_19digit_int = $1000000000000000000L;
const moonbitlang$core$strconv$$parse_scientific$46$exp_num$124$320 = $0L;
const moonbitlang$core$strconv$$parse_number$46$exp_number$124$301 = $0L;
const moonbitlang$core$strconv$$double_info = { mantissa_bits: 52, exponent_bits: 11, bias: -1023 };
const moonbitlang$core$strconv$$powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const moonbitlang$core$strconv$$left_shift_cheats = [{ _0: 0, _1: "" }, { _0: 1, _1: "5" }, { _0: 1, _1: "25" }, { _0: 1, _1: "125" }, { _0: 2, _1: "625" }, { _0: 2, _1: "3125" }, { _0: 2, _1: "15625" }, { _0: 3, _1: "78125" }, { _0: 3, _1: "390625" }, { _0: 3, _1: "1953125" }, { _0: 4, _1: "9765625" }, { _0: 4, _1: "48828125" }, { _0: 4, _1: "244140625" }, { _0: 4, _1: "1220703125" }, { _0: 5, _1: "6103515625" }, { _0: 5, _1: "30517578125" }, { _0: 5, _1: "152587890625" }, { _0: 6, _1: "762939453125" }, { _0: 6, _1: "3814697265625" }, { _0: 6, _1: "19073486328125" }, { _0: 7, _1: "95367431640625" }, { _0: 7, _1: "476837158203125" }, { _0: 7, _1: "2384185791015625" }, { _0: 7, _1: "11920928955078125" }, { _0: 8, _1: "59604644775390625" }, { _0: 8, _1: "298023223876953125" }, { _0: 8, _1: "1490116119384765625" }, { _0: 9, _1: "7450580596923828125" }, { _0: 9, _1: "37252902984619140625" }, { _0: 9, _1: "186264514923095703125" }, { _0: 10, _1: "931322574615478515625" }, { _0: 10, _1: "4656612873077392578125" }, { _0: 10, _1: "23283064365386962890625" }, { _0: 10, _1: "116415321826934814453125" }, { _0: 11, _1: "582076609134674072265625" }, { _0: 11, _1: "2910383045673370361328125" }, { _0: 11, _1: "14551915228366851806640625" }, { _0: 12, _1: "72759576141834259033203125" }, { _0: 12, _1: "363797880709171295166015625" }, { _0: 12, _1: "1818989403545856475830078125" }, { _0: 13, _1: "9094947017729282379150390625" }, { _0: 13, _1: "45474735088646411895751953125" }, { _0: 13, _1: "227373675443232059478759765625" }, { _0: 13, _1: "1136868377216160297393798828125" }, { _0: 14, _1: "5684341886080801486968994140625" }, { _0: 14, _1: "28421709430404007434844970703125" }, { _0: 14, _1: "142108547152020037174224853515625" }, { _0: 15, _1: "710542735760100185871124267578125" }, { _0: 15, _1: "3552713678800500929355621337890625" }, { _0: 15, _1: "17763568394002504646778106689453125" }, { _0: 16, _1: "88817841970012523233890533447265625" }, { _0: 16, _1: "444089209850062616169452667236328125" }, { _0: 16, _1: "2220446049250313080847263336181640625" }, { _0: 16, _1: "11102230246251565404236316680908203125" }, { _0: 17, _1: "55511151231257827021181583404541015625" }, { _0: 17, _1: "277555756156289135105907917022705078125" }, { _0: 17, _1: "1387778780781445675529539585113525390625" }, { _0: 18, _1: "6938893903907228377647697925567626953125" }, { _0: 18, _1: "34694469519536141888238489627838134765625" }, { _0: 18, _1: "173472347597680709441192448139190673828125" }, { _0: 19, _1: "867361737988403547205962240695953369140625" }];
const moonbitlang$core$strconv$$int_pow10 = [$1L, $10L, $100L, $1000L, $10000L, $100000L, $1000000L, $10000000L, $100000000L, $1000000000L, $10000000000L, $100000000000L, $1000000000000L, $10000000000000L, $100000000000000L, $1000000000000000L];
const moonbitlang$core$strconv$$max_exponent_fast_path = $22L;
const moonbitlang$core$strconv$$table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const moonbitlang$core$strconv$$max_exponent_disguised_fast_path = $37L;
const moonbitlang$core$strconv$$min_exponent_fast_path = $_22L;
const moonbitlang$core$uint64$$max_value = $_1L;
const moonbitlang$core$json$$non_ascii_whitespace = moonbitlang$core$json$$CharClass$of([{ _0: 160, _1: 160 }, { _0: 5760, _1: 5760 }, { _0: 8192, _1: 8202 }, { _0: 8232, _1: 8233 }, { _0: 8239, _1: 8239 }, { _0: 8287, _1: 8287 }, { _0: 12288, _1: 12288 }, { _0: 65279, _1: 65279 }]);
const moonbitlang$core$double$$neg_infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($_4503599627370496L);
const moonbitlang$core$double$$not_a_number = moonbitlang$core$int64$$Int64$reinterpret_as_double($9221120237041090561L);
const moonbitlang$core$double$$infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405312L);
const moonbitlang$core$strconv$$max_mantissa_fast_path = moonbitlang$core$builtin$$Shl$op_shl$0$($2L, 52);
function moonbitlang$core$builtin$$abort$1$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$2$(msg) {
  $panic();
}
function moonbitlang$core$builtin$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$5$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$op_ge$0$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$0$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$op_le$0$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$0$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_le$6$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$6$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_lt$0$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$0$(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_lt$6$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$6$(self_, other) < 0;
}
function moonbitlang$core$builtin$$StringBuilder$new(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$StringBuilder$to_string(self) {
  return self.val;
}
function moonbitlang$core$builtin$$Logger$write_char$7$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_gt$6$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$6$(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_gt$0$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$0$(self_, other) > 0;
}
function moonbitlang$core$builtin$$is_leading_surrogate(c) {
  return 55296 <= c && c <= 56319;
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$unsafe_char_at(self, index) {
  const c1 = self.charCodeAt(index);
  if (moonbitlang$core$builtin$$is_leading_surrogate(c1)) {
    const _tmp = index + 1 | 0;
    const c2 = self.charCodeAt(_tmp);
    return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
  } else {
    return c1;
  }
}
function moonbitlang$core$array$$Array$op_get$8$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$9$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$4$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$0$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$10$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$7$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$11$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$11$(value, self);
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hasher$new(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function moonbitlang$core$builtin$$Hasher$new$46$seed$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$Hash$hash$12$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(moonbitlang$core$builtin$$Hasher$new$46$seed$46$default());
  moonbitlang$core$builtin$$Hasher$combine$11$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$builtin$$MyInt64$to_int(self) {
  return self.lo;
}
function moonbitlang$core$int64$$Int64$to_int(self) {
  return moonbitlang$core$builtin$$MyInt64$to_int(self);
}
function moonbitlang$core$builtin$$Div$op_div$13$(self, other) {
  const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const _func = exports.div_s;
  const lo = _func(_alo, _ahi, _blo, _bhi);
  const _func$2 = exports.get_high;
  const hi = _func$2();
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Div$op_div$6$(self, other) {
  return moonbitlang$core$builtin$$Div$op_div$13$(self, other);
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Sub$op_sub$13$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Sub$op_sub$6$(self, other) {
  return moonbitlang$core$builtin$$Sub$op_sub$13$(self, other);
}
function moonbitlang$core$builtin$$output$46$abs$124$1955(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$builtin$$output$46$write_digits$124$1957(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$write_digits$124$1957(_env, num2);
  }
  const _tmp = moonbitlang$core$builtin$$output$46$abs$124$1955(num % radix | 0);
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: logger, _1: radix };
  moonbitlang$core$builtin$$output$46$write_digits$124$1957(_env, moonbitlang$core$builtin$$output$46$abs$124$1955(self));
}
function moonbitlang$core$int$$Int$output_size_hint(radix) {
  return 2 <= radix && radix < 7 ? 36 : 8 <= radix && radix < 15 ? 18 : 16 <= radix && radix <= 36 ? 10 : moonbitlang$core$builtin$$abort$4$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$int$$Int$output_size_hint(radix));
  moonbitlang$core$int$$Int$output(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$7$, method_1: moonbitlang$core$builtin$$Logger$write_substring$7$, method_2: moonbitlang$core$builtin$$Logger$write_char$7$ }, radix);
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return moonbitlang$core$int$$Int$to_string(self, 10);
}
function moonbitlang$core$uint64$$UInt64$to_int(self) {
  return moonbitlang$core$builtin$$MyInt64$to_int(self);
}
function moonbitlang$core$builtin$$MyInt64$div_u(self, other) {
  const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const _func = exports.div_u;
  const lo = _func(_alo, _ahi, _blo, _bhi);
  const _func$2 = exports.get_high;
  const hi = _func$2();
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Div$op_div$0$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$div_u(self, other);
}
function moonbitlang$core$builtin$$Default$default$14$() {
  return 0;
}
function moonbitlang$core$string$$String$substring(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$7$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Show$to_string$11$(self) {
  return self;
}
function moonbitlang$core$builtin$$calc_grow_threshold(capacity) {
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function moonbitlang$core$builtin$$power_2_above(x, n) {
  let _tmp = x;
  while (true) {
    const i = _tmp;
    if (i >= n) {
      return i;
    }
    const next = i << 1;
    if (next < 0) {
      return i;
    }
    _tmp = next;
    continue;
  }
}
function moonbitlang$core$builtin$$Map$new$15$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined });
  const _bind$5 = undefined;
  const _bind$6 = undefined;
  return { entries: _bind$3, list: _bind$4, size: 0, capacity: capacity$2, capacity_mask: _bind, growAt: _bind$2, head: _bind$5, tail: _bind$6 };
}
function moonbitlang$core$builtin$$Map$new$46$capacity$46$default$15$() {
  return 8;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$15$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _tail = _Some;
    const _tmp = self.list;
    const _tmp$2 = _tail.idx;
    $bound_check(_tmp, _tmp$2);
    _tmp[_tmp$2].next = entry;
    const _tmp$3 = self.list;
    const _tmp$4 = entry.idx;
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4].prev = _tail;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set$15$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$15$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$12$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, _param$2);
    const _bind = _tmp$5[_param$2];
    if (_bind === undefined) {
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, _param$2);
      _tmp$6[_param$2] = _param$3;
      const _tmp$7 = self.list;
      $bound_check(_tmp$7, _param$2);
      _tmp$7[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$15$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      const _tmp$6 = self.list;
      const _tmp$7 = _curr_entry.idx;
      $bound_check(_tmp$6, _tmp$7);
      const curr_node = _tmp$6[_tmp$7];
      if (_curr_entry.hash === _param$3.hash && _curr_entry.key === _param$3.key) {
        _curr_entry.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _curr_entry.psl) {
        const _tmp$8 = self.entries;
        $bound_check(_tmp$8, _param$2);
        _tmp$8[_param$2] = _param$3;
        const _tmp$9 = self.list;
        $bound_check(_tmp$9, _param$2);
        _tmp$9[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _curr_entry.psl = _curr_entry.psl + 1 | 0;
        const _tmp$10 = _param + 1 | 0;
        const _tmp$11 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$10;
        _tmp$2 = _tmp$11;
        _tmp$3 = _curr_entry;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$8 = _param + 1 | 0;
        const _tmp$9 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$8;
        _tmp$2 = _tmp$9;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$15$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _idx = _x.idx;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$15$(self, _key, _value);
      $bound_check(old_list, _idx);
      _tmp = old_list[_idx].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$op_set$15$(self, key, value) {
  moonbitlang$core$builtin$$Map$set$15$(self, key, value);
}
function moonbitlang$core$builtin$$Map$get$15$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$12$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$op_get$15$(self, key) {
  return moonbitlang$core$builtin$$Map$get$15$(self, key);
}
function moonbitlang$core$builtin$$MyInt64$extend_i32_u(value) {
  return { hi: 0, lo: value };
}
function moonbitlang$core$uint64$$UInt64$extend_uint(value) {
  return moonbitlang$core$builtin$$MyInt64$extend_i32_u(value);
}
function moonbitlang$core$double$$Double$convert_uint64(value) {
  return moonbitlang$core$builtin$$MyInt64$convert_to_double_u(value);
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$builtin$$Add$op_add$13$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Add$op_add$0$(self, other) {
  return moonbitlang$core$builtin$$Add$op_add$13$(self, other);
}
function moonbitlang$core$builtin$$Add$op_add$6$(self, other) {
  return moonbitlang$core$builtin$$Add$op_add$13$(self, other);
}
function moonbitlang$core$array$$Array$push$5$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$uint64$$UInt64$to_byte(self) {
  return moonbitlang$core$uint64$$UInt64$to_int(self) & 255;
}
function moonbitlang$core$byte$$Byte$to_int64(self) {
  return moonbitlang$core$int$$Int$to_int64(self);
}
function moonbitlang$core$builtin$$Neg$op_neg$13$(self) {
  return self.lo === 0 ? { hi: ~self.hi + 1 | 0, lo: 0 } : { hi: ~self.hi, lo: ~self.lo + 1 | 0 };
}
function moonbitlang$core$builtin$$Mul$op_mul$13$(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$MyInt64$land(self, other) {
  return { hi: self.hi & other.hi, lo: self.lo & other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lor(self, other) {
  return { hi: self.hi | other.hi, lo: self.lo | other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lsl(self, shift) {
  const shift$2 = shift & 63;
  if (shift$2 === 0) {
    return self;
  } else {
    if (shift$2 < 32) {
      const _hi = self.hi;
      const _lo = self.lo;
      const hi = _hi;
      const lo = _lo;
      const hi$2 = hi << shift$2 | (lo >>> (32 - shift$2 | 0) | 0);
      const lo$2 = lo << shift$2;
      return { hi: hi$2, lo: lo$2 };
    } else {
      return { hi: self.lo << (shift$2 - 32 | 0), lo: 0 };
    }
  }
}
function moonbitlang$core$builtin$$MyInt64$lsr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >>> shift$2 | 0, lo: self.lo >>> shift$2 | self.hi << (32 - shift$2 | 0) } : { hi: 0, lo: self.hi >>> (shift$2 - 32 | 0) | 0 };
}
function moonbitlang$core$builtin$$Eq$op_equal$13$(self, other) {
  return self.hi === other.hi && self.lo === other.lo;
}
function moonbitlang$core$builtin$$Neg$op_neg$6$(self) {
  return moonbitlang$core$builtin$$Neg$op_neg$13$(self);
}
function moonbitlang$core$builtin$$Mul$op_mul$6$(self, other) {
  return moonbitlang$core$builtin$$Mul$op_mul$13$(self, other);
}
function moonbitlang$core$builtin$$BitAnd$land$6$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$6$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$builtin$$Shl$op_shl$6$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, other);
}
function moonbitlang$core$builtin$$Eq$op_equal$6$(self, other) {
  return moonbitlang$core$builtin$$Eq$op_equal$13$(self, other);
}
function moonbitlang$core$builtin$$Compare$compare$6$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
}
function moonbitlang$core$builtin$$Sub$op_sub$0$(self, other) {
  return moonbitlang$core$builtin$$Sub$op_sub$13$(self, other);
}
function moonbitlang$core$builtin$$Mul$op_mul$0$(self, other) {
  return moonbitlang$core$builtin$$Mul$op_mul$13$(self, other);
}
function moonbitlang$core$builtin$$Compare$compare$0$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$op_equal$0$(self, other) {
  return moonbitlang$core$builtin$$Eq$op_equal$13$(self, other);
}
function moonbitlang$core$builtin$$BitAnd$land$0$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$Shl$op_shl$0$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$op_shr$0$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
}
function moonbitlang$core$builtin$$rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  self.acc = Math.imul(moonbitlang$core$builtin$$rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end858 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end858) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$11$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$builtin$$println$11$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$11$(input));
}
function moonbitlang$core$builtin$$Eq$op_equal$14$(self, that) {
  return self === that;
}
function moonbitlang$core$json$$offset_to_position(input, offset) {
  let line = 1;
  let column = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < offset) {
      if (input.charCodeAt(i) === 10) {
        line = line + 1 | 0;
        column = 0;
      } else {
        column = column + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { line: line, column: column };
}
function moonbitlang$core$json$$ParseContext$invalid_char$16$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  const _tmp = ctx.input;
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(moonbitlang$core$json$$offset_to_position(ctx.input, offset), _tmp.charCodeAt(offset)));
}
function moonbitlang$core$json$$ParseContext$invalid_char$9$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  const _tmp = ctx.input;
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(moonbitlang$core$json$$offset_to_position(ctx.input, offset), _tmp.charCodeAt(offset)));
}
function moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  const _tmp = ctx.input;
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(moonbitlang$core$json$$offset_to_position(ctx.input, offset), _tmp.charCodeAt(offset)));
}
function moonbitlang$core$json$$ParseContext$invalid_char$5$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  const _tmp = ctx.input;
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(moonbitlang$core$json$$offset_to_position(ctx.input, offset), _tmp.charCodeAt(offset)));
}
function moonbitlang$core$json$$ParseContext$invalid_char$46$shift$46$default$9$() {
  return 0;
}
function moonbitlang$core$json$$ParseContext$invalid_char$46$shift$46$default$2$() {
  return 0;
}
function moonbitlang$core$json$$ParseContext$invalid_char$46$shift$46$default$5$() {
  return 0;
}
function moonbitlang$core$json$$CharClass$of(array) {
  return array;
}
function moonbitlang$core$json$$CharClass$contains(self, c) {
  let _tmp = 0;
  let _tmp$2 = self.length;
  while (true) {
    const left = _tmp;
    const right = _tmp$2;
    if (left < right) {
      const middle = (left + right | 0) / 2 | 0;
      const _bind = moonbitlang$core$array$$Array$op_get$10$(self, middle);
      const _min = _bind._0;
      const _max = _bind._1;
      if (c < _min) {
        _tmp$2 = middle;
        continue;
      } else {
        if (c > _max) {
          _tmp = middle + 1 | 0;
          continue;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  }
}
function moonbitlang$core$json$$ParseContext$read_char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _tmp = ctx.input;
    const _tmp$2 = ctx.offset;
    const c1 = _tmp.charCodeAt(_tmp$2);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _tmp$3 = ctx.input;
        const _tmp$4 = ctx.offset;
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx) {
  _L: while (true) {
    _L$2: {
      _L$3: {
        const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 9: {
              break _L$3;
            }
            case 32: {
              break _L$3;
            }
            case 10: {
              break _L$3;
            }
            case 13: {
              break _L$3;
            }
            default: {
              if (_x > 127 && moonbitlang$core$json$$CharClass$contains(moonbitlang$core$json$$non_ascii_whitespace, _x)) {
                break _L$2;
              }
              ctx.offset = ctx.offset - 1 | 0;
              break _L;
            }
          }
        }
      }
      break _L$2;
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$make(input) {
  return { offset: 0, input: input, end_offset: input.length };
}
function moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _tmp = ctx.input;
    const _tmp$2 = ctx.offset;
    const c1 = _tmp.charCodeAt(_tmp$2);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1) : new Result$Ok$2$(undefined);
  } else {
    return new Result$Err$2$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  }
}
function moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, end) {
  const s = moonbitlang$core$string$$String$substring(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind = moonbitlang$core$strconv$$parse_double(s);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      const _tmp$2 = _err._0;
      _try_err = _tmp$2;
      break _L;
    }
    return new Result$Ok$1$(_tmp);
  }
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber(moonbitlang$core$json$$offset_to_position(ctx.input, start), s));
}
function moonbitlang$core$json$$ParseContext$lex_decimal_exponent_integer(ctx, start) {
  while (true) {
    _L: {
      const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
      if (_bind === -1) {
        const _bind$2 = moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        return new Result$Ok$1$(_tmp);
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 48 && _c <= 57) {
          break _L;
        }
        ctx.offset = ctx.offset - 1 | 0;
        const _bind$2 = moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        return new Result$Ok$1$(_tmp);
      }
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_exponent_sign(ctx, start) {
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$1$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    if (_c >= 48 && _c <= 57) {
      const _bind$2 = moonbitlang$core$json$$ParseContext$lex_decimal_exponent_integer(ctx, start);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$1$(_tmp);
    }
    ctx.offset = ctx.offset - 1 | 0;
    return moonbitlang$core$json$$ParseContext$invalid_char$9$(ctx, moonbitlang$core$json$$ParseContext$invalid_char$46$shift$46$default$9$());
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_exponent(ctx, start) {
  _L: {
    const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
    if (_bind === -1) {
      return new Result$Err$1$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 43: {
          break _L;
        }
        case 45: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            const _bind$2 = moonbitlang$core$json$$ParseContext$lex_decimal_exponent_integer(ctx, start);
            let _tmp;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
            return new Result$Ok$1$(_tmp);
          }
          ctx.offset = ctx.offset - 1 | 0;
          return moonbitlang$core$json$$ParseContext$invalid_char$9$(ctx, moonbitlang$core$json$$ParseContext$invalid_char$46$shift$46$default$9$());
        }
      }
    }
  }
  const _bind = moonbitlang$core$json$$ParseContext$lex_decimal_exponent_sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new Result$Ok$1$(_tmp);
}
function moonbitlang$core$json$$ParseContext$lex_decimal_fraction(ctx, start) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
        if (_bind === -1) {
          const _bind$2 = moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new Result$Ok$1$(_tmp);
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 101: {
              break _L$2;
            }
            case 69: {
              break _L$2;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              const _bind$2 = moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
              let _tmp;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp = _ok._0;
              } else {
                return _bind$2;
              }
              return new Result$Ok$1$(_tmp);
            }
          }
        }
      }
      const _bind = moonbitlang$core$json$$ParseContext$lex_decimal_exponent(ctx, start);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new Result$Ok$1$(_tmp);
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_point(ctx, start) {
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$1$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    return _c >= 48 && _c <= 57 ? moonbitlang$core$json$$ParseContext$lex_decimal_fraction(ctx, start) : moonbitlang$core$json$$ParseContext$invalid_char$9$(ctx, -1);
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_integer(ctx, start) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
        if (_bind === -1) {
          const _bind$2 = moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new Result$Ok$1$(_tmp);
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 46: {
              const _bind$2 = moonbitlang$core$json$$ParseContext$lex_decimal_point(ctx, start);
              let _tmp;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp = _ok._0;
              } else {
                return _bind$2;
              }
              return new Result$Ok$1$(_tmp);
            }
            case 101: {
              break _L$2;
            }
            case 69: {
              break _L$2;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              const _bind$3 = moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
              let _tmp$2;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp$2 = _ok._0;
              } else {
                return _bind$3;
              }
              return new Result$Ok$1$(_tmp$2);
            }
          }
        }
      }
      const _bind = moonbitlang$core$json$$ParseContext$lex_decimal_exponent(ctx, start);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new Result$Ok$1$(_tmp);
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$lex_hex_digits(ctx, n) {
  let r = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
      if (_bind === -1) {
        return new Result$Err$4$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 65) {
          const d = ((_c & ~32) - 65 | 0) + 10 | 0;
          if (d > 15) {
            const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          r = r << 4 | d;
        } else {
          if (_c >= 48) {
            const d = _c - 48 | 0;
            if (d > 9) {
              const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
            }
            r = r << 4 | d;
          } else {
            const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$4$(r);
}
function moonbitlang$core$json$$lex_string$46$flush$124$228(_env, end) {
  const buf = _env._2;
  const ctx = _env._1;
  const start = _env._0;
  if (start.val > 0 && end > start.val) {
    moonbitlang$core$builtin$$Logger$write_substring$7$(buf, ctx.input, start.val, end - start.val | 0);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$json$$ParseContext$lex_string(ctx) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  const start = { val: ctx.offset };
  const _env = { _0: start, _1: ctx, _2: buf };
  _L: while (true) {
    _L$2: {
      _L$3: {
        _L$4: {
          const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
          if (_bind === -1) {
            return new Result$Err$5$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 34: {
                moonbitlang$core$json$$lex_string$46$flush$124$228(_env, ctx.offset - 1 | 0);
                break _L;
              }
              case 10: {
                break _L$4;
              }
              case 13: {
                break _L$4;
              }
              case 92: {
                moonbitlang$core$json$$lex_string$46$flush$124$228(_env, ctx.offset - 1 | 0);
                const _bind$2 = moonbitlang$core$json$$ParseContext$read_char(ctx);
                if (_bind$2 === -1) {
                  return new Result$Err$5$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
                } else {
                  const _Some$2 = _bind$2;
                  const _x$2 = _Some$2;
                  switch (_x$2) {
                    case 98: {
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, 8);
                      break;
                    }
                    case 102: {
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, 12);
                      break;
                    }
                    case 110: {
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, 10);
                      break;
                    }
                    case 114: {
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, 13);
                      break;
                    }
                    case 116: {
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, 9);
                      break;
                    }
                    case 34: {
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, 34);
                      break;
                    }
                    case 92: {
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, 92);
                      break;
                    }
                    case 47: {
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, 47);
                      break;
                    }
                    case 117: {
                      const _bind$3 = moonbitlang$core$json$$ParseContext$lex_hex_digits(ctx, 4);
                      let c;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        c = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      moonbitlang$core$builtin$$Logger$write_char$7$(buf, c);
                      break;
                    }
                    default: {
                      const _bind$4 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        _ok._0;
                      } else {
                        return _bind$4;
                      }
                    }
                  }
                }
                start.val = ctx.offset;
                break;
              }
              default: {
                if (_x < 32) {
                  const _bind$3 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                } else {
                  break _L$2;
                }
              }
            }
          }
          break _L$3;
        }
        const _bind = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          return _bind;
        }
      }
      break _L$2;
    }
    continue;
  }
  return new Result$Ok$5$(moonbitlang$core$builtin$$StringBuilder$to_string(buf));
}
function moonbitlang$core$json$$ParseContext$lex_zero(ctx, start) {
  _L: {
    const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
    if (_bind === -1) {
      const _bind$2 = moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$1$(_tmp);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 46: {
          return moonbitlang$core$json$$ParseContext$lex_decimal_point(ctx, start);
        }
        case 101: {
          break _L;
        }
        case 69: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            ctx.offset = ctx.offset - 1 | 0;
            const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, moonbitlang$core$json$$ParseContext$invalid_char$46$shift$46$default$2$());
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          ctx.offset = ctx.offset - 1 | 0;
          const _bind$2 = moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new Result$Ok$1$(_tmp);
        }
      }
    }
  }
  return moonbitlang$core$json$$ParseContext$lex_decimal_exponent(ctx, start);
}
function moonbitlang$core$json$$ParseContext$lex_value(ctx, allow_rbracket) {
  while (true) {
    _L: {
      _L$2: {
        _L$3: {
          const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
          if (_bind === -1) {
            return new Result$Err$0$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 9: {
                break _L$3;
              }
              case 32: {
                break _L$3;
              }
              case 10: {
                break _L$3;
              }
              case 13: {
                break _L$3;
              }
              case 123: {
                return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$LBrace);
              }
              case 91: {
                return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$LBracket);
              }
              case 93: {
                if (allow_rbracket) {
                  return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$RBracket);
                } else {
                  const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _ok._0;
                  } else {
                    return _bind$2;
                  }
                }
                break;
              }
              case 110: {
                const _bind$2 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 117);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 108);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 108);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$Null);
              }
              case 116: {
                const _bind$5 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 114);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                const _bind$6 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 117);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                const _bind$7 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 101);
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _ok._0;
                } else {
                  return _bind$7;
                }
                return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$True);
              }
              case 102: {
                const _bind$8 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 97);
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  _ok._0;
                } else {
                  return _bind$8;
                }
                const _bind$9 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 108);
                if (_bind$9.$tag === 1) {
                  const _ok = _bind$9;
                  _ok._0;
                } else {
                  return _bind$9;
                }
                const _bind$10 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 115);
                if (_bind$10.$tag === 1) {
                  const _ok = _bind$10;
                  _ok._0;
                } else {
                  return _bind$10;
                }
                const _bind$11 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 101);
                if (_bind$11.$tag === 1) {
                  const _ok = _bind$11;
                  _ok._0;
                } else {
                  return _bind$11;
                }
                return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$False);
              }
              case 45: {
                const _bind$12 = moonbitlang$core$json$$ParseContext$read_char(ctx);
                if (_bind$12 === -1) {
                  return new Result$Err$0$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
                } else {
                  const _Some$2 = _bind$12;
                  const _x$2 = _Some$2;
                  if (_x$2 === 48) {
                    const _bind$13 = moonbitlang$core$json$$ParseContext$lex_zero(ctx, ctx.offset - 2 | 0);
                    let n;
                    if (_bind$13.$tag === 1) {
                      const _ok = _bind$13;
                      n = _ok._0;
                    } else {
                      return _bind$13;
                    }
                    return new Result$Ok$0$(new $64$moonbitlang$47$core$47$json$46$Token$Number(n));
                  } else {
                    if (49 <= _x$2 && _x$2 <= 57) {
                      const _bind$13 = moonbitlang$core$json$$ParseContext$lex_decimal_integer(ctx, ctx.offset - 2 | 0);
                      let n;
                      if (_bind$13.$tag === 1) {
                        const _ok = _bind$13;
                        n = _ok._0;
                      } else {
                        return _bind$13;
                      }
                      return new Result$Ok$0$(new $64$moonbitlang$47$core$47$json$46$Token$Number(n));
                    }
                    const _bind$13 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
                    if (_bind$13.$tag === 1) {
                      const _ok = _bind$13;
                      _ok._0;
                    } else {
                      return _bind$13;
                    }
                  }
                }
                break;
              }
              case 48: {
                const _bind$13 = moonbitlang$core$json$$ParseContext$lex_zero(ctx, ctx.offset - 1 | 0);
                let n;
                if (_bind$13.$tag === 1) {
                  const _ok = _bind$13;
                  n = _ok._0;
                } else {
                  return _bind$13;
                }
                return new Result$Ok$0$(new $64$moonbitlang$47$core$47$json$46$Token$Number(n));
              }
              default: {
                if (49 <= _x && _x <= 57) {
                  const _bind$14 = moonbitlang$core$json$$ParseContext$lex_decimal_integer(ctx, ctx.offset - 1 | 0);
                  let n$2;
                  if (_bind$14.$tag === 1) {
                    const _ok = _bind$14;
                    n$2 = _ok._0;
                  } else {
                    return _bind$14;
                  }
                  return new Result$Ok$0$(new $64$moonbitlang$47$core$47$json$46$Token$Number(n$2));
                } else {
                  if (_x === 34) {
                    const _bind$14 = moonbitlang$core$json$$ParseContext$lex_string(ctx);
                    let s;
                    if (_bind$14.$tag === 1) {
                      const _ok = _bind$14;
                      s = _ok._0;
                    } else {
                      return _bind$14;
                    }
                    return new Result$Ok$0$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
                  } else {
                    if (_x > 127 && moonbitlang$core$json$$CharClass$contains(moonbitlang$core$json$$non_ascii_whitespace, _x)) {
                      break _L;
                    }
                    const _bind$14 = moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
                    if (_bind$14.$tag === 1) {
                      const _ok = _bind$14;
                      _ok._0;
                    } else {
                      return _bind$14;
                    }
                  }
                }
              }
            }
          }
          break _L$2;
        }
        break _L;
      }
      break _L;
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$lex_after_array_value(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$0$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$RBracket);
      }
      case 44: {
        return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$Comma);
      }
      default: {
        return moonbitlang$core$json$$ParseContext$invalid_char$16$(ctx, -1);
      }
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_after_object_value(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$0$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$RBrace);
      }
      case 44: {
        return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$Comma);
      }
      default: {
        return moonbitlang$core$json$$ParseContext$invalid_char$16$(ctx, -1);
      }
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_after_property_name(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$2$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 58) {
      return new Result$Ok$2$(undefined);
    } else {
      return moonbitlang$core$json$$ParseContext$invalid_char$2$(ctx, -1);
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_property_name(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$0$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new Result$Ok$0$($64$moonbitlang$47$core$47$json$46$Token$RBrace);
      }
      case 34: {
        const _bind$2 = moonbitlang$core$json$$ParseContext$lex_string(ctx);
        let s;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          s = _ok._0;
        } else {
          return _bind$2;
        }
        return new Result$Ok$0$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
      }
      default: {
        return moonbitlang$core$json$$ParseContext$invalid_char$16$(ctx, -1);
      }
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_property_name2(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$0$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 34) {
      const _bind$2 = moonbitlang$core$json$$ParseContext$lex_string(ctx);
      let s;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        s = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$0$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
    } else {
      return moonbitlang$core$json$$ParseContext$invalid_char$16$(ctx, -1);
    }
  }
}
function moonbitlang$core$json$$ParseContext$parse_value(ctx) {
  const _bind = moonbitlang$core$json$$ParseContext$lex_value(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return moonbitlang$core$json$$ParseContext$parse_value2(ctx, tok);
}
function moonbitlang$core$json$$ParseContext$parse_value2(ctx, tok) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new Result$Ok$3$($64$moonbitlang$47$core$47$builtin$46$Json$Null);
      }
      case 1: {
        return new Result$Ok$3$($64$moonbitlang$47$core$47$builtin$46$Json$True);
      }
      case 2: {
        return new Result$Ok$3$($64$moonbitlang$47$core$47$builtin$46$Json$False);
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        return new Result$Ok$3$(new $64$moonbitlang$47$core$47$builtin$46$Json$Number(_n));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new Result$Ok$3$(new $64$moonbitlang$47$core$47$builtin$46$Json$String(_s));
      }
      case 5: {
        return moonbitlang$core$json$$ParseContext$parse_object(ctx);
      }
      case 7: {
        return moonbitlang$core$json$$ParseContext$parse_array(ctx);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new Result$Ok$3$(moonbitlang$core$builtin$$abort$5$("unreachable"));
}
function moonbitlang$core$json$$ParseContext$parse_array(ctx) {
  const vec = [];
  let _tmp;
  const _bind = moonbitlang$core$json$$ParseContext$lex_value(ctx, true);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const _param = _tmp$3;
    if (_param.$tag === 8) {
      _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$Array(vec);
      break;
    } else {
      const _bind$2 = moonbitlang$core$json$$ParseContext$parse_value2(ctx, _param);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      moonbitlang$core$array$$Array$push$5$(vec, _tmp$4);
      const _bind$3 = moonbitlang$core$json$$ParseContext$lex_after_array_value(ctx);
      let tok2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        tok2 = _ok._0;
      } else {
        return _bind$3;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$4 = moonbitlang$core$json$$ParseContext$lex_value(ctx, false);
          let _tmp$5;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$5 = _ok._0;
          } else {
            return _bind$4;
          }
          _tmp$3 = _tmp$5;
          continue _L;
        }
        case 8: {
          _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$Array(vec);
          break _L;
        }
        default: {
          _tmp = moonbitlang$core$builtin$$abort$5$("unreachable");
          break _L;
        }
      }
    }
  }
  return new Result$Ok$3$(_tmp);
}
function moonbitlang$core$json$$ParseContext$parse_object(ctx) {
  const map = moonbitlang$core$builtin$$Map$new$15$(moonbitlang$core$builtin$$Map$new$46$capacity$46$default$15$());
  let _tmp;
  const _bind = moonbitlang$core$json$$ParseContext$lex_property_name(ctx);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const _param = _tmp$3;
    switch (_param.$tag) {
      case 6: {
        _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(map);
        break _L;
      }
      case 4: {
        const _String = _param;
        const _name = _String._0;
        const _bind$2 = moonbitlang$core$json$$ParseContext$lex_after_property_name(ctx);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = moonbitlang$core$json$$ParseContext$parse_value(ctx);
        let _tmp$4;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$4 = _ok._0;
        } else {
          return _bind$3;
        }
        moonbitlang$core$builtin$$Map$op_set$15$(map, _name, _tmp$4);
        const _bind$4 = moonbitlang$core$json$$ParseContext$lex_after_object_value(ctx);
        let _bind$5;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$5 = _ok._0;
        } else {
          return _bind$4;
        }
        switch (_bind$5.$tag) {
          case 9: {
            const _bind$6 = moonbitlang$core$json$$ParseContext$lex_property_name2(ctx);
            let _tmp$5;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$5 = _ok._0;
            } else {
              return _bind$6;
            }
            _tmp$3 = _tmp$5;
            continue _L;
          }
          case 6: {
            _tmp = new $64$moonbitlang$47$core$47$builtin$46$Json$Object(map);
            break _L;
          }
          default: {
            _tmp = moonbitlang$core$builtin$$abort$5$("unreachable");
            break _L;
          }
        }
      }
      default: {
        _tmp = moonbitlang$core$builtin$$abort$5$("unreachable");
        break _L;
      }
    }
  }
  return new Result$Ok$3$(_tmp);
}
function moonbitlang$core$json$$parse(input) {
  const ctx = moonbitlang$core$json$$ParseContext$make(input);
  const _bind = moonbitlang$core$json$$ParseContext$parse_value(ctx);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new Result$Ok$3$(val) : moonbitlang$core$json$$ParseContext$invalid_char$5$(ctx, moonbitlang$core$json$$ParseContext$invalid_char$46$shift$46$default$5$());
}
function moonbitlang$core$builtin$$Default$default$17$() {
  return Option$None$6$;
}
function moonbitlang$core$strconv$$range_err$2$() {
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$syntax_err$18$() {
  return new Result$Err$8$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$3$() {
  return new Result$Err$9$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$19$() {
  return new Result$Err$10$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$2$() {
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$check_underscore(str) {
  let rest;
  const _arg = moonbitlang$core$string$$String$view$46$start_offset$46$default();
  const _arg$2 = moonbitlang$core$string$$String$view$46$end_offset$46$default(str);
  const _bind = moonbitlang$core$string$$String$view(str, _arg, _arg$2);
  if (moonbitlang$core$string$$String$char_length_ge(_bind.str, 1, _bind.start, _bind.end)) {
    const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char(_bind.str, 0, _bind.start, _bind.end));
    switch (_x) {
      case 43: {
        const _tmp = _bind.str;
        const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char(_bind.str, 1, _bind.start, _bind.end);
        let _tmp$2;
        if (_bind$2 === undefined) {
          _tmp$2 = _bind.end;
        } else {
          const _Some = _bind$2;
          _tmp$2 = _Some;
        }
        const _tmp$3 = _tmp$2;
        const _x$2 = { str: _tmp, start: _tmp$3, end: _bind.end };
        rest = _x$2;
        break;
      }
      case 45: {
        const _tmp$4 = _bind.str;
        const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(_bind.str, 1, _bind.start, _bind.end);
        let _tmp$5;
        if (_bind$3 === undefined) {
          _tmp$5 = _bind.end;
        } else {
          const _Some = _bind$3;
          _tmp$5 = _Some;
        }
        const _tmp$6 = _tmp$5;
        const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind.end };
        rest = _x$3;
        break;
      }
      default: {
        rest = _bind;
      }
    }
  } else {
    rest = _bind;
  }
  let _bind$2;
  let rest$2;
  _L: {
    _L$2: {
      let rest$3;
      _L$3: {
        _L$4: {
          let rest$4;
          _L$5: {
            _L$6: {
              let rest$5;
              _L$7: {
                if (moonbitlang$core$string$$String$char_length_ge(rest.str, 2, rest.start, rest.end)) {
                  const _x = moonbitlang$core$string$$String$unsafe_char_at(rest.str, moonbitlang$core$string$$String$offset_of_nth_char(rest.str, 0, rest.start, rest.end));
                  if (_x === 48) {
                    const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(rest.str, moonbitlang$core$string$$String$offset_of_nth_char(rest.str, 1, rest.start, rest.end));
                    switch (_x$2) {
                      case 120: {
                        const _tmp = rest.str;
                        const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(rest.str, 2, rest.start, rest.end);
                        let _tmp$2;
                        if (_bind$3 === undefined) {
                          _tmp$2 = rest.end;
                        } else {
                          const _Some = _bind$3;
                          _tmp$2 = _Some;
                        }
                        const _tmp$3 = _tmp$2;
                        const _x$3 = { str: _tmp, start: _tmp$3, end: rest.end };
                        rest$5 = _x$3;
                        break _L$7;
                      }
                      case 88: {
                        const _tmp$4 = rest.str;
                        const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(rest.str, 2, rest.start, rest.end);
                        let _tmp$5;
                        if (_bind$4 === undefined) {
                          _tmp$5 = rest.end;
                        } else {
                          const _Some = _bind$4;
                          _tmp$5 = _Some;
                        }
                        const _tmp$6 = _tmp$5;
                        const _x$4 = { str: _tmp$4, start: _tmp$6, end: rest.end };
                        rest$5 = _x$4;
                        break _L$7;
                      }
                      case 111: {
                        const _tmp$7 = rest.str;
                        const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char(rest.str, 2, rest.start, rest.end);
                        let _tmp$8;
                        if (_bind$5 === undefined) {
                          _tmp$8 = rest.end;
                        } else {
                          const _Some = _bind$5;
                          _tmp$8 = _Some;
                        }
                        const _tmp$9 = _tmp$8;
                        const _x$5 = { str: _tmp$7, start: _tmp$9, end: rest.end };
                        rest$4 = _x$5;
                        break _L$6;
                      }
                      case 79: {
                        const _tmp$10 = rest.str;
                        const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char(rest.str, 2, rest.start, rest.end);
                        let _tmp$11;
                        if (_bind$6 === undefined) {
                          _tmp$11 = rest.end;
                        } else {
                          const _Some = _bind$6;
                          _tmp$11 = _Some;
                        }
                        const _tmp$12 = _tmp$11;
                        const _x$6 = { str: _tmp$10, start: _tmp$12, end: rest.end };
                        rest$4 = _x$6;
                        break _L$6;
                      }
                      case 98: {
                        const _tmp$13 = rest.str;
                        const _bind$7 = moonbitlang$core$string$$String$offset_of_nth_char(rest.str, 2, rest.start, rest.end);
                        let _tmp$14;
                        if (_bind$7 === undefined) {
                          _tmp$14 = rest.end;
                        } else {
                          const _Some = _bind$7;
                          _tmp$14 = _Some;
                        }
                        const _tmp$15 = _tmp$14;
                        const _x$7 = { str: _tmp$13, start: _tmp$15, end: rest.end };
                        rest$3 = _x$7;
                        break _L$4;
                      }
                      case 66: {
                        const _tmp$16 = rest.str;
                        const _bind$8 = moonbitlang$core$string$$String$offset_of_nth_char(rest.str, 2, rest.start, rest.end);
                        let _tmp$17;
                        if (_bind$8 === undefined) {
                          _tmp$17 = rest.end;
                        } else {
                          const _Some = _bind$8;
                          _tmp$17 = _Some;
                        }
                        const _tmp$18 = _tmp$17;
                        const _x$8 = { str: _tmp$16, start: _tmp$18, end: rest.end };
                        rest$3 = _x$8;
                        break _L$4;
                      }
                      default: {
                        rest$2 = rest;
                        break _L$2;
                      }
                    }
                  } else {
                    rest$2 = rest;
                    break _L$2;
                  }
                } else {
                  rest$2 = rest;
                  break _L$2;
                }
              }
              _bind$2 = { _0: rest$5, _1: true, _2: true };
              break _L$5;
            }
            _bind$2 = { _0: rest$4, _1: true, _2: false };
          }
          break _L$3;
        }
        _bind$2 = { _0: rest$3, _1: true, _2: false };
      }
      break _L;
    }
    _bind$2 = { _0: rest$2, _1: false, _2: false };
  }
  const _rest = _bind$2._0;
  const _allow_underscore = _bind$2._1;
  const _hex = _bind$2._2;
  let _tmp = _rest;
  let _tmp$2 = _allow_underscore;
  let _tmp$3 = false;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    let rest$3;
    let c;
    let follow_underscore;
    _L$2: {
      if (moonbitlang$core$string$$String$char_length_eq(_param.str, 0, _param.start, _param.end)) {
        return true;
      } else {
        if (moonbitlang$core$string$$String$char_length_eq(_param.str, 1, _param.start, _param.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 0, _param.start, _param.end));
          if (_x === 95) {
            return false;
          } else {
            const _tmp$4 = _param.str;
            const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
            let _tmp$5;
            if (_bind$3 === undefined) {
              _tmp$5 = _param.end;
            } else {
              const _Some = _bind$3;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param.end };
            rest$3 = _x$2;
            c = _x;
            follow_underscore = _param$3;
            break _L$2;
          }
        } else {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 0, _param.start, _param.end));
          if (_x === 95) {
            if (_param$2 === false) {
              return false;
            } else {
              const _tmp$4 = _param.str;
              const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
              let _tmp$5;
              if (_bind$3 === undefined) {
                _tmp$5 = _param.end;
              } else {
                const _Some = _bind$3;
                _tmp$5 = _Some;
              }
              const _tmp$6 = _tmp$5;
              const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param.end };
              _tmp = _x$2;
              _tmp$2 = false;
              _tmp$3 = true;
              continue;
            }
          } else {
            const _tmp$4 = _param.str;
            const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
            let _tmp$5;
            if (_bind$3 === undefined) {
              _tmp$5 = _param.end;
            } else {
              const _Some = _bind$3;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param.end };
            rest$3 = _x$2;
            c = _x;
            follow_underscore = _param$3;
            break _L$2;
          }
        }
      }
    }
    if (_hex ? 48 <= c && c <= 57 || (97 <= c && c <= 102 || 65 <= c && c <= 70) : 48 <= c && c <= 57) {
      _tmp = rest$3;
      _tmp$2 = true;
      _tmp$3 = false;
      continue;
    } else {
      if (follow_underscore) {
        return false;
      } else {
        _tmp = rest$3;
        _tmp$2 = false;
        _tmp$3 = false;
        continue;
      }
    }
  }
}
function moonbitlang$core$strconv$$Decimal$new_priv() {
  return { digits: $make_array_len_and_init(800, moonbitlang$core$builtin$$Default$default$14$()), digits_num: 0, decimal_point: 0, negative: false, truncated: false };
}
function moonbitlang$core$strconv$$Decimal$trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      $bound_check(_tmp$2, _tmp$3);
      _tmp = moonbitlang$core$builtin$$Eq$op_equal$14$(_tmp$2[_tmp$3], 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$strconv$$parse_decimal_from_view(str) {
  const d = moonbitlang$core$strconv$$Decimal$new_priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if (moonbitlang$core$string$$String$char_length_ge(str.str, 1, str.start, str.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(str.str, moonbitlang$core$string$$String$offset_of_nth_char(str.str, 0, str.start, str.end));
        switch (_x) {
          case 45: {
            const _tmp = str.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char(str.str, 1, str.start, str.end);
            let _tmp$2;
            if (_bind === undefined) {
              _tmp$2 = str.end;
            } else {
              const _Some = _bind;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: str.end };
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            const _tmp$4 = str.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char(str.str, 1, str.start, str.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = str.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$3 = { str: _tmp$4, start: _tmp$6, end: str.end };
            rest = _x$3;
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  _L$2: while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_ge(_param.str, 1, _param.start, _param.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 0, _param.start, _param.end));
      switch (_x) {
        case 95: {
          const _tmp$2 = _param.str;
          const _bind = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _tmp$4 = _tmp$3;
          const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
          _tmp = _x$2;
          continue _L$2;
        }
        case 46: {
          const _tmp$5 = _param.str;
          const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
          let _tmp$6;
          if (_bind$2 === undefined) {
            _tmp$6 = _param.end;
          } else {
            const _Some = _bind$2;
            _tmp$6 = _Some;
          }
          const _tmp$7 = _tmp$6;
          const _x$3 = { str: _tmp$5, start: _tmp$7, end: _param.end };
          if (!has_dp) {
            has_dp = true;
            d.decimal_point = d.digits_num;
            _tmp = _x$3;
            continue _L$2;
          } else {
            const _bind$3 = moonbitlang$core$strconv$$syntax_err$3$();
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              rest$2 = _ok._0;
              break _L$2;
            } else {
              return _bind$3;
            }
          }
        }
        default: {
          if (48 <= _x && _x <= 57) {
            const _tmp$8 = _param.str;
            const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
            let _tmp$9;
            if (_bind$3 === undefined) {
              _tmp$9 = _param.end;
            } else {
              const _Some = _bind$3;
              _tmp$9 = _Some;
            }
            const _tmp$10 = _tmp$9;
            const _x$4 = { str: _tmp$8, start: _tmp$10, end: _param.end };
            has_digits = true;
            if (_x === 48 && d.digits_num === 0) {
              d.decimal_point = d.decimal_point - 1 | 0;
              _tmp = _x$4;
              continue _L$2;
            }
            if (d.digits_num < d.digits.length) {
              const _tmp$11 = d.digits;
              const _tmp$12 = d.digits_num;
              $bound_check(_tmp$11, _tmp$12);
              _tmp$11[_tmp$12] = (_x - 48 | 0) & 255;
              d.digits_num = d.digits_num + 1 | 0;
            } else {
              if (_x !== 48) {
                d.truncated = true;
              }
            }
            _tmp = _x$4;
            continue _L$2;
          } else {
            rest$2 = _param;
            break _L$2;
          }
        }
      }
    } else {
      rest$2 = _param;
      break;
    }
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$3: {
      _L$4: {
        if (moonbitlang$core$string$$String$char_length_ge(rest$2.str, 1, rest$2.start, rest$2.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char(rest$2.str, 0, rest$2.start, rest$2.end));
          switch (_x) {
            case 101: {
              const _tmp$2 = rest$2.str;
              const _bind = moonbitlang$core$string$$String$offset_of_nth_char(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$3;
              if (_bind === undefined) {
                _tmp$3 = rest$2.end;
              } else {
                const _Some = _bind;
                _tmp$3 = _Some;
              }
              const _tmp$4 = _tmp$3;
              const _x$2 = { str: _tmp$2, start: _tmp$4, end: rest$2.end };
              rest$4 = _x$2;
              break _L$4;
            }
            case 69: {
              const _tmp$5 = rest$2.str;
              const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$6;
              if (_bind$2 === undefined) {
                _tmp$6 = rest$2.end;
              } else {
                const _Some = _bind$2;
                _tmp$6 = _Some;
              }
              const _tmp$7 = _tmp$6;
              const _x$3 = { str: _tmp$5, start: _tmp$7, end: rest$2.end };
              rest$4 = _x$3;
              break _L$4;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$3;
      }
      let exp_sign = 1;
      let rest$5;
      if (moonbitlang$core$string$$String$char_length_ge(rest$4.str, 1, rest$4.start, rest$4.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$4.str, moonbitlang$core$string$$String$offset_of_nth_char(rest$4.str, 0, rest$4.start, rest$4.end));
        switch (_x) {
          case 43: {
            const _tmp$2 = rest$4.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = rest$4.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _tmp$4 = _tmp$3;
            const _x$2 = { str: _tmp$2, start: _tmp$4, end: rest$4.end };
            rest$5 = _x$2;
            break;
          }
          case 45: {
            const _tmp$5 = rest$4.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$6;
            if (_bind$2 === undefined) {
              _tmp$6 = rest$4.end;
            } else {
              const _Some = _bind$2;
              _tmp$6 = _Some;
            }
            const _tmp$7 = _tmp$6;
            const _x$3 = { str: _tmp$5, start: _tmp$7, end: rest$4.end };
            exp_sign = -1;
            rest$5 = _x$3;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$5: {
        _L$6: {
          if (moonbitlang$core$string$$String$char_length_ge(rest$5.str, 1, rest$5.start, rest$5.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$5.str, moonbitlang$core$string$$String$offset_of_nth_char(rest$5.str, 0, rest$5.start, rest$5.end));
            if (48 <= _x && _x <= 57) {
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const _param = _tmp$2;
                if (moonbitlang$core$string$$String$char_length_ge(_param.str, 1, _param.start, _param.end)) {
                  const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 0, _param.start, _param.end));
                  if (_x$2 === 95) {
                    const _tmp$3 = _param.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
                    let _tmp$4;
                    if (_bind === undefined) {
                      _tmp$4 = _param.end;
                    } else {
                      const _Some = _bind;
                      _tmp$4 = _Some;
                    }
                    const _tmp$5 = _tmp$4;
                    const _x$3 = { str: _tmp$3, start: _tmp$5, end: _param.end };
                    _tmp$2 = _x$3;
                    continue;
                  } else {
                    if (48 <= _x$2 && _x$2 <= 57) {
                      const _tmp$3 = _param.str;
                      const _bind = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
                      let _tmp$4;
                      if (_bind === undefined) {
                        _tmp$4 = _param.end;
                      } else {
                        const _Some = _bind;
                        _tmp$4 = _Some;
                      }
                      const _tmp$5 = _tmp$4;
                      const _x$3 = { str: _tmp$3, start: _tmp$5, end: _param.end };
                      exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      rest$6 = _param;
                      break;
                    }
                  }
                } else {
                  rest$6 = _param;
                  break;
                }
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$6;
            }
          } else {
            break _L$6;
          }
          break _L$5;
        }
        const _bind = moonbitlang$core$strconv$$syntax_err$3$();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if (moonbitlang$core$string$$String$char_length_eq(rest$3.str, 0, rest$3.start, rest$3.end)) {
      moonbitlang$core$strconv$$Decimal$trim(d);
      return new Result$Ok$8$(d);
    } else {
      return moonbitlang$core$strconv$$syntax_err$18$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$18$();
  }
}
function moonbitlang$core$strconv$$parse_decimal_priv(str) {
  const _arg = moonbitlang$core$string$$String$view$46$start_offset$46$default();
  const _arg$2 = moonbitlang$core$string$$String$view$46$end_offset$46$default(str);
  return moonbitlang$core$strconv$$parse_decimal_from_view(moonbitlang$core$string$$String$view(str, _arg, _arg$2));
}
function moonbitlang$core$strconv$$slice(s, start, end) {
  return { string: s, start: start, end: end };
}
function moonbitlang$core$strconv$$full_slice(s) {
  return moonbitlang$core$strconv$$slice(s, 0, s.length);
}
function moonbitlang$core$strconv$$StringSlice$length(self) {
  return self.end - self.start | 0;
}
function moonbitlang$core$strconv$$StringSlice$op_get(self, index) {
  const _tmp = self.string;
  const _tmp$2 = self.start + index | 0;
  return _tmp.charCodeAt(_tmp$2);
}
function moonbitlang$core$strconv$$StringSlice$first_is(self, c) {
  return moonbitlang$core$strconv$$StringSlice$length(self) > 0 && moonbitlang$core$strconv$$StringSlice$op_get(self, 0) === c;
}
function moonbitlang$core$strconv$$lower(c) {
  return 65 <= c && c <= 90 ? (c + 97 | 0) - 65 | 0 : c;
}
function moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(self, s2) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < s2.length && i < moonbitlang$core$strconv$$StringSlice$length(self)) {
      const c1 = moonbitlang$core$strconv$$StringSlice$op_get(self, i);
      const c2 = s2.charCodeAt(i);
      if (moonbitlang$core$strconv$$lower(c1) !== moonbitlang$core$strconv$$lower(c2)) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function moonbitlang$core$strconv$$StringSlice$step_1_unchecked(self) {
  return { string: self.string, start: self.start + 1 | 0, end: self.end };
}
function moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, start) {
  return { string: self.string, start: self.start + start | 0, end: self.end };
}
function moonbitlang$core$strconv$$parse_inf_nan$46$parse_inf_rest$124$281(s) {
  return moonbitlang$core$strconv$$StringSlice$length(s) >= 8 && moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(moonbitlang$core$strconv$$StringSlice$subfix_unchecked(s, 3), "inity") ? 8 : 3;
}
function moonbitlang$core$strconv$$parse_inf_nan(s) {
  const s$2 = moonbitlang$core$strconv$$full_slice(s);
  if (moonbitlang$core$strconv$$StringSlice$length(s$2) >= 3) {
    if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$2, "nan")) {
      return { _0: moonbitlang$core$double$$not_a_number, _1: 3 };
    } else {
      if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$2, "inf")) {
        return { _0: moonbitlang$core$double$$infinity, _1: moonbitlang$core$strconv$$parse_inf_nan$46$parse_inf_rest$124$281(s$2) };
      } else {
        if (moonbitlang$core$strconv$$StringSlice$length(s$2) >= 4) {
          if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 43)) {
            const s$3 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
            if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$3, "nan")) {
              return { _0: moonbitlang$core$double$$not_a_number, _1: 4 };
            } else {
              if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$3, "inf")) {
                return { _0: moonbitlang$core$double$$infinity, _1: 1 + moonbitlang$core$strconv$$parse_inf_nan$46$parse_inf_rest$124$281(s$3) | 0 };
              }
            }
          } else {
            if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 45)) {
              const s$3 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
              if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$3, "nan")) {
                return { _0: moonbitlang$core$double$$not_a_number, _1: 4 };
              } else {
                if (moonbitlang$core$strconv$$StringSlice$prefix_eq_ignore_case(s$3, "inf")) {
                  return { _0: moonbitlang$core$double$$neg_infinity, _1: 1 + moonbitlang$core$strconv$$parse_inf_nan$46$parse_inf_rest$124$281(s$3) | 0 };
                }
              }
            }
          }
        }
      }
    }
  }
  return undefined;
}
function moonbitlang$core$strconv$$is_digit(c) {
  return c >= 48 && c <= 57;
}
function moonbitlang$core$strconv$$to_digit(c) {
  return c - 48 | 0;
}
function moonbitlang$core$strconv$$StringSlice$fold_digits$6$(self, init, f) {
  let ret = init;
  let len = 0;
  const _end343 = moonbitlang$core$strconv$$StringSlice$length(self);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end343) {
      if (!(moonbitlang$core$strconv$$is_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, i)) || moonbitlang$core$strconv$$StringSlice$op_get(self, i) === 95)) {
        return { _0: moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, i), _1: ret, _2: len };
      }
      if (moonbitlang$core$strconv$$StringSlice$op_get(self, i) !== 95) {
        len = len + 1 | 0;
        ret = f(moonbitlang$core$strconv$$to_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, i)), ret);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, moonbitlang$core$strconv$$StringSlice$length(self)), _1: ret, _2: len };
}
function moonbitlang$core$strconv$$StringSlice$fold_digits$0$(self, init, f) {
  let ret = init;
  let len = 0;
  const _end343 = moonbitlang$core$strconv$$StringSlice$length(self);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end343) {
      if (!(moonbitlang$core$strconv$$is_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, i)) || moonbitlang$core$strconv$$StringSlice$op_get(self, i) === 95)) {
        return { _0: moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, i), _1: ret, _2: len };
      }
      if (moonbitlang$core$strconv$$StringSlice$op_get(self, i) !== 95) {
        len = len + 1 | 0;
        ret = f(moonbitlang$core$strconv$$to_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, i)), ret);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, moonbitlang$core$strconv$$StringSlice$length(self)), _1: ret, _2: len };
}
function moonbitlang$core$strconv$$parse_digits(s, x) {
  return moonbitlang$core$strconv$$StringSlice$fold_digits$0$(s, x, (digit, acc) => moonbitlang$core$builtin$$Add$op_add$0$(moonbitlang$core$builtin$$Mul$op_mul$0$(acc, $10L), moonbitlang$core$uint64$$UInt64$extend_uint(digit)));
}
function moonbitlang$core$strconv$$StringSlice$first_is_digit(self) {
  return moonbitlang$core$strconv$$StringSlice$length(self) > 0 && moonbitlang$core$strconv$$is_digit(moonbitlang$core$strconv$$StringSlice$op_get(self, 0));
}
function moonbitlang$core$strconv$$StringSlice$first_is_either(self, c1, c2) {
  return moonbitlang$core$strconv$$StringSlice$length(self) > 0 && (moonbitlang$core$strconv$$StringSlice$op_get(self, 0) === c1 || moonbitlang$core$strconv$$StringSlice$op_get(self, 0) === c2);
}
function moonbitlang$core$strconv$$StringSlice$step(self, step) {
  let step$2 = step;
  let start = self.start;
  while (true) {
    if (start < self.end && step$2 > 0) {
      const _tmp = self.string;
      const _tmp$2 = start;
      if (_tmp.charCodeAt(_tmp$2) !== 95) {
        step$2 = step$2 - 1 | 0;
      }
      start = start + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return step$2 === 0 ? moonbitlang$core$strconv$$StringSlice$subfix_unchecked(self, start - self.start | 0) : undefined;
}
function moonbitlang$core$strconv$$parse_scientific(s) {
  const _bind = moonbitlang$core$strconv$$StringSlice$step(s, 1);
  let s$2;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _s = _Some;
    s$2 = _s;
  }
  let neg_exp = false;
  if (moonbitlang$core$strconv$$StringSlice$first_is_either(s$2, 45, 43)) {
    neg_exp = moonbitlang$core$strconv$$StringSlice$op_get(s$2, 0) === 45;
    s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
  }
  if (moonbitlang$core$strconv$$StringSlice$first_is_digit(s$2)) {
    const _bind$2 = moonbitlang$core$strconv$$StringSlice$fold_digits$6$(s$2, moonbitlang$core$strconv$$parse_scientific$46$exp_num$124$320, (digit, exp_num) => moonbitlang$core$builtin$$op_lt$6$(exp_num, $65536L) ? moonbitlang$core$builtin$$Add$op_add$6$(moonbitlang$core$builtin$$Mul$op_mul$6$($10L, exp_num), moonbitlang$core$int$$Int$to_int64(digit)) : exp_num);
    const _s = _bind$2._0;
    const _exp_num = _bind$2._1;
    return neg_exp ? { _0: _s, _1: moonbitlang$core$builtin$$Neg$op_neg$6$(_exp_num) } : { _0: _s, _1: _exp_num };
  } else {
    return undefined;
  }
}
function moonbitlang$core$strconv$$try_parse_19digits(s, x) {
  let x$2 = x;
  let s$2 = s;
  let len = 0;
  while (true) {
    if (moonbitlang$core$builtin$$op_lt$0$(x$2, moonbitlang$core$strconv$$min_19digit_int) && moonbitlang$core$strconv$$StringSlice$first_is_digit(s$2) || moonbitlang$core$strconv$$StringSlice$first_is(s$2, 95)) {
      if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 95)) {
        s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
      }
      len = len + 1 | 0;
      x$2 = moonbitlang$core$builtin$$Add$op_add$0$(moonbitlang$core$builtin$$Mul$op_mul$0$(x$2, $10L), moonbitlang$core$uint64$$UInt64$extend_uint(moonbitlang$core$strconv$$to_digit(moonbitlang$core$strconv$$StringSlice$op_get(s$2, 0))));
      s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
      continue;
    } else {
      break;
    }
  }
  return { _0: s$2, _1: x$2, _2: len };
}
function moonbitlang$core$strconv$$StringSlice$is_empty(self) {
  return self.start === self.end;
}
function moonbitlang$core$strconv$$parse_number(s) {
  let s$2 = moonbitlang$core$strconv$$full_slice(s);
  const start = s$2;
  let negative = false;
  if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 45)) {
    negative = true;
    s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
  } else {
    if (moonbitlang$core$strconv$$StringSlice$first_is(s$2, 43)) {
      s$2 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$2);
    }
  }
  if (moonbitlang$core$strconv$$StringSlice$is_empty(s$2)) {
    return undefined;
  }
  const _bind = moonbitlang$core$strconv$$parse_digits(s$2, $0L);
  const _s = _bind._0;
  const _mantissa = _bind._1;
  const _consumed = _bind._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = $0L;
  if (moonbitlang$core$strconv$$StringSlice$first_is(s$3, 46)) {
    s$3 = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(s$3);
    const _bind$2 = moonbitlang$core$strconv$$parse_digits(s$3, mantissa);
    const _new_s = _bind$2._0;
    const _new_mantissa = _bind$2._1;
    const _consumed_digit = _bind$2._2;
    s$3 = _new_s;
    mantissa = _new_mantissa;
    n_after_dot = _consumed_digit;
    exponent = moonbitlang$core$builtin$$Neg$op_neg$6$(moonbitlang$core$int$$Int$to_int64(n_after_dot));
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return undefined;
  }
  if (moonbitlang$core$strconv$$StringSlice$first_is_either(s$3, 101, 69)) {
    const _bind$2 = moonbitlang$core$strconv$$parse_scientific(s$3);
    let _bind$3;
    if (_bind$2 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$2;
      const _res = _Some;
      _bind$3 = _res;
    }
    const _new_s = _bind$3._0;
    const _exp_number = _bind$3._1;
    s$3 = _new_s;
    exponent = moonbitlang$core$builtin$$Add$op_add$6$(exponent, _exp_number);
  }
  const len = moonbitlang$core$strconv$$StringSlice$length(start) - moonbitlang$core$strconv$$StringSlice$length(s$3) | 0;
  if (n_digits <= 19) {
    return { _0: { exponent: exponent, mantissa: mantissa, negative: negative, many_digits: false }, _1: len };
  }
  n_digits = n_digits - 19 | 0;
  let many_digits = false;
  let p = start;
  while (true) {
    if (moonbitlang$core$strconv$$StringSlice$first_is_either(p, 48, 46)) {
      n_digits = n_digits - ((moonbitlang$core$strconv$$StringSlice$op_get(p, 0) - 46 | 0) / 2 | 0) | 0;
      p = moonbitlang$core$strconv$$StringSlice$step_1_unchecked(p);
      continue;
    } else {
      break;
    }
  }
  let mantissa$2 = mantissa;
  if (n_digits > 0) {
    many_digits = true;
    mantissa$2 = $0L;
    const _bind$2 = moonbitlang$core$strconv$$try_parse_19digits(start, mantissa$2);
    const _s$2 = _bind$2._0;
    const _new_mantissa = _bind$2._1;
    const _consumed_digit = _bind$2._2;
    mantissa$2 = _new_mantissa;
    let _tmp;
    if (moonbitlang$core$builtin$$op_ge$0$(mantissa$2, moonbitlang$core$strconv$$min_19digit_int)) {
      _tmp = _consumed_digit;
    } else {
      const _bind$3 = moonbitlang$core$strconv$$StringSlice$step(_s$2, 1);
      let s$4;
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _s$3 = _Some;
        s$4 = _s$3;
      }
      const _bind$4 = moonbitlang$core$strconv$$try_parse_19digits(s$4, mantissa$2);
      const _new_mantissa$2 = _bind$4._1;
      const _consumed_digit$2 = _bind$4._2;
      mantissa$2 = _new_mantissa$2;
      _tmp = _consumed_digit$2;
    }
    exponent = moonbitlang$core$int$$Int$to_int64(_tmp);
    exponent = moonbitlang$core$builtin$$Add$op_add$6$(exponent, moonbitlang$core$strconv$$parse_number$46$exp_number$124$301);
  }
  return { _0: { exponent: exponent, mantissa: mantissa$2, negative: negative, many_digits: many_digits }, _1: len };
}
function moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, negative) {
  const biased_exp = exponent - moonbitlang$core$strconv$$double_info.bias | 0;
  let bits = moonbitlang$core$builtin$$BitAnd$land$6$(mantissa, moonbitlang$core$builtin$$Sub$op_sub$6$(moonbitlang$core$builtin$$Shl$op_shl$6$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits), $1L));
  const exp_bits = moonbitlang$core$int$$Int$to_int64(biased_exp & ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0));
  bits = moonbitlang$core$builtin$$BitOr$lor$6$(bits, moonbitlang$core$builtin$$Shl$op_shl$6$(exp_bits, moonbitlang$core$strconv$$double_info.mantissa_bits));
  if (negative) {
    bits = moonbitlang$core$builtin$$BitOr$lor$6$(bits, moonbitlang$core$builtin$$Shl$op_shl$6$(moonbitlang$core$builtin$$Shl$op_shl$6$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits), moonbitlang$core$strconv$$double_info.exponent_bits));
  }
  return bits;
}
function moonbitlang$core$strconv$$Decimal$should_round_up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  $bound_check(_tmp$2, d);
  if (_tmp$2[d] === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      $bound_check(_tmp$4, _tmp$5);
      _tmp$3 = (_tmp$4[_tmp$5] % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  $bound_check(_tmp$3, d);
  return _tmp$3[d] >= 5;
}
function moonbitlang$core$strconv$$Decimal$rounded_integer(self) {
  if (self.decimal_point > 20) {
    return $_1L;
  }
  let n = $0L;
  let i = 0;
  while (true) {
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp = moonbitlang$core$builtin$$Mul$op_mul$6$(n, $10L);
      const _tmp$2 = self.digits;
      const _tmp$3 = i;
      $bound_check(_tmp$2, _tmp$3);
      n = moonbitlang$core$builtin$$Add$op_add$6$(_tmp, moonbitlang$core$byte$$Byte$to_int64(_tmp$2[_tmp$3]));
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (i < self.decimal_point) {
      n = moonbitlang$core$builtin$$Mul$op_mul$6$(n, $10L);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (moonbitlang$core$strconv$$Decimal$should_round_up(self, self.decimal_point)) {
    n = moonbitlang$core$builtin$$Add$op_add$6$(n, $1L);
  }
  return n;
}
function moonbitlang$core$strconv$$Decimal$new_digits(self, s) {
  const new_digits = moonbitlang$core$array$$Array$op_get$8$(moonbitlang$core$strconv$$left_shift_cheats, s)._0;
  const cheat_num = moonbitlang$core$array$$Array$op_get$8$(moonbitlang$core$strconv$$left_shift_cheats, s)._1;
  let less = false;
  const _end83 = cheat_num.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end83) {
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = cheat_num.charCodeAt(i) - 48 | 0;
      const _tmp$2 = self.digits;
      $bound_check(_tmp$2, i);
      if (_tmp$2[i] !== d) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, i);
        less = _tmp$3[i] < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function moonbitlang$core$strconv$$Decimal$left_shift(self, s) {
  const new_digits = moonbitlang$core$strconv$$Decimal$new_digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = $0L;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = moonbitlang$core$byte$$Byte$to_int64(_tmp[_tmp$2]);
      acc = moonbitlang$core$builtin$$Add$op_add$6$(acc, moonbitlang$core$builtin$$Shl$op_shl$6$(d, s));
      const quo = moonbitlang$core$builtin$$Div$op_div$6$(acc, $10L);
      const rem = moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$builtin$$Sub$op_sub$6$(acc, moonbitlang$core$builtin$$Mul$op_mul$6$(quo, $10L)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        $bound_check(_tmp$3, _tmp$4);
        _tmp$3[_tmp$4] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (moonbitlang$core$builtin$$op_gt$6$(acc, $0L)) {
      const quo = moonbitlang$core$builtin$$Div$op_div$6$(acc, $10L);
      const rem = moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$builtin$$Sub$op_sub$6$(acc, moonbitlang$core$builtin$$Mul$op_mul$6$($10L, quo)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  moonbitlang$core$strconv$$Decimal$trim(self);
}
function moonbitlang$core$strconv$$Decimal$right_shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = $0L;
  while (true) {
    if (moonbitlang$core$builtin$$Eq$op_equal$0$(moonbitlang$core$builtin$$Shr$op_shr$0$(acc, s), $0L)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (moonbitlang$core$builtin$$Eq$op_equal$0$(moonbitlang$core$builtin$$Shr$op_shr$0$(acc, s), $0L)) {
            acc = moonbitlang$core$builtin$$Mul$op_mul$0$(acc, $10L);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _tmp[_tmp$2];
      acc = moonbitlang$core$builtin$$Add$op_add$0$(moonbitlang$core$builtin$$Mul$op_mul$0$(acc, $10L), moonbitlang$core$byte$$Byte$to_int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = moonbitlang$core$builtin$$Sub$op_sub$0$(moonbitlang$core$builtin$$Shl$op_shl$0$($1L, s), $1L);
  while (true) {
    if (read_index < self.digits_num) {
      const out = moonbitlang$core$builtin$$Shr$op_shr$0$(acc, s);
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      $bound_check(_tmp, _tmp$2);
      _tmp[_tmp$2] = moonbitlang$core$uint64$$UInt64$to_byte(out);
      write_index = write_index + 1 | 0;
      acc = moonbitlang$core$builtin$$BitAnd$land$0$(acc, mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      $bound_check(_tmp$3, _tmp$4);
      const d = _tmp$3[_tmp$4];
      acc = moonbitlang$core$builtin$$Add$op_add$0$(moonbitlang$core$builtin$$Mul$op_mul$0$(acc, $10L), moonbitlang$core$byte$$Byte$to_int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (moonbitlang$core$builtin$$op_gt$0$(acc, $0L)) {
      const out = moonbitlang$core$builtin$$Shr$op_shr$0$(acc, s);
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = moonbitlang$core$uint64$$UInt64$to_byte(out);
        write_index = write_index + 1 | 0;
      } else {
        if (moonbitlang$core$builtin$$op_gt$0$(out, $0L)) {
          self.truncated = true;
        }
      }
      acc = moonbitlang$core$builtin$$BitAnd$land$0$(acc, mask);
      acc = moonbitlang$core$builtin$$Mul$op_mul$0$(acc, $10L);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  moonbitlang$core$strconv$$Decimal$trim(self);
}
function moonbitlang$core$strconv$$Decimal$shift_priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        moonbitlang$core$strconv$$Decimal$left_shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$strconv$$Decimal$left_shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        moonbitlang$core$strconv$$Decimal$right_shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$strconv$$Decimal$right_shift(self, -s$2);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$strconv$$Decimal$to_double_priv(self) {
  let exponent = 0;
  let mantissa = $0L;
  if (self.digits_num === 0 || self.decimal_point < -330) {
    mantissa = $0L;
    exponent = moonbitlang$core$strconv$$double_info.bias;
    const bits = moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, self.negative);
    return new Result$Ok$11$(moonbitlang$core$int64$$Int64$reinterpret_as_double(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = moonbitlang$core$strconv$$range_err$2$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= moonbitlang$core$strconv$$powtab.length) {
        n = 60;
      } else {
        n = moonbitlang$core$array$$Array$op_get$4$(moonbitlang$core$strconv$$powtab, self.decimal_point);
      }
      moonbitlang$core$strconv$$Decimal$shift_priv(self, -n);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, 0);
        _tmp$2 = _tmp$3[0] < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if (-self.decimal_point >= moonbitlang$core$strconv$$powtab.length) {
        n = 60;
      } else {
        n = moonbitlang$core$array$$Array$op_get$4$(moonbitlang$core$strconv$$powtab, -self.decimal_point);
      }
      moonbitlang$core$strconv$$Decimal$shift_priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (moonbitlang$core$strconv$$double_info.bias + 1 | 0)) {
    const n = (moonbitlang$core$strconv$$double_info.bias + 1 | 0) - exponent | 0;
    moonbitlang$core$strconv$$Decimal$shift_priv(self, -n);
    exponent = exponent + n | 0;
  }
  if ((exponent - moonbitlang$core$strconv$$double_info.bias | 0) >= ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0)) {
    const _bind = moonbitlang$core$strconv$$range_err$2$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  moonbitlang$core$strconv$$Decimal$shift_priv(self, moonbitlang$core$strconv$$double_info.mantissa_bits + 1 | 0);
  mantissa = moonbitlang$core$strconv$$Decimal$rounded_integer(self);
  if (moonbitlang$core$builtin$$Eq$op_equal$6$(mantissa, moonbitlang$core$builtin$$Shl$op_shl$6$($2L, moonbitlang$core$strconv$$double_info.mantissa_bits))) {
    mantissa = moonbitlang$core$builtin$$Shl$op_shl$6$(mantissa, 1);
    exponent = exponent + 1 | 0;
    if ((exponent - moonbitlang$core$strconv$$double_info.bias | 0) >= ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0)) {
      const _bind = moonbitlang$core$strconv$$range_err$2$();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (moonbitlang$core$builtin$$Eq$op_equal$6$(moonbitlang$core$builtin$$BitAnd$land$6$(mantissa, moonbitlang$core$builtin$$Shl$op_shl$6$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits)), $0L)) {
    exponent = moonbitlang$core$strconv$$double_info.bias;
  }
  const bits = moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, self.negative);
  return new Result$Ok$11$(moonbitlang$core$int64$$Int64$reinterpret_as_double(bits));
}
function moonbitlang$core$strconv$$checked_mul(a, b) {
  if (moonbitlang$core$builtin$$Eq$op_equal$0$(a, $0L) || moonbitlang$core$builtin$$Eq$op_equal$0$(b, $0L)) {
    return $0L;
  }
  if (moonbitlang$core$builtin$$Eq$op_equal$0$(a, $1L)) {
    return b;
  }
  if (moonbitlang$core$builtin$$Eq$op_equal$0$(b, $1L)) {
    return a;
  }
  if (moonbitlang$core$builtin$$op_lt$0$(b, $0L) || moonbitlang$core$builtin$$op_lt$0$(a, $0L)) {
    return undefined;
  }
  const r = moonbitlang$core$builtin$$Div$op_div$0$(moonbitlang$core$uint64$$max_value, b);
  const q = moonbitlang$core$builtin$$Div$op_div$0$($1L, b);
  if (moonbitlang$core$builtin$$op_lt$0$(moonbitlang$core$builtin$$Add$op_add$0$(moonbitlang$core$builtin$$Add$op_add$0$(r, r), q), a)) {
    return undefined;
  }
  return moonbitlang$core$builtin$$Mul$op_mul$0$(a, b);
}
function moonbitlang$core$strconv$$pow10_fast_path(exponent) {
  return moonbitlang$core$array$$Array$op_get$9$(moonbitlang$core$strconv$$table, exponent & 31);
}
function moonbitlang$core$strconv$$Number$is_fast_path(self) {
  return moonbitlang$core$builtin$$op_le$6$(moonbitlang$core$strconv$$min_exponent_fast_path, self.exponent) && (moonbitlang$core$builtin$$op_le$6$(self.exponent, moonbitlang$core$strconv$$max_exponent_disguised_fast_path) && (moonbitlang$core$builtin$$op_le$0$(self.mantissa, moonbitlang$core$strconv$$max_mantissa_fast_path) && !self.many_digits));
}
function moonbitlang$core$strconv$$Number$try_fast_path(self) {
  if (moonbitlang$core$strconv$$Number$is_fast_path(self)) {
    let value;
    if (moonbitlang$core$builtin$$op_le$6$(self.exponent, moonbitlang$core$strconv$$max_exponent_fast_path)) {
      const value$2 = moonbitlang$core$double$$Double$convert_uint64(self.mantissa);
      value = moonbitlang$core$builtin$$op_lt$6$(self.exponent, $0L) ? value$2 / moonbitlang$core$strconv$$pow10_fast_path(-moonbitlang$core$int64$$Int64$to_int(self.exponent)) : value$2 * moonbitlang$core$strconv$$pow10_fast_path(moonbitlang$core$int64$$Int64$to_int(self.exponent));
    } else {
      const shift = moonbitlang$core$builtin$$Sub$op_sub$6$(self.exponent, moonbitlang$core$strconv$$max_exponent_fast_path);
      const _bind = moonbitlang$core$strconv$$checked_mul(self.mantissa, moonbitlang$core$array$$Array$op_get$0$(moonbitlang$core$strconv$$int_pow10, moonbitlang$core$int64$$Int64$to_int(shift)));
      let mantissa;
      if (_bind === undefined) {
        return Option$None$12$;
      } else {
        const _Some = _bind;
        const _m = _Some;
        mantissa = _m;
      }
      if (moonbitlang$core$builtin$$op_gt$0$(mantissa, moonbitlang$core$strconv$$max_mantissa_fast_path)) {
        return Option$None$12$;
      }
      value = moonbitlang$core$double$$Double$convert_uint64(mantissa) * moonbitlang$core$strconv$$pow10_fast_path(moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$strconv$$max_exponent_fast_path));
    }
    if (self.negative) {
      value = -value;
    }
    return new Option$Some$12$(value);
  } else {
    return Option$None$12$;
  }
}
function moonbitlang$core$strconv$$parse_double(str) {
  if (str.length === 0) {
    const _bind = moonbitlang$core$strconv$$syntax_err$2$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  if (!moonbitlang$core$strconv$$check_underscore(str)) {
    const _bind = moonbitlang$core$strconv$$syntax_err$2$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  const _bind = moonbitlang$core$strconv$$parse_number(str);
  let _bind$2;
  if (_bind === undefined) {
    const _bind$3 = moonbitlang$core$strconv$$parse_inf_nan(str);
    if (_bind$3 === undefined) {
      const _bind$4 = moonbitlang$core$strconv$$syntax_err$19$();
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _bind$2 = _ok._0;
      } else {
        return _bind$4;
      }
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _num = _x._0;
      const _consumed = _x._1;
      if (str.length !== _consumed) {
        const _bind$4 = moonbitlang$core$strconv$$syntax_err$19$();
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$2 = _ok._0;
        } else {
          return _bind$4;
        }
      } else {
        return new Result$Ok$11$(_num);
      }
    }
  } else {
    const _Some = _bind;
    const _r = _Some;
    _bind$2 = _r;
  }
  const _num = _bind$2._0;
  const _consumed = _bind$2._1;
  if (str.length !== _consumed) {
    const _bind$3 = moonbitlang$core$strconv$$syntax_err$2$();
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
  }
  const _bind$3 = moonbitlang$core$strconv$$Number$try_fast_path(_num);
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _value = _Some._0;
    return new Result$Ok$11$(_value);
  } else {
    const _bind$4 = moonbitlang$core$strconv$$parse_decimal_priv(str);
    let ret;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      ret = _ok._0;
    } else {
      return _bind$4;
    }
    return moonbitlang$core$strconv$$Decimal$to_double_priv(ret);
  }
}
function moonbitlang$core$string$$String$view(self, start_offset, end_offset) {
  return start_offset >= 0 && (start_offset <= end_offset && end_offset <= self.length) ? { str: self, start: start_offset, end: end_offset } : moonbitlang$core$builtin$$abort$3$("Invalid index for View");
}
function moonbitlang$core$string$$String$view$46$start_offset$46$default() {
  return 0;
}
function moonbitlang$core$string$$String$view$46$end_offset$46$default(self) {
  return self.length;
}
function moonbitlang$core$string$$is_trailing_surrogate(c) {
  return 56320 <= c && c <= 57343;
}
function moonbitlang$core$string$$String$offset_of_nth_char_backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const _tmp = utf16_offset - 1 | 0;
      const c = self.charCodeAt(_tmp);
      if (moonbitlang$core$string$$is_trailing_surrogate(c)) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function moonbitlang$core$string$$is_leading_surrogate(c) {
  return 55296 <= c && c <= 56319;
}
function moonbitlang$core$string$$String$offset_of_nth_char_forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const _tmp = utf16_offset;
        const c = self.charCodeAt(_tmp);
        if (moonbitlang$core$string$$is_leading_surrogate(c)) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
  } else {
    return moonbitlang$core$builtin$$abort$1$("Invalid start index");
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char(self, i, start_offset, end_offset) {
  return i >= 0 ? moonbitlang$core$string$$String$offset_of_nth_char_forward(self, i, start_offset, end_offset) : moonbitlang$core$string$$String$offset_of_nth_char_backward(self, -i, start_offset, end_offset);
}
function moonbitlang$core$string$$String$char_length_eq(self, len, start_offset, end_offset) {
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset && count < len) {
      const c1 = self.charCodeAt(index);
      if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < end_offset) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
          const _tmp$4 = index + 2 | 0;
          const _tmp$5 = count + 1 | 0;
          _tmp = _tmp$4;
          _tmp$2 = _tmp$5;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$2$("invalid surrogate pair");
        }
      }
      const _tmp$3 = index + 1 | 0;
      const _tmp$4 = count + 1 | 0;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return count === len && index === end_offset;
    }
  }
}
function moonbitlang$core$string$$String$char_length_ge(self, len, start_offset, end_offset) {
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset && count < len) {
      const c1 = self.charCodeAt(index);
      if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < end_offset) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
          const _tmp$4 = index + 2 | 0;
          const _tmp$5 = count + 1 | 0;
          _tmp = _tmp$4;
          _tmp$2 = _tmp$5;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$2$("invalid surrogate pair");
        }
      }
      const _tmp$3 = index + 1 | 0;
      const _tmp$4 = count + 1 | 0;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return count >= len;
    }
  }
}
function moonbitlang$core$builtin$$Default$default$11$() {
  return "";
}
function moonbitlang$core$builtin$$Default$default$20$() {
  return { bindTo: moonbitlang$core$builtin$$Default$default$17$(), speed: 0, string: moonbitlang$core$builtin$$Default$default$11$(), bool: false };
}
function username$hello$rotate$$Rotate$start(self) {
  moonbitlang$core$builtin$$println$11$("start");
}
function username$hello$rotate$$Rotate$update(self) {
  moonbitlang$core$builtin$$println$11$(`current speed is ${moonbitlang$core$builtin$$Show$to_string$4$(self.speed)}`);
}
function username$hello$rotate$$Rotate$ondestroy(self) {
  moonbitlang$core$builtin$$println$11$("onDestroy...");
}
function username$hello$rotate$$new() {
  return moonbitlang$core$builtin$$Default$default$20$();
}
function username$hello$rotate$$bind(bindTo) {
  const self = username$hello$rotate$$new();
  const json = moonbitlang$core$json$$parse(username$hello$bind$$MoonBehaviour$get_serialized_json(bindTo));
  if (json.$tag === 1) {
    const _Ok = json;
    const _json = _Ok._0;
    if (_json.$tag === 6) {
      const _Object = _json;
      const _map = _Object._0;
      const _bind = moonbitlang$core$builtin$$Map$op_get$15$(_map, "speed");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x.$tag === 3) {
          const _Number = _x;
          const _speed = _Number._0;
          self.speed = moonbitlang$core$double$$Double$to_int(_speed);
        }
      }
      const _bind$2 = moonbitlang$core$builtin$$Map$op_get$15$(_map, "string");
      if (_bind$2 === undefined) {
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x.$tag === 4) {
          const _String = _x;
          const _string = _String._0;
          self.string = _string;
        }
      }
      const _bind$3 = moonbitlang$core$builtin$$Map$op_get$15$(_map, "bool");
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        switch (_x.$tag) {
          case 1: {
            self.bool = true;
            break;
          }
          case 2: {
            self.bool = false;
            break;
          }
        }
      }
    }
  }
  self.bindTo = new Option$Some$6$(bindTo);
  username$hello$bind$$MoonBehaviour$set_start(bindTo, () => {
    username$hello$rotate$$Rotate$start(self);
  });
  username$hello$bind$$MoonBehaviour$set_update(bindTo, () => {
    username$hello$rotate$$Rotate$update(self);
  });
  username$hello$bind$$MoonBehaviour$set_ondestroy(bindTo, () => {
    username$hello$rotate$$Rotate$ondestroy(self);
  });
}
export { username$hello$rotate$$bind as bind }
