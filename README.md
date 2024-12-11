# Selenium Tests zum Testen eines Studentenportals einer Hochschul-Website

Die Tests überprüfen das Studentenprotal einer Hochschul-Website auf ihre Funktionalitäten und ihre Fehleranfälligkeit.

# Vorrausetzungen

- Node.js

# Node Support Policy

Jeder Version des Selenium Treibers wird die aktuellste _semver-minor_
Version des [LTS] und den stabilen Node Release unterstützen. Alle  _semver-major_ &
_semver-minor_ Versionen zwischen dem LTS und dem stabilen Release werden den "best
effort" unterstützen. Mit jedem Selenium Release, alle  _semver-minor_ Node Releases
wwerden auch nach "best effort" unterstützt. Release, die älter als der aktuelle LTS sind,
_semver-major_ Releases, und alle instabilen Releases und Release-branches (z.B. "v.Next")
werden als strikt "unsupported" gewertet und somit nichzt unterstützt.

Zum Beispiel: Der momentane LTS und stabile Release sind v14.20.0 und
v18.8.0. Dann hätte der Selenium Release das folgende Support-Level:

|  Version  |    Support    |
| :-------: | :-----------: |
| <= 14.19  | _unsupported_ |
|  14.20.0  |   supported   |
|  18.0-7   |  best effort  |
|  18.8.0   |   supported   |
| >= 18.8.0 |  best effort  |
|  v.Next   | _unsupported_ |

# Installation

1. Die Webdriver installieren, siehe hierzu die [Readme der Webdriver seite](https://github.com/SeleniumHQ/selenium/blob/trunk/javascript/node/selenium-webdriver/README.md) 
2. `npm install i`

# Verwendung

1. Den Loginname und das Passwort in die `.env` schreiben.
2. Die Tests werden über die Commandline im ordner mit den Tests über den Befehl `node node_modules/mocha/bin/mocha.js <Dateiname>` ausgeführt. Dadurch wird
