# Hike template for React Native

### Guide
- Add your changes to [hike-reference-app](https://github.com/lklacar/hike-reference-app)
- Make sure your feature works in [hike-reference-app](https://github.com/lklacar/hike-reference-app)
- Ensure your changes don't include anything they should not and make sure your commit does NOT include the patch file
- Commit your changes to [hike-reference-app](https://github.com/lklacar/hike-reference-app)
- Make sure your commit is merged to master
- Generate patch file in [hike-reference-app](https://github.com/lklacar/hike-reference-app) from your commit
```bash
    git format-patch -1 HEAD
```
- Apply your patch in this repository
```bash
    git apply --stat file.patch
    git apply --check file.patch
    git am < file.patch
```
- Make sure your patch did not do anything stupid
- Make sure you don't commit your patch
- Commit & push here