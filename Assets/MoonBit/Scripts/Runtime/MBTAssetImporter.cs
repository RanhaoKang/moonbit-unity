using UnityEditor.AssetImporters;
using UnityEngine;

namespace MoonBit
{
[ScriptedImporter(1, "mbt")]
public class MBTAssetImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        // 在这里处理文件导入逻辑
        var mainObject = new GameObject("MBTObject");
        // 可以创建和添加其他资产
        
        ctx.AddObjectToAsset("main obj", mainObject);
        ctx.SetMainObject(mainObject);
    }
}
}