///|
typealias MoonBehaviour = @bind.MoonBehaviour

///|
pub struct Rotate {
  mut bindTo : MoonBehaviour?
  speed : Int
  string : String
  bool : Bool
} derive(Default)

///|
fn start(self : Rotate) -> Unit {
  println("start")
}

///|
fn update(self : Rotate) -> Unit {
  println("current speed is \{self.speed}")
}

///|
fn ondestroy(self : Rotate) -> Unit {
  println("onDestroy...")
}

///|
fn new() -> Rotate {
  Rotate::default()
}

///|
impl @json.FromJson for Rotate with from_json(json, path) {
  guard json is Object(obj) else {
    raise @json.JsonDecodeError(
      (path, "Rotate.from_json: expected object"),
    )
  }
  let mut speed : Int = 0
  let mut string : String = ""
  let mut bool : Bool = false
  match json.value("speed") {
    None => ()
    Some(x) => speed = Double::to_int(x.as_number().unwrap())
  }
  match json.value("string") {
    None => ()
    Some(x) => string = x.as_string().unwrap()
  }
  match json.value("bool") {
    None => ()
    Some(x) => bool = x.as_bool().unwrap()
  }
  Rotate::{speed, string, bool, bindTo: None}
}

///|
pub fn bind(bindTo : MoonBehaviour) -> Unit {
  // let json = @json.parse?(bindTo.get_serialized_json())
  // guard json is Ok(json) else { return }
  // let self : Result[Rotate, @json.JsonDecodeError] = @json.from_json?(json)
  // guard self is Ok(self) else { return }
  let self = new()
  self.bindTo = Some(bindTo)
  bindTo.set_start(fn() { self.start() })
  bindTo.set_update(fn() { self.update() })
  bindTo.set_ondestroy(fn() { self.ondestroy() })
}
