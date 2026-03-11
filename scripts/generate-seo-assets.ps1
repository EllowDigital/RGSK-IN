Add-Type -AssemblyName System.Drawing

function New-RoundedRectanglePath {
  param(
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $diameter = $Radius * 2
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
  $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
  $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

function Save-Jpeg {
  param(
    [System.Drawing.Bitmap]$Bitmap,
    [string]$Path,
    [int]$Quality = 92
  )

  $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }
  $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality,
    [long]$Quality
  )
  $Bitmap.Save($Path, $encoder, $encoderParameters)
}

$root = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $root 'public'
$logoPath = Join-Path $publicDir 'logo.png'
$ogImagePath = Join-Path $publicDir 'og-image.jpg'

$emerald = [System.Drawing.Color]::FromArgb(16, 185, 129)
$emeraldSoft = [System.Drawing.Color]::FromArgb(94, 234, 212)
$navy = [System.Drawing.Color]::FromArgb(8, 15, 28)
$navySoft = [System.Drawing.Color]::FromArgb(22, 35, 52)
$white = [System.Drawing.Color]::FromArgb(248, 250, 252)
$muted = [System.Drawing.Color]::FromArgb(179, 191, 207)

$logoBitmap = New-Object System.Drawing.Bitmap 512, 512
$logoGraphics = [System.Drawing.Graphics]::FromImage($logoBitmap)
$logoGraphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$logoGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$logoGraphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$logoGraphics.Clear([System.Drawing.Color]::Transparent)

$logoShadowBrush = New-Object System.Drawing.Drawing2D.PathGradientBrush((New-RoundedRectanglePath -X 72 -Y 76 -Width 368 -Height 368 -Radius 84))
$logoShadowBrush.CenterColor = [System.Drawing.Color]::FromArgb(90, 16, 185, 129)
$logoShadowBrush.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 16, 185, 129))
$logoGraphics.FillRectangle($logoShadowBrush, 32, 36, 448, 448)

$logoPathShape = New-RoundedRectanglePath -X 48 -Y 48 -Width 416 -Height 416 -Radius 88
$logoBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle 48, 48, 416, 416),
  $navy,
  $navySoft,
  45
)
$logoGraphics.FillPath($logoBrush, $logoPathShape)

$logoBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(90, $emerald), 4)
$logoGraphics.DrawPath($logoBorder, $logoPathShape)

$accentPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(180, $emeraldSoft), 12)
$accentPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$accentPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
$logoGraphics.DrawArc($accentPen, 96, 96, 320, 320, 210, 118)
$logoGraphics.DrawArc($accentPen, 112, 112, 288, 288, 25, 78)

$logoFontMain = New-Object System.Drawing.Font('Segoe UI', 126, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$logoFontSub = New-Object System.Drawing.Font('Segoe UI', 28, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)

$logoFormat = New-Object System.Drawing.StringFormat
$logoFormat.Alignment = [System.Drawing.StringAlignment]::Center
$logoFormat.LineAlignment = [System.Drawing.StringAlignment]::Center

$logoGraphics.DrawString('R', $logoFontMain, (New-Object System.Drawing.SolidBrush($white)), 220, 210, $logoFormat)
$logoGraphics.DrawString('G', $logoFontMain, (New-Object System.Drawing.SolidBrush($emerald)), 304, 210, $logoFormat)
$logoGraphics.DrawString('DIGITAL', $logoFontSub, (New-Object System.Drawing.SolidBrush($muted)), 256, 355, $logoFormat)

$logoBitmap.Save($logoPath, [System.Drawing.Imaging.ImageFormat]::Png)

$ogBitmap = New-Object System.Drawing.Bitmap 1200, 630
$ogGraphics = [System.Drawing.Graphics]::FromImage($ogBitmap)
$ogGraphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$ogGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$ogGraphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$backgroundRect = New-Object System.Drawing.Rectangle 0, 0, 1200, 630
$backgroundBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($backgroundRect, $navy, $navySoft, 25)
$ogGraphics.FillRectangle($backgroundBrush, $backgroundRect)

$glow1 = New-Object System.Drawing.Drawing2D.GraphicsPath
$glow1.AddEllipse(-100, -40, 420, 420)
$glowBrush1 = New-Object System.Drawing.Drawing2D.PathGradientBrush($glow1)
$glowBrush1.CenterColor = [System.Drawing.Color]::FromArgb(120, 16, 185, 129)
$glowBrush1.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 16, 185, 129))
$ogGraphics.FillEllipse($glowBrush1, -100, -40, 420, 420)

$glow2 = New-Object System.Drawing.Drawing2D.GraphicsPath
$glow2.AddEllipse(820, 250, 420, 420)
$glowBrush2 = New-Object System.Drawing.Drawing2D.PathGradientBrush($glow2)
$glowBrush2.CenterColor = [System.Drawing.Color]::FromArgb(90, 94, 234, 212)
$glowBrush2.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 94, 234, 212))
$ogGraphics.FillEllipse($glowBrush2, 820, 250, 420, 420)

for ($x = 0; $x -lt 1200; $x += 48) {
  $gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(18, 255, 255, 255), 1)
  $ogGraphics.DrawLine($gridPen, $x, 0, $x, 630)
}
for ($y = 0; $y -lt 630; $y += 48) {
  $gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(18, 255, 255, 255), 1)
  $ogGraphics.DrawLine($gridPen, 0, $y, 1200, $y)
}

$panelPath = New-RoundedRectanglePath -X 52 -Y 52 -Width 1096 -Height 526 -Radius 42
$panelBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle 52, 52, 1096, 526),
  [System.Drawing.Color]::FromArgb(225, 11, 19, 31),
  [System.Drawing.Color]::FromArgb(195, 18, 30, 44),
  0
)
$ogGraphics.FillPath($panelBrush, $panelPath)
$panelBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(50, 148, 163, 184), 2)
$ogGraphics.DrawPath($panelBorder, $panelPath)

$logoImage = [System.Drawing.Image]::FromFile($logoPath)
$ogGraphics.DrawImage($logoImage, 110, 160, 220, 220)

$pillPath = New-RoundedRectanglePath -X 380 -Y 114 -Width 280 -Height 44 -Radius 22
$pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(35, 16, 185, 129))
$ogGraphics.FillPath($pillBrush, $pillPath)
$pillPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(110, 94, 234, 212), 2)
$ogGraphics.DrawPath($pillPen, $pillPath)

$pillFont = New-Object System.Drawing.Font('Segoe UI', 18, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$headingFont = New-Object System.Drawing.Font('Segoe UI', 56, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$subheadingFont = New-Object System.Drawing.Font('Segoe UI', 26, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$bodyFont = New-Object System.Drawing.Font('Segoe UI', 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

$ogGraphics.DrawString('LUCKNOW DIGITAL PARTNER', $pillFont, (New-Object System.Drawing.SolidBrush($emeraldSoft)), 402, 124)
$ogGraphics.DrawString('RGSK Technologies', $headingFont, (New-Object System.Drawing.SolidBrush($white)), 380, 182)
$ogGraphics.DrawString('Web Development | Mobile Apps | SEO | WhatsApp & Bulk SMS', $subheadingFont, (New-Object System.Drawing.SolidBrush($emerald)), 382, 274)

$bodyLayout = New-Object System.Drawing.RectangleF 382, 330, 680, 120
$bodyFormat = New-Object System.Drawing.StringFormat
$bodyFormat.Alignment = [System.Drawing.StringAlignment]::Near
$bodyFormat.LineAlignment = [System.Drawing.StringAlignment]::Near
$ogGraphics.DrawString(
  'Digital solutions company helping businesses across Lucknow and India grow with high-performance websites, marketing systems, and custom software.',
  $bodyFont,
  (New-Object System.Drawing.SolidBrush($muted)),
  $bodyLayout,
  $bodyFormat
)

$footerFont = New-Object System.Drawing.Font('Segoe UI', 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$ogGraphics.DrawString('rgsktechnologies.in', $footerFont, (New-Object System.Drawing.SolidBrush($white)), 382, 500)
$ogGraphics.DrawString('+91-7054466111', $footerFont, (New-Object System.Drawing.SolidBrush($muted)), 585, 500)

Save-Jpeg -Bitmap $ogBitmap -Path $ogImagePath -Quality 92

$logoImage.Dispose()
$ogGraphics.Dispose()
$ogBitmap.Dispose()
$logoGraphics.Dispose()
$logoBitmap.Dispose()
$logoShadowBrush.Dispose()
$logoPathShape.Dispose()
$logoBrush.Dispose()
$logoBorder.Dispose()
$accentPen.Dispose()
$logoFontMain.Dispose()
$logoFontSub.Dispose()
$logoFormat.Dispose()
$backgroundBrush.Dispose()
$glow1.Dispose()
$glowBrush1.Dispose()
$glow2.Dispose()
$glowBrush2.Dispose()
$panelPath.Dispose()
$panelBrush.Dispose()
$panelBorder.Dispose()
$pillPath.Dispose()
$pillBrush.Dispose()
$pillPen.Dispose()
$pillFont.Dispose()
$headingFont.Dispose()
$subheadingFont.Dispose()
$bodyFont.Dispose()
$bodyFormat.Dispose()
$footerFont.Dispose()

Write-Output "Generated $logoPath"
Write-Output "Generated $ogImagePath"