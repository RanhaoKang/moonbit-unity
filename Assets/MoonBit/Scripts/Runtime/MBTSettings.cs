using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif
using System.IO;
using System.Collections.Generic;

namespace MoonBit
{
    /// <summary>
    /// MBT 基础设置类
    /// </summary>
    public static class MBTSettings
    {
        const string RESOURCES_PATH = "Assets/MoonBit/Resources";
        private static MBTSettingsSO s_Settings;

        /// <summary>
        /// 获取或创建 MBT 设置对象
        /// </summary>
        public static MBTSettingsSO instance
        {
            get
            {
                if (MBTSettings.s_Settings == null)
                {
                    MBTSettings.LoadSettings();
                }

                return MBTSettings.s_Settings;
            }
        }

        /// <summary>
        /// 加载 MBT 设置
        /// </summary>
        public static void LoadSettings()
        {
            // 从资源文件夹加载设置
            MBTSettingsSO settings = Resources.Load<MBTSettingsSO>("MBTSettings");

            if (settings == null)
            {
                // 如果不存在则创建默认设置
                settings = ScriptableObject.CreateInstance<MBTSettingsSO>();
#if UNITY_EDITOR
                // 在编辑器模式下保存默认设置
                if (!Application.isPlaying)
                {
                    UnityEditor.AssetDatabase.CreateAsset(settings, $"{RESOURCES_PATH}/MBTSettings.asset");
                    UnityEditor.AssetDatabase.SaveAssets();
                }
#endif
            }

            MBTSettings.s_Settings = settings;
        }

        /// <summary>
        /// 根据GameObject的路径获取模块名称
        /// </summary>
        /// <param name="gameObj">要处理的GameObject</param>
        /// <returns>处理后的模块名称</returns>
        public static string GetModuleName(GameObject prefab)
        {
            if (prefab == null)
            {
                Debug.LogWarning("传入的GameObject为null");
                return string.Empty;
            }


#if UNITY_EDITOR
        // 获取Prefab的资源路径
        string assetPath = AssetDatabase.GetAssetPath(prefab);
        
        if (string.IsNullOrEmpty(assetPath))
        {
            Debug.LogWarning("无法获取Prefab的资源路径，可能不是项目中的Asset");
            return string.Empty;
        }
        // todo: support multiple packages
        return Path.GetFileNameWithoutExtension(assetPath) + ".mjs";
#endif
        return string.Empty;
        }

        /// <summary>
        /// 获取GameObject的完整层级路径
        /// </summary>
        private static string GetGameObjectPath(GameObject gameObj)
        {
            if (gameObj.transform.parent == null)
            {
                return gameObj.name;
            }

            return GetGameObjectPath(gameObj.transform.parent.gameObject) + "/" + gameObj.name;
        }
    }
}