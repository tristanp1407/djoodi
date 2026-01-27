import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '../public/images');

async function convertToWebP() {
  const files = await readdir(imagesDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));

  console.log(`Found ${pngFiles.length} PNG files to convert\n`);

  for (const file of pngFiles) {
    const inputPath = join(imagesDir, file);
    const { name } = parse(file);
    const outputPath = join(imagesDir, `${name}.webp`);

    const inputInfo = await sharp(inputPath).metadata();
    const inputSize = (inputInfo.size || 0) / 1024;

    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    const outputInfo = await sharp(outputPath).metadata();
    const outputSize = (outputInfo.size || 0) / 1024;

    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);
    console.log(`${file}`);
    console.log(`  ${inputSize.toFixed(0)} KB -> ${outputSize.toFixed(0)} KB (${reduction}% reduction)\n`);
  }

  console.log('Done! WebP files created.');
}

convertToWebP().catch(console.error);
