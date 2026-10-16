param()

Add-Type -AssemblyName System.Drawing

$outDir = Join-Path (Split-Path -Parent $PSScriptRoot) 'public'
$bg = [System.Drawing.ColorTranslator]::FromHtml('#E4684A')
$fg = [System.Drawing.ColorTranslator]::FromHtml('#09090B')

function New-Monogram([int]$size) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    $r = [int][Math]::Round($size * 0.21)
    $d = $r * 2
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddArc(0, 0, $d, $d, 180, 90)
    $path.AddArc($size - $d - 1, 0, $d, $d, 270, 90)
    $path.AddArc($size - $d - 1, $size - $d - 1, $d, $d, 0, 90)
    $path.AddArc(0, $size - $d - 1, $d, $d, 90, 90)
    $path.CloseFigure()

    $brush = New-Object System.Drawing.SolidBrush($bg)
    $g.FillPath($brush, $path)

    $fontSize = [float]($size * 0.46)
    $font = New-Object System.Drawing.Font('Georgia', $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $fmt = New-Object System.Drawing.StringFormat
    $fmt.Alignment = [System.Drawing.StringAlignment]::Center
    $fmt.LineAlignment = [System.Drawing.StringAlignment]::Center
    $textBrush = New-Object System.Drawing.SolidBrush($fg)
    $rect = New-Object System.Drawing.RectangleF(0, [float]($size * 0.02), [float]$size, [float]$size)
    $g.DrawString('SR', $font, $textBrush, $rect, $fmt)

    $g.Dispose()
    return $bmp
}

function Save-Png([System.Drawing.Bitmap]$bmp, [string]$file) {
    $bmp.Save($file, [System.Drawing.Imaging.ImageFormat]::Png)
}

# PNG-compressed ICO entries are supported by every browser we target.
function Save-Ico([int[]]$sizes, [string]$file) {
    $streams = @()
    foreach ($s in $sizes) {
        $bmp = New-Monogram $s
        $ms = New-Object System.IO.MemoryStream
        $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        $streams += , $ms.ToArray()
        $ms.Dispose()
    }

    $fs = [System.IO.File]::Create($file)
    $bw = New-Object System.IO.BinaryWriter($fs)
    $bw.Write([uint16]0)
    $bw.Write([uint16]1)
    $bw.Write([uint16]$sizes.Count)

    $offset = 6 + (16 * $sizes.Count)
    for ($i = 0; $i -lt $sizes.Count; $i++) {
        $s = $sizes[$i]
        $bw.Write([byte]($(if ($s -ge 256) { 0 } else { $s })))
        $bw.Write([byte]($(if ($s -ge 256) { 0 } else { $s })))
        $bw.Write([byte]0)
        $bw.Write([byte]0)
        $bw.Write([uint16]1)
        $bw.Write([uint16]32)
        $bw.Write([uint32]$streams[$i].Length)
        $bw.Write([uint32]$offset)
        $offset += $streams[$i].Length
    }

    foreach ($data in $streams) { $bw.Write($data) }

    $bw.Flush()
    $bw.Dispose()
    $fs.Dispose()
}

Save-Ico @(16, 32, 48) (Join-Path $outDir 'favicon.ico')

$apple = New-Monogram 180
Save-Png $apple (Join-Path $outDir 'apple-touch-icon.png')
$apple.Dispose()

$og = New-Monogram 512
Save-Png $og (Join-Path $outDir 'icon-512.png')
$og.Dispose()

Write-Output 'Icons written to public/'
