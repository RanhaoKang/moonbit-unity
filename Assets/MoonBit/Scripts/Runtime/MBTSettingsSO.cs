using UnityEngine;
using UnityEditor;
using System;
using System.IO;
using System.Collections.Generic;

namespace MoonBit
{
    /// <summary>
    /// MBT settings configuration scriptable object
    /// </summary>
    /// 
    [CreateAssetMenu(menuName = "MoonBit/MBTSettings", order = 100)]
    public class MBTSettingsSO : ScriptableObject
    {
        [SerializeField]
        private string[] m_compilePaths; // Array of paths for compilation

        [SerializeField]
        private string m_targetPath; // Array of target output paths

        [SerializeField, Tooltip("Path to Moon tool (supports ~, $HOME, or absolute paths)")]
        private string m_moonToolPath; // Path to the Moon tool executable

        /// <summary>
        /// Gets or sets the compilation paths
        /// </summary>
        public string[] CompilePaths
        {
            get => m_compilePaths;
            set => m_compilePaths = value;
        }

        /// <summary>
        /// Gets or sets the target output paths
        /// </summary>
        public string TargetPath
        {
            get => m_targetPath;
            set => m_targetPath = value;
        }

        /// <summary>
        /// Gets or sets the Moon tool executable path
        /// </summary>
        public string MoonToolPath
        {
            get => ExpandPath(m_moonToolPath);
            set => m_moonToolPath = value;
        }

        /// <summary>
        /// Expands user-relative paths (~ or $HOME) to absolute paths
        /// </summary>
        private static string ExpandPath(string path)
        {
            if (string.IsNullOrEmpty(path)) return path;

            // Handle ~ and $HOME
            if (path.StartsWith("~") || path.Contains("$HOME"))
            {
                string homePath = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
                path = path.Replace("~", homePath).Replace("$HOME", homePath);
            }

            // Convert to platform-specific path
            return Path.GetFullPath(path);
        }
    }

#if UNITY_EDITOR
    [CustomEditor(typeof(MBTSettingsSO))]
    public class MBTSettingsSOEditor : Editor
    {
        public override void OnInspectorGUI()
        {
            serializedObject.Update();

            // Compile Paths with search button
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField("Compile Paths", GUILayout.Width(EditorGUIUtility.labelWidth));
            if (GUILayout.Button("refresh"))
            {
                FindMoonModFolders(serializedObject.FindProperty("m_compilePaths"));
            }
            EditorGUILayout.EndHorizontal();
            EditorGUILayout.PropertyField(serializedObject.FindProperty("m_compilePaths"), GUIContent.none, true);

            // Regular fields
            EditorGUILayout.PropertyField(serializedObject.FindProperty("m_targetPath"));
            EditorGUILayout.PropertyField(serializedObject.FindProperty("m_moonToolPath"));

            serializedObject.ApplyModifiedProperties();
        }

        private void FindMoonModFolders(SerializedProperty pathsProperty)
        {
            string[] allDirectories = Directory.GetDirectories(Application.dataPath, "*", SearchOption.AllDirectories);
            List<string> moonFolders = new List<string>();

            foreach (string directory in allDirectories)
            {
                if (File.Exists(Path.Combine(directory, "moon.mod.json")))
                {
                    // Convert to Unity relative path
                    string relativePath = "Assets" + directory.Replace(Application.dataPath, "").Replace('\\', '/');
                    moonFolders.Add(relativePath + "/moon.mod.json");
                }
            }

            pathsProperty.arraySize = moonFolders.Count;
            for (int i = 0; i < moonFolders.Count; i++)
            {
                pathsProperty.GetArrayElementAtIndex(i).stringValue = moonFolders[i];
            }
        }
    }
#endif
}