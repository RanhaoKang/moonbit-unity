pub extern type MoonBehaviour
pub extern "js" fn set_start(self : MoonBehaviour, f : () -> Unit) -> Unit = 
  #|(self, f) => self.JsStart = f
pub extern "js" fn set_update(self : MoonBehaviour, f : () -> Unit) -> Unit = 
  #|(self, f) => self.JsUpdate = f
pub extern "js" fn set_ondestroy(self : MoonBehaviour, f : () -> Unit) -> Unit = 
  #|(self, f) => self.JsOnDestroy = f
