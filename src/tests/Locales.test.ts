import { environment } from '../lib/environment';

declare const __dirname: string;

const fs = jest.requireActual('fs') as any;
const path = jest.requireActual('path') as any;

const localesPath = path.join(__dirname, '..', '_locales');
const messageKey = 'settingsGeneralSmartFeaturesNoChrome';
const urlToken = '{firefoxUrl}';
const rawFirefoxUrl = /https?:\/\/(www\.)?(get)?firefox\.com/i;

describe('locales', () => {
  const localeNames: string[] = fs.readdirSync(localesPath, { withFileTypes: true })
    .filter((entry: any) => entry.isDirectory())
    .map((entry: any) => entry.name);

  it('has locale folders', () => {
    expect(localeNames.length).toBeGreaterThan(0);
  });

  it.each(localeNames)('%s uses the firefox url token', (localeName) => {
    const filePath = path.join(localesPath, localeName, 'messages.json');
    // strip the utf-8 BOM (present in some locale files) before parsing
    const content: string = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
    const messages = JSON.parse(content);

    expect(content).not.toMatch(rawFirefoxUrl);

    const message = messages[messageKey]?.message;
    expect(typeof message).toBe('string');
    expect(message).toContain(urlToken);

    const localizedHtml = message.replaceAll(urlToken, environment.links.firefox);
    expect(localizedHtml).toContain(`href='${environment.links.firefox}'`);
  });

  it('firefox link constant points to firefox.com', () => {
    expect(environment.links.firefox).toBe('https://www.firefox.com/');
  });
});
