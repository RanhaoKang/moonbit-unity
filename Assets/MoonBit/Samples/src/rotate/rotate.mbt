///|
typealias MoonBehaviour = @bind.MoonBehaviour

///|
pub struct Rotate {
  mut bindTo : MoonBehaviour?
  mut speed : Int
  mut string : String
  mut bool : Bool
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
pub fn bind(bindTo : MoonBehaviour) -> Unit {
  let self = new()
  let json = @json.parse?(bindTo.get_serialized_json())
  if json is Ok(json) && json is Object(map) {
    if map["speed"] is Some(Number(speed)) {
      self.speed = Double::to_int(speed)
    }
    if map["string"] is Some(String(string)) {
      self.string = string
    }
    match map["bool"] {
      Some(True) => self.bool = true
      Some(False) => self.bool = false
      Some(_) => ()
      None => ()
    }
  }
  self.bindTo = Some(bindTo)
  bindTo.set_start(fn() { self.start() })
  bindTo.set_update(fn() { self.update() })
  bindTo.set_ondestroy(fn() { self.ondestroy() })
}
