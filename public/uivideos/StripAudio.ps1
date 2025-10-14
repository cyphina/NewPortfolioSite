# File extensions to process
$videoExtensions = @("*.mp4", "*.mkv")

foreach ($ext in $videoExtensions) {
    Get-ChildItem -Filter $ext | ForEach-Object {
        $input = $_.FullName
        $output = "$($_.BaseName)_noaudio$($_.Extension)"

        Write-Host "Removing audio from $input -> $output"

        # Strip audio stream (-an) but copy video
        ffmpeg -i "$input" -c:v copy -an "$output"
    }
}