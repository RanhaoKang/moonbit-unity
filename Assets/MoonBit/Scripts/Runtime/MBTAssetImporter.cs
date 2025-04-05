using UnityEditor.AssetImporters;
using UnityEngine;
using System.IO;

namespace MoonBit
{
    [ScriptedImporter(1, "mbt")]
    public class MBTAssetImporter : ScriptedImporter
    {
        public override void OnImportAsset(AssetImportContext ctx)
        {
            TextAsset subAsset = new TextAsset(File.ReadAllText(ctx.assetPath));
            ctx.AddObjectToAsset("text", subAsset);
            ctx.SetMainObject(subAsset);
        }
    }
}