import sys
try:
    from PIL import Image
except ImportError:
    print("NO_PIL"); sys.exit(1)

from collections import Counter
for f in ["logo-monogram.png", "logo-round-red.png", "favicon-master.png"]:
    im = Image.open(f).convert("RGBA")
    w, h = im.size
    cnt = Counter()
    for x in range(0, w, 2):
        for y in range(0, h, 2):
            r, g, b, a = im.getpixel((x, y))
            if a > 200:
                cnt[(r, g, b)] += 1
    print(f, im.size, "opaque:", sum(cnt.values()))
    print("  top:", cnt.most_common(5))
    print("  corners alpha:", im.getpixel((2, 2))[3], im.getpixel((w - 3, h - 3))[3])