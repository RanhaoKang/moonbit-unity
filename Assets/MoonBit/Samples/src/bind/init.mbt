pub extern type MoonBehaviour
pub extern "js" fn set_start(self : MoonBehaviour, f : () -> Unit) -> Unit = 
  #|(self, f) => self.JsStart = f
pub extern "js" fn set_update(self : MoonBehaviour, f : () -> Unit) -> Unit = 
  #|(self, f) => self.JsUpdate = f
pub extern "js" fn set_ondestroy(self : MoonBehaviour, f : () -> Unit) -> Unit = 
  #|(self, f) => self.JsOnDestroy = f

pub extern "js" fn get_serialized_json(self : MoonBehaviour) -> String =
  #|(self) => {
  #|  let dict = {};
  #|  for (let i = 0; i < self.Pairs.Length; i++) {
  #|    const p = self.Pairs.get_Item(i);
  #|    dict[p.key] = p.value;
  #|  }
  #|
  #|  JSON.stringify(dict);
  #|}