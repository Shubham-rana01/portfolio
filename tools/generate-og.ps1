param()

Add-Type -AssemblyName System.Drawing

$outFile = Join-Path (Split-Path -Parent $PSScriptRoot) 'public\og.png'

$W = 1200
$H = 630

$bg = [System.Drawing.ColorTranslator]::FromHtml('#09090B')
$accent = [System.Drawing.ColorTranslator]::FromHtml('#E4684A')
$fg = [System.Drawing.ColorTranslator]::FromHtml('#ECECED')
$muted = [System.Drawing.ColorTranslator]::FromHtml('#9A9AA3')
$faint = [System.Drawing.ColorTranslator]::FromHtml('#67676F')
$ink = [System.Drawing.ColorTranslator]::FromHtml('#09090B')

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

$g.Clear($bg)

$pad = 80

# Measured rule grid, matching the hero background.
$gridPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(18, 255, 255, 255)), 1
for ($i = 1; $i -lt 6; $i++) {
    $x = [int]($W / 6 * $i)
    $g.DrawLine($gridPen, $x, 0, $x, $H)
}

# Monogram
$mono = 76
$r = 16
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$d = $r * 2
$path.AddArc($pad, $pad, $d, $d, 180, 90)
$path.AddArc($pad + $mono - $d, $pad, $d, $d, 270, 90)
$path.AddArc($pad + $mono - $d, $pad + $mono - $d, $d, $d, 0, 90)
$path.AddArc($pad, $pad + $mono - $d, $d, $d, 90, 90)
$path.CloseFigure()
$g.FillPath((New-Object System.Drawing.SolidBrush($accent)), $path)

$monoFont = New-Object System.Drawing.Font('Georgia', 36, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$center = New-Object System.Drawing.StringFormat
$center.Alignment = [System.Drawing.StringAlignment]::Center
$center.LineAlignment = [System.Drawing.StringAlignment]::Center
$g.DrawString('SR', $monoFont, (New-Object System.Drawing.SolidBrush($ink)),
    (New-Object System.Drawing.RectangleF($pad, ($pad + 2), $mono, $mono)), $center)

# Eyebrow
$labelFont = New-Object System.Drawing.Font('Consolas', 20, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('KARNAL, INDIA  /  IST (UTC+5:30)', $labelFont,
    (New-Object System.Drawing.SolidBrush($faint)), ($pad + $mono + 28), ($pad + 26))

# Name
$nameFont = New-Object System.Drawing.Font('Georgia', 96, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('Shubham Rana', $nameFont, (New-Object System.Drawing.SolidBrush($fg)), ($pad - 6), 215)

# Accent rule
$accentPen = New-Object System.Drawing.Pen ($accent), 3
$g.DrawLine($accentPen, $pad, 345, $pad + 90, 345)

# Role
$roleFont = New-Object System.Drawing.Font('Consolas', 26, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('SENIOR SOFTWARE ENGINEER', $roleFont,
    (New-Object System.Drawing.SolidBrush($accent)), ($pad + 110), 331)

# Tagline
$tagFont = New-Object System.Drawing.Font('Segoe UI', 32, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$tagRect = New-Object System.Drawing.RectangleF($pad, 390, ($W - ($pad * 2) - 40), 120)
$g.DrawString('Building scalable, reusable enterprise solutions with Angular, Java and Spring Boot.',
    $tagFont, (New-Object System.Drawing.SolidBrush($muted)), $tagRect)

# Footer rule + meta
$linePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(36, 255, 255, 255)), 1
$g.DrawLine($linePen, $pad, ($H - 110), ($W - $pad), ($H - 110))

$footFont = New-Object System.Drawing.Font('Consolas', 22, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('shubhamrana01.github.io/portfolio', $footFont,
    (New-Object System.Drawing.SolidBrush($faint)), $pad, ($H - 78))

$right = New-Object System.Drawing.StringFormat
$right.Alignment = [System.Drawing.StringAlignment]::Far
$g.DrawString('AVAILABLE FOR WORK', $footFont, (New-Object System.Drawing.SolidBrush($accent)),
    (New-Object System.Drawing.RectangleF($pad, ($H - 78), ($W - ($pad * 2)), 40)), $right)

$g.Dispose()
$bmp.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "OG image written to $outFile"
