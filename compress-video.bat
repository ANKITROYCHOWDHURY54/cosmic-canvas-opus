@echo off
echo Video Compression Script for Cosmic Canvas Opus
echo ================================================
echo.
echo Current video size: 28.61 MB (too large for web)
echo Target size: 2-5 MB
echo.
echo This script will help you compress the video using FFmpeg
echo.
echo Step 1: Install FFmpeg
echo - Download from: https://ffmpeg.org/download.html
echo - Or use: winget install ffmpeg
echo.
echo Step 2: Run this command in PowerShell:
echo ffmpeg -i src\assets\galaxy.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart -vf "scale=1920:1080" src\assets\galaxy-compressed.mp4
echo.
echo Step 3: Replace the original file
echo - Rename galaxy-compressed.mp4 to galaxy.mp4
echo.
echo Alternative: Use online compression
echo - Go to: https://cloudconvert.com/mp4-converter
echo - Upload galaxy.mp4
echo - Set quality to 60-70%
echo - Download and replace
echo.
pause
