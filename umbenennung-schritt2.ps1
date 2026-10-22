# Schritt 2: Git die Umbenennungen beibringen, bei denen sich nur die
# Gross-/Kleinschreibung geaendert hat. Windows unterscheidet das nicht,
# Linux (und damit der GitHub-Build) schon.

Set-Location "C:\Users\MarcoScheck\Documents\New_Wiki Test\smart-me-wiki"

# Alten Namen aus dem Index nehmen, neuen aufnehmen.
git rm --cached --ignore-unmatch -q "docs/drittprodukte/Stromwandler.md"
git rm --cached --ignore-unmatch -q "docs/drittprodukte/zaehlersteckklemmen-nimbus-100A.md"
git rm --cached --ignore-unmatch -q "docs/planung/Messkonzept-Notstromloesung.md"
git rm --cached --ignore-unmatch -q "docs/planung/Projektkonfigurator.md"
git rm --cached --ignore-unmatch -q "docs/produkte/Telstar-CT.md"
git rm --cached --ignore-unmatch -q "docs/schnittstellen/dta-vhka-files/AbaImmo.md"
git rm --cached --ignore-unmatch -q "docs/schnittstellen/dta-vhka-files/Garaio-REM.md"
git rm --cached --ignore-unmatch -q "docs/schnittstellen/dta-vhka-files/Immotop2.md"

git add "docs/drittprodukte/stromwandler.md"
git add "docs/drittprodukte/zaehlersteckklemmen-nimbus-100a.md"
git add "docs/planung/messkonzept-notstromloesung.md"
git add "docs/planung/projektkonfigurator.md"
git add "docs/produkte/telstar-ct.md"
git add "docs/schnittstellen/dta-vhka-files/abaimmo.md"
git add "docs/schnittstellen/dta-vhka-files/garaio-rem.md"
git add "docs/schnittstellen/dta-vhka-files/immotop2.md"

# Alles Uebrige (Loeschungen, Bildordner, neue Seiten) nachziehen.
git add -A

Write-Host ""
Write-Host "--- Was Git jetzt sieht (R = umbenannt) ---"
git status --short

Write-Host ""
Write-Host "--- Bauen ---"
npm run clear
npm run translate
npm run translate:anchors
npm run build
