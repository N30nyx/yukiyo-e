import os
def i(pkg):
    os.system(f"pip install {pkg} --upgrade")
print("installing deps...")
i("flask")
i("lxml")
i("html5lib")
i("easierjson")
i("beautifulsoup4")
i("tqdm")
i("requests")
print("done!\nEnjoy Yukiyo the App\n~ Aether(n30nyx)")
