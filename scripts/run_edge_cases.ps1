$tempProfile = [System.IO.Path]::GetTempPath() + "edge_edgecase_" + [Guid]::NewGuid().ToString()
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
}

$proc = Start-Process -FilePath $edgePath -ArgumentList `
    "--headless=new", `
    "--remote-debugging-port=9222", `
    "--remote-allow-origins=*", `
    "--disable-extensions", `
    "--disable-sync", `
    "--no-first-run", `
    "--no-default-browser-check", `
    "--user-data-dir=$tempProfile", `
    "--window-size=1440,1050", `
    "--disable-gpu", `
    "http://localhost:3000/" -PassThru

Start-Sleep -Seconds 2

try {
    node scripts/test_edge_cases.js
    $exitCode = $LASTEXITCODE
}
finally {
    Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
    Start-Sleep -Milliseconds 500
    Remove-Item -Path $tempProfile -Recurse -Force -ErrorAction SilentlyContinue
}

exit $exitCode
