@echo off
echo ========================================
echo    VIDEO COMPRESSION TOOL
echo ========================================
echo.
echo This will compress your galaxy.mp4 video for faster web loading.
echo Target: Reduce from 28.61MB to 2-5MB
echo.

REM Check if FFmpeg is installed
ffmpeg -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: FFmpeg is not installed!
    echo Please download from: https://ffmpeg.org/download.html
    echo Add it to your system PATH and try again.
    pause
    exit /b 1
)

echo FFmpeg found! Starting compression...
echo.

REM Create backup
if not exist "src\assets\galaxy_original.mp4" (
    copy "src\assets\galaxy.mp4" "src\assets\galaxy_original.mp4"
    echo Original video backed up as galaxy_original.mp4
)

REM Compress video
echo Compressing video...
ffmpeg -i "src\assets\galaxy.mp4" -vcodec libx264 -crf 28 -preset medium -vf "scale=960:540" -an -movflags +faststart "src\assets\galaxy_compressed.mp4"

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo    COMPRESSION SUCCESSFUL!
    echo ========================================
    echo.
    echo Original size:
    for %%I in ("src\assets\galaxy.mp4") do echo %%~zI bytes
    echo.
    echo Compressed size:
    for %%I in ("src\assets\galaxy_compressed.mp4") do echo %%~zI bytes
    echo.
    echo Replace the original file? (Y/N)
    set /p choice="Enter your choice: "
    if /i "%choice%"=="Y" (
        move "src\assets\galaxy_compressed.mp4" "src\assets\galaxy.mp4"
        echo Original file replaced with compressed version!
    ) else (
        echo Compressed file saved as galaxy_compressed.mp4
    )
    echo.
    echo Next steps:
    echo 1. Test the website
    echo 2. Deploy to Vercel
    echo 3. Enjoy fast loading!
) else (
    echo.
    echo ERROR: Compression failed!
    echo Please check the error messages above.
)

echo.
pause