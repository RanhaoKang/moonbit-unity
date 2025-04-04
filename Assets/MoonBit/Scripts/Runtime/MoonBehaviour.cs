using UnityEngine;
using Puerts;
using System;
using System.IO;
using System.Collections;

namespace MoonBit
{
    public delegate void ModuleInit(MoonBehaviour monoBehaviour);

    //只是演示纯用js实现MonoBehaviour逻辑的可能，
    //但从性能角度这并不是最佳实践，会导致过多的跨语言调用
    public class MoonBehaviour : MonoBehaviour
    {
        [SerializeField]
        private GameObject m_module;
        public GameObject Module => m_module;

        public Action JsStart;
        public Action JsUpdate;
        public Action JsOnDestroy;

        static JsEnv jsEnv;

        private void OnEnable()
        {
            var settings = MBTSettings.instance;
            if (jsEnv == null)
            {
                string root = Path.Combine(Application.dataPath, MBTSettings.instance.TargetPath);
                jsEnv = new JsEnv(new DefaultLoader(root), 9229);
            }
            var moduleName = MBTSettings.GetModuleName(m_module);
            Debug.Log($"Load module: {moduleName}");
            var bind = jsEnv.ExecuteModule<ModuleInit>(moduleName, "bind");

            if (bind != null) bind(this);

            Application.runInBackground = true;
        }

        private void OnDisable()
        {
            if (JsOnDestroy != null) JsOnDestroy();
        }

        void Start()
        {
            if (JsStart != null) JsStart();
        }

        void Update()
        {
            jsEnv.Tick();
            if (JsUpdate != null) JsUpdate();
        }

        void OnDestroy()
        {
            JsStart = null;
            JsUpdate = null;
            JsOnDestroy = null;
        }

        public IEnumerator Coroutine()
        {
            yield return new WaitForSeconds(1);
            UnityEngine.Debug.Log("coroutine done");
        }
    }
}