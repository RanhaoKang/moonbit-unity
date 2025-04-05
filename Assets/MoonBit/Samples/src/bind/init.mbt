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
  #|  const propsComponent = self.GetComponent(puerts.$typeof(CS.MoonBit.MoonProperties));
  #|  for (let i = 0; i < propsComponent.Pairs.Length; i++) {
  #|    const p = propsComponent.Pairs.get_Item(i);
  #|    dict[p.key] = p.value;
  #|  }
  #|
  #|  return JSON.stringify(dict);
  #|}