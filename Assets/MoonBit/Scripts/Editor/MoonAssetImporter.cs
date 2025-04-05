using UnityEditor;
using UnityEngine;

public class MoonAssetImporter : AssetPostprocessor 
{
    // 特定类型的资源导入后调用
    void OnPostprocessTexture(MoonBit.MBTAssetImporter texture)
    {
        // 处理导入后的纹理
        Debug.Log("Trigger 了吗");
    }
}