import requests
from bs4 import BeautifulSoup

SUSPICIOUS_KEYWORDS = ["exotic animals", "rare tiger", "cheap ivory", "rhino horn"]

def scan_darkweb():
    url = "http://exampledarkwebmarket.onion"  # Replace with actual .onion site
    session = requests.Session()
    session.proxies = {
        'http': 'socks5h://localhost:9050',
        'https': 'socks5h://localhost:9050'
    }

    try:
        res = session.get(url, timeout=20)
        soup = BeautifulSoup(res.text, 'html.parser')
        ads = soup.find_all('div')

        fake_ads = [ad.get_text() for ad in ads if any(kw in ad.get_text().lower() for kw in SUSPICIOUS_KEYWORDS)]
        return fake_ads
    except Exception as e:
        return [f"Error accessing dark web: {e}"]
