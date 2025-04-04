///|
typealias MoonBehaviour = @bind.MoonBehaviour

///|
struct Rotate {
  mut bindTo : MoonBehaviour?
  speed : Int
  string_value : String
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
  self.bindTo = Some(bindTo)
  bindTo.set_start(fn() { self.start() })
  bindTo.set_update(fn() { self.update() })
  bindTo.set_ondestroy(fn() { self.ondestroy() })
}
