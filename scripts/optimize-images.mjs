/**
 * Image Optimization Script for Allia Studio
 * Converts PNG images to optimized WebP format
 * Run with: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, parse } from 'path';

const PUBLIC_DIR = './public';
const TEAM_DIR = './public/images/team';

// Configuration for different image types
const CONFIG = {
  logos: {
    width: 400, // Max width for logos
    quality: 85,
  },
  team: {
    width: 600, // Max width for team photos
    quality: 80,
  },
};

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath, outputPath, options = {}) {
  const { width, quality = 80 } = options;

  try {
    const metadata = await sharp(inputPath).metadata();
    const originalSize = (await stat(inputPath)).size;

    let pipeline = sharp(inputPath);

    // Resize if width is specified and image is larger
    if (width && metadata.width > width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Convert to WebP
    await pipeline
      .webp({ quality })
      .toFile(outputPath);

    const newSize = (await stat(outputPath)).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${inputPath}`);
    console.log(`  → ${outputPath}`);
    console.log(`  ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)\n`);

    return { originalSize, newSize };
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return null;
  }
}

/**
 * Process all images in a directory
 */
async function processDirectory(dir, options) {
  try {
    const files = await readdir(dir);
    const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));

    const results = [];
    for (const file of pngFiles) {
      const inputPath = join(dir, file);
      const { name } = parse(file);
      const outputPath = join(dir, `${name}.webp`);

      const result = await optimizeImage(inputPath, outputPath, options);
      if (result) results.push(result);
    }

    return results;
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
    return [];
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Allia Studio - Image Optimization\n');
  console.log('='.repeat(50) + '\n');

  let totalOriginal = 0;
  let totalNew = 0;

  // Optimize logos in public/
  console.log('📁 Processing logos...\n');
  const logoResults = await processDirectory(PUBLIC_DIR, CONFIG.logos);
  logoResults.forEach(r => {
    totalOriginal += r.originalSize;
    totalNew += r.newSize;
  });

  // Optimize team photos
  console.log('📁 Processing team photos...\n');
  const teamResults = await processDirectory(TEAM_DIR, CONFIG.team);
  teamResults.forEach(r => {
    totalOriginal += r.originalSize;
    totalNew += r.newSize;
  });

  // Summary
  console.log('='.repeat(50));
  console.log('\n📊 Summary:\n');
  console.log(`  Total original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total optimized: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total savings: ${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%`);
  console.log('\n✅ Done! WebP images created alongside originals.');
  console.log('   You can safely delete the .png files if desired.\n');
}

main().catch(console.error);
