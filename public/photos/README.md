# Photo & Logo Structure

## Member Photos (`/photos/{dept}/`)
Each department folder holds member photos.
- **Naming**: Use NRP as filename, e.g. `5026221140.jpg`
- **Format**: JPG/PNG, 400×400px minimum, 1:1 aspect ratio
- **Example**: `/photos/bph/5026221140.jpg`

## Gallery Photos (`/photos/{dept}/gallery/`)
Each department has a gallery subfolder for carousel photos.
- **Naming**: Use sequential numbers, e.g. `1.jpg`, `2.jpg`, `3.jpg`
- **Format**: JPG/PNG, 800×450px (16:9), landscape preferred
- Add paths to `data.ts` → `gallery` array:
  ```ts
  gallery: ["/photos/hrd/gallery/1.jpg", "/photos/hrd/gallery/2.jpg"]
  ```

## Department Logos (`/logos/{dept}.png`)
- **Naming**: `{dept_id}.png` — e.g. `hrd.png`, `ia.png`, `rnd.png`
- **Format**: PNG with transparent background, 200×200px minimum
- Already referenced in `data.ts` → `logo` field

## Department Performance Scores
- Update `performance` field in `data.ts` for each department (0-100)
- Score of `0` means "tidak ditampilkan" (hidden in UI)
- Example:
  ```ts
  { id: "hrd", performance: 95.5, ... }
  ```

## Folders:
```
public/
├── logos/        ← Department logos (bph.png, hrd.png, etc.)
├── photos/
│   ├── bph/
│   │   ├── gallery/   ← BPH carousel photos
│   │   └── *.jpg      ← BPH member photos
│   ├── hrd/
│   │   ├── gallery/
│   │   └── *.jpg
│   ├── ia/ ...
│   ├── swf/ ...
│   ├── rnd/ ...
│   ├── im/ ...
│   ├── ea/ ...
│   ├── es/ ...
│   └── socdev/ ...
```
