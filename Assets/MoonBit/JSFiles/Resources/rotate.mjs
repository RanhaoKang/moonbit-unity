class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const Option$None$0$ = { $tag: 0 };
function Option$Some$0$(param0) {
  this._0 = param0;
}
Option$Some$0$.prototype.$tag = 1;
const username$hello$bind$$MoonBehaviour$set_start = (self, f) => self.JsStart = f;
const username$hello$bind$$MoonBehaviour$set_update = (self, f) => self.JsUpdate = f;
const username$hello$bind$$MoonBehaviour$set_ondestroy = (self, f) => self.JsOnDestroy = f;
function moonbitlang$core$builtin$$abort$0$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$StringBuilder$new(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$StringBuilder$to_string(self) {
  return self.val;
}
function moonbitlang$core$builtin$$Logger$write_char$1$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$Logger$write_string$1$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$output$46$abs$2$(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$builtin$$output$46$write_digits$3$(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$write_digits$3$(_env, num2);
  }
  const _tmp = moonbitlang$core$builtin$$output$46$abs$2$(num % radix | 0);
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: logger, _1: radix };
  moonbitlang$core$builtin$$output$46$write_digits$3$(_env, moonbitlang$core$builtin$$output$46$abs$2$(self));
}
function moonbitlang$core$int$$Int$output_size_hint(radix) {
  return 2 <= radix && radix < 7 ? 36 : 8 <= radix && radix < 15 ? 18 : 16 <= radix && radix <= 36 ? 10 : moonbitlang$core$builtin$$abort$0$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$int$$Int$output_size_hint(radix));
  moonbitlang$core$int$$Int$output(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$1$, method_1: moonbitlang$core$builtin$$Logger$write_substring$1$, method_2: moonbitlang$core$builtin$$Logger$write_char$1$ }, radix);
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$Show$to_string$0$(self) {
  return moonbitlang$core$int$$Int$to_string(self, 10);
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
function moonbitlang$core$builtin$$Logger$write_substring$1$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return self;
}
function moonbitlang$core$builtin$$println$4$(input) {
  console.log(moonbitlang$core$builtin$$Show$to_string$4$(input));
}
function moonbitlang$core$builtin$$Default$default$5$() {
  return Option$None$0$;
}
function moonbitlang$core$builtin$$Default$default$4$() {
  return "";
}
function moonbitlang$core$builtin$$Default$default$6$() {
  return { bindTo: moonbitlang$core$builtin$$Default$default$5$(), speed: 0, string: moonbitlang$core$builtin$$Default$default$4$(), bool: false };
}
function username$hello$rotate$$Rotate$start(self) {
  moonbitlang$core$builtin$$println$4$("start");
}
function username$hello$rotate$$Rotate$update(self) {
  moonbitlang$core$builtin$$println$4$(`current speed is ${moonbitlang$core$builtin$$Show$to_string$0$(self.speed)}`);
}
function username$hello$rotate$$Rotate$ondestroy(self) {
  moonbitlang$core$builtin$$println$4$("onDestroy...");
}
function username$hello$rotate$$new() {
  return moonbitlang$core$builtin$$Default$default$6$();
}
function username$hello$rotate$$bind(bindTo) {
  const self = username$hello$rotate$$new();
  self.bindTo = new Option$Some$0$(bindTo);
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
