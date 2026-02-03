import re

def detect_fake_ad(text):
    fake_patterns = [
        r"cheap tiger skin", 
        r"buy elephant ivory", 
        r"rhino horn for sale"
    ]

    for pattern in fake_patterns:
        if re.search(pattern, text, re.IGNORECASE):
            return True
    return False
