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
                jsEnv = new JsEnv(new FileSystemLoader(root), 9229);
            }
            var bind = jsEnv.ExecuteModule<ModuleInit>(MBTSettings.GetModuleName(m_module), "bind");

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

    public class FileSystemLoader : ILoader
    {
        private string rootPath;

        public FileSystemLoader(string root)
        {
            Debug.Log($"Init Loader at root: {root}");
            this.rootPath = root;
        }

        public bool FileExists(string filepath)
        {
            string fullPath = Path.Combine(rootPath, filepath);
            return File.Exists(fullPath);
        }

        public string ReadFile(string filepath, out string debugpath)
        {
            debugpath = Path.Combine(rootPath, filepath);

            try
            {
                return File.ReadAllText(debugpath);
            }
            catch (System.Exception e)
            {
                Debug.LogError($"Failed to read file: {debugpath}, Error: {e.Message}");
                debugpath = "";
                return null;
            }
        }
    }
}