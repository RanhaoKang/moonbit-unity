import os
import shutil
from pathlib import Path

# todo: Subprocess via Unity code, uses pathes from MBTSettings
os.system("moon build --target js -C Assets/MoonBit/Samples --target-dir Library/MoonBitTarget")
# todo: replace with moon's post-build
for p in Path("Library/MoonBitTarget").glob("**/*.js"):
    # todo: use path from MBTSettings
    shutil.copy(p, "Assets/MoonBit/JSFiles/Resources/" + p.stem + ".mjs")