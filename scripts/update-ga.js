#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read the GA_CONFIG from data.js
const dataPath = path.join(__dirname, '../src/data.js')
const dataContent = fs.readFileSync(dataPath, 'utf8')

// Extract the MEASUREMENT_ID using regex
const gaIdMatch = dataContent.match(/MEASUREMENT_ID:\s*['"`]([^'"`]+)['"`]/)
const measurementId = gaIdMatch ? gaIdMatch[1] : 'GA_MEASUREMENT_ID'

// Read the index.html file
const indexPath = path.join(__dirname, '../index.html')
let indexContent = fs.readFileSync(indexPath, 'utf8')

// Replace the placeholder with actual measurement ID
indexContent = indexContent.replace(/GA_MEASUREMENT_ID/g, measurementId)

// Write back to index.html
fs.writeFileSync(indexPath, indexContent)

console.log(`✅ Google Analytics ID updated to: ${measurementId}`)

// Also update the setup documentation
const setupPath = path.join(__dirname, '../GOOGLE_ANALYTICS_SETUP.md')
if (fs.existsSync(setupPath)) {
  let setupContent = fs.readFileSync(setupPath, 'utf8')
  setupContent = setupContent.replace(/G-YOUR_ACTUAL_ID/g, measurementId)
  fs.writeFileSync(setupPath, setupContent)
  console.log(`✅ Setup documentation updated with ID: ${measurementId}`)
}
