# MoonBit-Unity

A very handy framework that lets you write MoonBit in Unity. (MoonBit -> JS backend -> PuerTS -> Unity)

"Handy" means few magic in gluing things together. Since MoonBit is rapidly growing in both language features and toolchains, I want to keep things bare and easy to evolve together.

Though still primitive, you can now begin exploring MoonBit in Unity.

# Get started
Tested with Unity 6 (6000.0.38f1) and Moon's version as below.
```bash
moon 0.1.20250402 (5cc5674 2025-04-02) ~/.moon/bin/moon
moonc v0.1.20250402+bf7b62354 ~/.moon/bin/moonc
moonrun 0.1.20250402 (5cc5674 2025-04-02) ~/.moon/bin/moonrun
```

Open `Assets/MoonBit/Samples/RotateCube.unity` and enter Play mode.

**TEMP** Run `python3 build.py` to compile code, see `todos` in it.

# Behaviour Code Example

```moonbit
typealias MoonBehaviour = @bind.MoonBehaviour

struct Rotate {
  mut bindTo : MoonBehaviour?
  speed : Int
  string_value : String
} derive(Default)

fn start(self : Rotate) -> Unit {
  println("start")
}

fn update(self : Rotate) -> Unit {
  println("current speed is \{self.speed}")
}

fn ondestroy(self : Rotate) -> Unit {
  println("onDestroy...")
}

fn new() -> Rotate {
  Rotate::default()
}

pub fn bind(bindTo : MoonBehaviour) -> Unit {
  let self = new()
  self.bindTo = Some(bindTo)
  bindTo.set_start(fn() { self.start() })
  bindTo.set_update(fn() { self.update() })
  bindTo.set_ondestroy(fn() { self.ondestroy() })
}
```

# Features
